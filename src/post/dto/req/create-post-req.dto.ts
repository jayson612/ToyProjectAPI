import { ApiProperty } from '@nestjs/swagger';

export class CreatePostReqDto {
  @ApiProperty({
    description: '작성자 ID',
    example: 1,
    type: Number,
  })
  userId: number;

  @ApiProperty({
    description: '제목',
    example: '제목입니다.',
    type: String,
  })
  title: string;

  @ApiProperty({
    description: '내용',
    example: '내용입니다.',
    type: String,
  })
  content: string;
}
