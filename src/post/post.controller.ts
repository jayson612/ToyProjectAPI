import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Post,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostReqDto as CreatePostReqDto } from './dto/req/create-post-req.dto';
import { UpdatePostDto } from './dto/req/update-post.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { CreatePostResDto } from './dto/res/create-post-res.dto';
import { query } from 'express';
import { GetPostPageQueryDto } from './dto/query/get-post-page-query.dto';
import { GetPostPageResDto } from './dto/res/get-post-page-res.dto';
import { PaginationResDto } from 'src/common/dto/res/pagination-res.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @ApiOkResponse({
    description: '게시글 생성 성공',
    type: CreatePostResDto,
  })
  async createPost(
    @Body() createPostReqDto: CreatePostReqDto,
  ): Promise<CreatePostResDto> {
    return await this.postService.createPost(createPostReqDto);
  }

  @Get()
  @ApiOkResponse({
    description: '게시글 조회 성공',
    type: PaginationResDto<GetPostPageResDto>,
  })
  async getAllPosts(
    @Query() query: GetPostPageQueryDto,
  ): Promise<PaginationResDto<GetPostPageResDto>> {
    return await this.postService.getAllPosts(query);
  }

  @Get(':id')
  @ApiOkResponse({
    description: '게시글 조회 성공',
    type: GetPostPageResDto,
  })
  async getPost(@Param('id') id: string): Promise<GetPostPageResDto> {
    return this.postService.getPost(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
