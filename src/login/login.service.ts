import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class LoginService {
  constructor(private readonly prismaService: PrismaService) {}

  async login(loginDto: LoginDto): Promise<{ success: boolean }> {
    const { id, password } = loginDto;
    const user = await this.prismaService.user.findUnique({
      where: {
        id: id,
        password: password,
      },
    });
    if (!user) {
      return { success: false };
    }
    return { success: true };
  }
}
