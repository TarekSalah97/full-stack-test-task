import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/guard';

@ApiTags('Protected')
@ApiBearerAuth('access-token')
@Controller('protected')
export class ProtectedController {
  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOkResponse({ description: 'Access granted to protected route' })
  getProtected(@Request() req) {
    return {
      message: 'You are logged in',
      user: req.user,
    };
  }
}
