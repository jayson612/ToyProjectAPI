import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostReqDto as CreatePostReqDto } from './dto/req/create-post-req.dto';
import { UpdatePostDto } from './dto/req/update-post.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { CreatePostResDto } from './dto/res/create-post-res.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @ApiOkResponse({
    description: '게시글 생성 성공',
    type: CreatePostResDto,
  })
  createPost(@Body() createPostReqDto: CreatePostReqDto) {
    return this.postService.createPost(createPostReqDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
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
