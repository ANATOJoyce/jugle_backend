// auth.service.ts
import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { OtpService } from './otp/otp.service';
import { User } from 'src/user/entities/user.entity';
import { RegisterDto } from './dto/Register.dto';
import { CreateAuthIdentityDto } from './dto/create-auth-identity.dto';
import { AuthIdentity, AuthIdentityDocument } from './entities/auth-identity.entity';
import { ProviderIdentity, ProviderIdentityDocument } from './entities/provider-identity.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UpdateAuthIdentityDto } from './dto/update-auth-identity.dto';
import { UpdateProviderIdentityDto } from './dto/update-provide-identity.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly otpService: OtpService,

    @InjectModel(AuthIdentity.name)
    private readonly authIdentityModel: Model<AuthIdentityDocument>,

    @InjectModel(ProviderIdentity.name)
    private readonly providerIdentityModel: Model<ProviderIdentityDocument>,
  ) {}

  async register(registerDto: RegisterDto): Promise<{ access_token: string }> {
    const { phone, email, password, first_name, last_name } = registerDto;

    const existingUserByPhone = await this.userService.findByPhone(phone);
    if (existingUserByPhone) {
      throw new BadRequestException('Un utilisateur avec ce téléphone existe déjà.');
    }

    if (email) {
      const existingAuthIdentityByEmail = await this.authIdentityModel.findOne({ email });
      if (existingAuthIdentityByEmail) {
        throw new BadRequestException('Un utilisateur avec cet email existe déjà.');
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await this.userService.createUser({
      phone,
      first_name,
      email,
      last_name,
      password
    });

    const authIdentity = new this.authIdentityModel({
      username: `${first_name}.${last_name}`.toLowerCase(),
      email,
      password: hashedPassword,
      phone: phone,
      userId: newUser._id,
    });
    await authIdentity.save();

    return this.generateToken(newUser, authIdentity);
  }

  async signIn(phoneOrEmail: string, password: string): Promise<{ access_token: string }> {
    const authIdentity = await this.authIdentityModel.findOne({
      $or: [{ phone: phoneOrEmail }, { email: phoneOrEmail }],
    });

    if (!authIdentity) {
      throw new UnauthorizedException('Identité non trouvée.');
    }

    const isPasswordValid = await bcrypt.compare(password, authIdentity.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Mot de passe incorrect.');
    }

    const user = await this.userService.findByPhone(authIdentity.phone);
    if (!user) {
      throw new UnauthorizedException('Utilisateur introuvable.');
    }

    return this.generateToken(user, authIdentity);
  }

  public generateToken(user: User, authIdentity: AuthIdentity): { access_token: string } {
    const payload = {
      sub: user.id,
      auth_identity: authIdentity.id,
      phone: user.phone,
      first_name: user.first_name,
    };

    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: '1h',
        secret: process.env.JWT_SECRET,
      }),
    };
  }


  async sendPhoneOtp(phone: string): Promise<{ message: string }> {
    const user = await this.userService.findByPhone(phone);
    if (!user) {
      throw new UnauthorizedException('Numéro non enregistré');
    }

    await this.otpService.generateAndSendOtp(phone);
    return { message: 'OTP envoyé avec succès' };
  }

  async verifyPhoneOtp(phone: string, otp: string): Promise<{ access_token: string }> {
    const isOtpValid = await this.otpService.verifyOtp(phone, otp);
    if (!isOtpValid) {
      throw new UnauthorizedException('OTP invalide ou expiré');
    }

    const user = await this.userService.findByPhone(phone);
    if (!user) {
      throw new UnauthorizedException('Utilisateur non trouvé');
    }

    // ➜ Chercher l'AuthIdentity associé au phone
    const authIdentity = await this.authIdentityModel.findOne({ phone });
    if (!authIdentity) {
      throw new UnauthorizedException('Identité non trouvée pour ce téléphone');
    }

    return this.generateToken(user, authIdentity);
  }


  async findOne(id: string): Promise<AuthIdentity | null> {
    return this.authIdentityModel.findById(id).populate('providerIdentities').exec();
  }

  async update(id: string, updateAuthDto: UpdateAuthDto): Promise<AuthIdentity | null> {
    return this.authIdentityModel
      .findByIdAndUpdate(id, updateAuthDto, { new: true })
      .populate('providerIdentities')
      .exec();
  }

  async remove(id: string): Promise<{ deleted: boolean; message: string }> {
    const result = await this.authIdentityModel.findByIdAndDelete(id).exec();
    if (result) {
      return { deleted: true, message: `AuthIdentity ${id} supprimée.` };
    } else {
      return { deleted: false, message: `AuthIdentity ${id} non trouvée.` };
    }
  }


  // Supprimer des identités de provider
  async deleteProviderIdentities(ids: string[]) {
    // Supprimer des identités de provider
  }

  async listAuthIdentities(userId: string) {
    // Lister les identités d’un utilisateur
  }

  async listAndCountAuthIdentities() {
    // Lister avec pagination ou count
  }

  async listProviderIdentities(userId: string) {
    // Lister identités de provider
  }

  async retrieveAuthIdentity(id: string) {
    // Récupérer une identité par ID
  }

  async retrieveProviderIdentity(id: string) {
    // Récupérer une identité de provider
  }

  async updateAuthIdentities(data: UpdateAuthIdentityDto[]) {
    // Mettre à jour
  }

  async updateProviderIdentities(data: UpdateProviderIdentityDto[]) {
    // Mettre à jour
  }

  async updateProvider(data: UpdateProviderDto) {
    // Mettre à jour un provider (config ou metadata)
  }

  async validateCallback(token: string) {
    // Valider un retour d’auth externe
  }





}


 


