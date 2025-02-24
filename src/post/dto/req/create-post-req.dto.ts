import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreatePostReqDto {
  @ApiProperty({
    description: '작성자 ID',
    example: 1,
    type: String,
  })
  @IsString()
  userId: string;

  @ApiProperty({
    description: '제목',
    example: '제목입니다.',
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: '내용',
    example: '내용입니다.',
    type: String,
  })
  @IsString()
  content: string;
}
