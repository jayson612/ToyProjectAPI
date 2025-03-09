import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { PageQueryDto } from 'src/common/dto/query/page-query.dto';

export class GetPostPageQueryDto extends PageQueryDto {
  @ApiProperty({
    description: '제목 검색어',
    example: '제목 검색어',
    type: String,
    required: false,
  })
  @Optional()
  @IsString()
  title?: string;

  @ApiProperty({
    description: '내용 검색어',
    example: '내용 검색어',
    type: String,
    required: false,
  })
  @Optional()
  @IsString()
  content?: string;

  @ApiProperty({
    description: '작성자 ID',
    example: 'MiMiMinGyu',
    type: String,
    required: false,
  })
  @Optional()
  @IsString()
  userId?: string;
}
