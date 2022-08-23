import { JwtService } from '@nestjs/jwt';
import { TokenDTO } from 'src/dtos';
import { EAppRoles, IJWTPayload } from 'src/types';

export class BaseAuthService {
  constructor(private jwtService: JwtService) {}

  async generateToken(id: string, role: EAppRoles): Promise<TokenDTO | null> {
    try {
      const payload: IJWTPayload = {
        id,
        role: [role],
      };

      const accessToken = this.jwtService.sign(payload, {
        privateKey: process.env.JWT_SECRET,
      });

      return { token: accessToken };
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
