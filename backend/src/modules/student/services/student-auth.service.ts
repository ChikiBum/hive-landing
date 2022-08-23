import { Injectable } from '@nestjs/common';
import { Student } from 'src/entities';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { IdDTO } from 'src/dtos';
import { AuthCredentialsDTO, AuthWalletDTO } from 'src/types';
import { BaseAuthService } from 'src/services/base-auth.service';

@Injectable()
export class StudentAuthService extends BaseAuthService {
  constructor() {
    super(new JwtService());
  }

  async login({ email, password }: AuthCredentialsDTO): Promise<IdDTO> {
    try {
      const student = await Student.findOneBy({ email });

      if (!student) {
        throw new Error('student with such email does not exists');
      }
      const isValid = await compare(password, student.passwordHash);

      if (!isValid) throw new Error('password mismatch');

      return { id: student.id };
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async validate({ wallet }: AuthWalletDTO): Promise<IdDTO | null> {
    try {
      const student = await Student.findOneBy({ wallet });

      if (student) {
        return { id: student.id };
      }

      const data = Student.create({
        wallet,
      });

      const newStudent = await Student.save(data);

      return { id: newStudent.id };
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
