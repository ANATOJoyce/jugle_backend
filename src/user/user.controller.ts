import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import mongoose from 'mongoose';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  
 //Afficher tout les utilisateur
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  //user/:id(recherceh d'un utililisateur par son id )

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Utilisateur introuvable',404);
    const findOneUser = await this.userService.findOneById(id);
    if(!findOneUser) throw new HttpException('Utilisateur est absent',404);
    //return this.userService.findOneById(id);
    return findOneUser;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('ID invalide',400);
    const updateUser = await this.userService.update(id, updateUserDto);
    if (!updateUser) throw new HttpException('user not found', 404);
    return updateUser;

  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID',400);
    const deleteUser = await this.userService.remove(id);
    if (!deleteUser) throw new HttpException('User Not Found', 404);
    return;
  }
}
