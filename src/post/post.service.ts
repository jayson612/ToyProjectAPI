import { Injectable } from '@nestjs/common';
import { CreatePostReqDto } from './dto/req/create-post-req.dto';
import { UpdatePostDto } from './dto/req/update-post.dto';
import { PrismaService } from 'prisma/prisma.service';
import { concat } from 'rxjs';
import { Post } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  async createPost(createPostDto: CreatePostReqDto): Promise<Post> {
    const { userId, title, content } = createPostDto;
    const newPost = await this.prismaService.post.create({
      data: { userId: userId, title: title, content: content },
    });
    return newPost;
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
