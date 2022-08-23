import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { TokenDTO } from 'src/dtos';
import { AuthCredentialsDTO, AuthWalletDTO, EAppRoles } from 'src/types';
import { InstructorAuthService } from '../services/instructor-auth.service';

@Controller('instructor-auth')
export class InstructorAuthController {
  constructor(private instructorAuthService: InstructorAuthService) {}

  @Post('email')
  async loginWithCredentials(
    @Body() req: AuthCredentialsDTO,
  ): Promise<TokenDTO> {
    try {
      const res = await this.instructorAuthService.login(req);

      return await this.instructorAuthService.generateToken(
        res.id,
        EAppRoles.INSTRUCTOR,
      );
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.FORBIDDEN);
    }
  }

  @Post('wallet')
  async loginWithWallet(@Body() req: AuthWalletDTO): Promise<TokenDTO> {
    try {
      const res = await this.instructorAuthService.validate(req);

      return await this.instructorAuthService.generateToken(
        res.id,
        EAppRoles.INSTRUCTOR,
      );
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.FORBIDDEN);
    }
  }
}
