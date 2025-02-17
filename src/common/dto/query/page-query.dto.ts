import { ApiProperty } from '@nestjs/swagger';

export class PageQueryDto {
  @ApiProperty({
    description: '페이지 번호 (기본값 1)',
    example: 1,
    type: Number,
  })
  page: number = 1;

  @ApiProperty({
    description: '페이지 크기 (기본값 10)',
    example: 10,
    type: Number,
  })
  pageSize: number = 10;
}
