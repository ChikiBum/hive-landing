import {
  HttpException,
  HttpStatus,
  Injectable,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import {
  getDataFromObject,
  getRelationArrayFromArray,
} from 'src/helpers/guards.helper';
import { BaseEntity } from 'typeorm';

type Prop = {
  field: string;
  Entity: typeof BaseEntity;
  dataSource: string;
  relations: Array<string>;
};

/**
 * This guard checks if one of the provided fields already exists in provided Entity.
 */
@Injectable()
export class CheckRecordHasLinksGuard implements CanActivate {
  constructor(private config: Prop[]) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    for (const { field, Entity, dataSource = 'body', relations } of this
      .config) {
      if (!(new Entity() instanceof BaseEntity)) {
        throw new Error(
          `Provided ${Entity.name} Entity inside ${CheckRecordHasLinksGuard.name} must be instance of BaseEntity`,
        );
      }

      if (![field]) {
        throw new Error(
          `Request body does not contain ${field} field. Or ${field} field inside ${CheckRecordHasLinksGuard.name} misspelled.`,
        );
      }
      const request = context.switchToHttp().getRequest();
      const searchParameters = {};
      const dataFromDataSource = getDataFromObject(request[dataSource], [
        field,
      ]);
      relations.reduce((res, cur, index, arr) => {
        res[cur] = index + 1 === arr.length ? { id: dataFromDataSource } : {};
        return res[cur];
      }, searchParameters);
      const record = await Entity.find({
        relations: getRelationArrayFromArray(relations),
        where: searchParameters,
      });
      if (record.length > 0) {
        throw new HttpException(
          `${Entity.name} has links to entity with this ${field}.`,
          HttpStatus.CONFLICT,
        );
      }
    }
    return true;
  }
}
