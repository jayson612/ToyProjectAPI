import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: '아이디',
    example: 'test',
    type: String,
  })
  userId: string;

  @ApiProperty({
    description: '비밀번호',
    example: '1234',
    type: String,
  })
  password: string;
}
