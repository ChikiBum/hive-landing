import {
  HttpException,
  HttpStatus,
  Injectable,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { getDataFromObject } from 'src/helpers/guards.helper';
import { BaseEntity, Not } from 'typeorm';

type Prop = {
  field: string;
  Entity: typeof BaseEntity;
  errorIfExist?: boolean;
  dataSource: string;
  entityField?: Array<string> | null;
  exceptCurrent?: null | {
    field: string;
    dataSource: string;
    entityField: string;
  };
  transformation?: null | Array<(data: any) => any>;
};

/**
 * This guard checks if one of the provided fields already exists in provided Entity.
 */
@Injectable()
export class CheckRecordExistGuard implements CanActivate {
  constructor(private config: Prop[]) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    for (const {
      field,
      Entity,
      errorIfExist = false,
      dataSource = 'body',
      entityField,
      exceptCurrent = null,
      transformation = null,
    } of this.config) {
      if (!(new Entity() instanceof BaseEntity)) {
        throw new Error(
          `Provided ${Entity.name} Entity inside ${CheckRecordExistGuard.name} must be instance of BaseEntity`,
        );
      }

      if (![field]) {
        throw new Error(
          `Request body does not contain ${field} field. Or ${field} field inside ${CheckRecordExistGuard.name} misspelled.`,
        );
      }
      const request = context.switchToHttp().getRequest();
      let searchParameters = {};
      if (dataSource) {
        let dataFromDataSource = getDataFromObject(
          request[dataSource],
          entityField ? entityField : [field],
        );

        if (transformation) {
          dataFromDataSource = transformation.reduce(
            (res, cur) => cur(res),
            dataFromDataSource,
          );
        }
        searchParameters = {
          [field]: dataFromDataSource,
        };
      }
      if (exceptCurrent) {
        const dataExcept = getDataFromObject(
          request[exceptCurrent.dataSource],
          [exceptCurrent.entityField],
        );
        searchParameters = {
          ...searchParameters,
          [exceptCurrent.field]: Not(dataExcept),
        };
      }
      const record = await Entity.findOne(searchParameters);
      if (record && errorIfExist) {
        throw new HttpException(
          `${Entity.name} with this ${field} already exists.`,
          HttpStatus.CONFLICT,
        );
      }
      if (!record && !errorIfExist) {
        throw new HttpException(
          `${Entity.name} with this ${field} does not exist.`,
          HttpStatus.NOT_FOUND,
        );
      }
    }
    return true;
  }
}
