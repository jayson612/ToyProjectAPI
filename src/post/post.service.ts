import { Injectable } from '@nestjs/common';
import { CreatePostReqDto } from './dto/req/create-post-req.dto';
import { UpdatePostDto } from './dto/req/update-post.dto';
import { PrismaService } from 'prisma/prisma.service';
import { concat } from 'rxjs';
import { Post, Prisma } from '@prisma/client';
import { GetPostPageQueryDto } from './dto/query/get-post-page-query.dto';
import { GetPostPageResDto } from './dto/res/get-post-page-res.dto';
import { CreatePostResDto } from './dto/res/create-post-res.dto';
import { PaginationResDto } from 'src/common/dto/res/pagination-res.dto';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  async createPost(createPostDto: CreatePostReqDto): Promise<CreatePostResDto> {
    const { userId, title, content } = createPostDto;
    const newPost = await this.prismaService.post.create({
      data: { userId: userId, title: title, content: content },
    });
    return {
      ...newPost,
      id: newPost.id.toString(),
    };
  }

  async getAllPosts(
    query: GetPostPageQueryDto,
  ): Promise<PaginationResDto<GetPostPageResDto>> {
    const { page, pageSize, title, content, userId } = query;
    const postWhereInput: Prisma.PostWhereInput = {};
    if (title) {
      postWhereInput.title = { contains: title, mode: 'insensitive' };
    }
    if (content) {
      postWhereInput.content = { contains: content, mode: 'insensitive' };
    }
    if (userId) {
      postWhereInput.userId = userId;
    }
    const posts = await this.prismaService.post.findMany({
      where: postWhereInput,
      include: {
        User: {
          select: {
            nickname: true,
          },
        },
      },
      orderBy: { createdAt: Prisma.SortOrder.desc },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
    });
    const data = posts.map((post) => {
      return {
        id: post.id.toString(),
        userId: post.userId,
        title: post.title,
        content: post.content,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        nickname: post.User.nickname,
      };
    });
    const totalCount = await this.prismaService.post.count({
      where: postWhereInput,
    });
    return { data: data, page: +page, totalCount: totalCount };
  }

  async getPost(id: number): Promise<GetPostPageResDto> {
    const post = await this.prismaService.post.findUniqueOrThrow({
      where: { id: id },
      include: {
        User: {
          select: {
            nickname: true,
          },
        },
      },
    });
    return {
      id: post.id.toString(),
      userId: post.userId,
      title: post.title,
      content: post.content,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      nickname: post.User.nickname,
    };
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
