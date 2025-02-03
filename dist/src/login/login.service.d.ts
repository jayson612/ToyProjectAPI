import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'prisma/prisma.service';
export declare class LoginService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    login(loginDto: LoginDto): Promise<{
        success: boolean;
    }>;
}
