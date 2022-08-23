import {
  Injectable,
  ExecutionContext,
  CanActivate,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { getRepository } from 'typeorm';

interface IConfig {
  entity: any;
  propsToCheck: string[];
  findBy: string;
}

/**
 * @param  {CheckCredentialsForValid} This guard checks whether the propsToCheck have been passed.
 * It compares parameters from our database with propsToCheck.
 * 1. Search repository and find field findBy and equate this field with field which we received in request
 * 2. If field which need to compare does not exist - get errors with HttpException message
 */
@Injectable()
export class CheckCredentialsForValid implements CanActivate {
  constructor(private config: IConfig) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const repository = await getRepository(this.config.entity);
    const request = context.switchToHttp().getRequest();

    const manager = await repository.findOne({
      [this.config.findBy]: request.body[this.config.findBy],
    });

    const errors = [];

    this.config.propsToCheck.forEach((prop) => {
      if (manager[prop] !== request.body[prop]) {
        errors.push(prop);
      }
    });

    if (errors.length) {
      throw new HttpException(
        `Credentials ${JSON.stringify(errors)} not valid`,
        HttpStatus.FORBIDDEN,
      );
    }
    return true;
  }
}
