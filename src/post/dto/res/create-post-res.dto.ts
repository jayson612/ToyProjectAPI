import { ApiProperty } from '@nestjs/swagger';

export class CreatePostResDto {
  @ApiProperty({
    description: '게시글 ID',
    example: 1,
    type: Number,
  })
  id: number;

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

  @ApiProperty({
    description: '작성일',
    example: '2021-01-01 00:00:00',
    type: Date,
  })
  createdAt: Date;

  @ApiProperty({
    description: '수정일',
    example: '2021-01-01 00:00:00',
    type: Date,
  })
  updatedAt: Date;
}
