import { Injectable } from '@nestjs/common';
import { Instructor } from 'src/entities';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { IdDTO } from 'src/dtos';
import { AuthCredentialsDTO, AuthWalletDTO } from 'src/types';
import { BaseAuthService } from 'src/services/base-auth.service';

@Injectable()
export class InstructorAuthService extends BaseAuthService {
  constructor() {
    super(new JwtService());
  }

  async login({ email, password }: AuthCredentialsDTO): Promise<IdDTO> {
    try {
      const instructor = await Instructor.findOneBy({ email });

      if (!instructor) {
        throw new Error('instructor with such email does not exists');
      }
      const isValid = await compare(password, instructor.passwordHash);

      if (!isValid) throw new Error('password mismatch');

      return { id: instructor.id };
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async validate({ wallet }: AuthWalletDTO): Promise<IdDTO> {
    try {
      const instructor = await Instructor.findOneBy({ wallet });

      if (instructor) {
        return { id: instructor.id };
      }

      const data = Instructor.create({
        wallet,
      });

      const newInstructor = await Instructor.save(data);

      return { id: newInstructor.id };
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
