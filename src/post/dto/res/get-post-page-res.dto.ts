import { ApiProperty } from '@nestjs/swagger';
import { PageQueryDto } from 'src/common/dto/query/page-query.dto';

export class GetPostPageResDto {
  @ApiProperty({
    description: '게시글 ID',
    example: 1,
    type: BigInt,
  })
  id: BigInt;

  @ApiProperty({
    description: '작성자 ID',
    example: 1,
    type: BigInt,
  })
  userId: BigInt;

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

  @ApiProperty({
    example: '닉네임',
    description: '작성자 닉네임',
    type: String,
  })
  nickname: string;
}
