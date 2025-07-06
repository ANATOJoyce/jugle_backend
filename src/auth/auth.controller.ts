import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,

} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { PhoneLoginDto } from './dto/phone-login.dto';
import { RegisterDto } from './dto/Register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /** REGISTER */
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  /** LOGIN PAR PHONE + PASSWORD */
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: { phone: string; password: string }) {
    return this.authService.signIn(signInDto.phone, signInDto.password);
  }

  /** OTP: Demande */
  @HttpCode(HttpStatus.OK)
  @Post('phone-login')
  async requestOtp(@Body() phoneLoginDto: PhoneLoginDto) {
    await this.authService.sendPhoneOtp(phoneLoginDto.phone);
    return { message: 'OTP envoyé avec succès' };
  }

  /**  OTP: Vérification */
  @Post('verify-otp')
  async verifyPhoneOtp(@Body() verifyOtpDto: VerifyOtpDto) {
    return this.authService.verifyPhoneOtp(verifyOtpDto.phone, verifyOtpDto.otp);
  }

  /**  Gestion CRUD des AuthIdentity si tu veux */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(id);
  }
}
