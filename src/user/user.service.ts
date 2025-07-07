import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, HydratedDocument } from 'mongoose';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Invite } from './entities/invite.entity';
import { Role } from '../auth/role.enum';

type UserDocument = HydratedDocument<User>;

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectModel(Invite.name) private readonly inviteModel: Model<Invite>,
  ) {}

  /** Créer un nouvel utilisateur */
   async createUser(dto: CreateUserDto): Promise<User> {
    const roleToUse = dto.role ?? Role.CUSTOMER;
    const u = new this.userModel({ ...dto, role: roleToUse });
    return u.save();
  }

  /** Récupérer tous les utilisateurs */
  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  /** Récupérer un utilisateur par ID */
  async findOneById(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id).exec();
  }

  /** Récupérer un utilisateur par nom d’utilisateur */
  async findByUsername(username: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ username }).exec();
  }

  /** Récupérer un utilisateur par numéro de téléphone */
  async findByPhone(phone: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ phone }).exec();
  }

  /** Mettre à jour un utilisateur */
  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserDocument | null> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }

  /** Supprimer un utilisateur */
  async remove(id: string): Promise<UserDocument | null> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
  
  /** recuper tout le role de tout les utilisateur */
   async findAllByRole(role: Role): Promise<User[]> {
    return this.userModel.find({ role }).exec();
  }
}
