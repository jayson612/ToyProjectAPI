import { PartialType } from '@nestjs/swagger';
import { CreatePostReqDto } from './create-post-req.dto';

export class UpdatePostDto extends PartialType(CreatePostReqDto) {}
