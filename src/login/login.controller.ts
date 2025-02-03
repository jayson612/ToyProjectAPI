import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @ApiOkResponse({
    description: '로그인 성공',
    example: {
      success: true,
    },
  })
  async login(@Body() loginDto: LoginDto): Promise<{ success: boolean }> {
    return await this.loginService.login(loginDto);
  }
}
