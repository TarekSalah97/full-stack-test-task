import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import {
  ApiTags,
  ApiBody,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiResponse,
  ApiProperty,
} from '@nestjs/swagger';

class AuthResponseDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  accessToken: string;
}
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiBody({ type: SignupDto })
  @ApiCreatedResponse({
    description: 'User successfully registered.',
    type: AuthResponseDto,
  })
  async signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }

  @Post('signin')
  @ApiBody({ type: SigninDto })
  @ApiOkResponse({
    description: 'User successfully logged in.',
    type: AuthResponseDto,
  })
  async signin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }
}
