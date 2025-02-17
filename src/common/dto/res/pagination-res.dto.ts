import { ApiProperty } from '@nestjs/swagger';

export class PaginationResDto<T> {
  @ApiProperty({
    description: '데이터',
    isArray: true,
    type: Object,
  })
  data: T[];

  @ApiProperty({
    description: '페이지 번호',
    example: 1,
    type: Number,
  })
  page: number;

  @ApiProperty({
    description: '총 데이터 수',
    example: 10,
    type: Number,
  })
  totalCount: number;
}
