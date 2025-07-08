import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OtpModule } from './otp/otp.module';
import { AuthIdentity, AuthIdentitySchema } from './entities/auth-identity.entity';
import { ProviderIdentity, ProviderIdentitySchema } from './entities/provider-identity.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { RolesGuard } from './roles.guards';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'firebase-jwt' }),
    UserModule,
    ConfigModule, // pour être sûr que ConfigService est dispo
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '3600s' }, // tu peux aussi récupérer ça depuis la config
      }),
    }), 
    OtpModule,
    MongooseModule.forFeature([
      { name: AuthIdentity.name, schema: AuthIdentitySchema },
      { name: ProviderIdentity.name, schema: ProviderIdentitySchema },
      
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtAuthGuard, RolesGuard],
  exports: [PassportModule,JwtStrategy, JwtAuthGuard, RolesGuard]

})
export class AuthModule {}
