import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { TokenDTO } from 'src/dtos';
import { AuthCredentialsDTO, AuthWalletDTO, EAppRoles } from 'src/types';
import { StudentAuthService } from '../services/student-auth.service';

@Controller('student-auth')
export class StudentAuthController {
  constructor(private studentAuthService: StudentAuthService) {}

  @Post('email')
  async loginWithCredentials(
    @Body() req: AuthCredentialsDTO,
  ): Promise<TokenDTO> {
    try {
      const res = await this.studentAuthService.login(req);

      return await this.studentAuthService.generateToken(
        res.id,
        EAppRoles.STUDENT,
      );
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.FORBIDDEN);
    }
  }

  @Post('wallet')
  async loginWithWallet(@Body() req: AuthWalletDTO): Promise<TokenDTO> {
    try {
      const res = await this.studentAuthService.validate(req);

      return await this.studentAuthService.generateToken(
        res.id,
        EAppRoles.STUDENT,
      );
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.FORBIDDEN);
    }
  }
}
