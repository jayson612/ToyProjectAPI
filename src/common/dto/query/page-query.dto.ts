import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';

export class PageQueryDto {
  @ApiProperty({
    description: '페이지 번호 (기본값 1)',
    example: 1,
    type: Number,
  })
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber({}, { message: '페이지 번호는 숫자여야 합니다.' })
  @Min(1, { message: '페이지 번호는 최소 1 이상이어야 합니다.' })
  page: number = 1;

  @ApiProperty({
    description: '페이지 크기 (기본값 10)',
    example: 10,
    type: Number,
  })
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber({}, { message: '페이지 크기는 숫자여야 합니다.' })
  @Min(1, { message: '페이지 크기는 최소 1 이상이어야 합니다.' })
  pageSize: number = 10;
}
