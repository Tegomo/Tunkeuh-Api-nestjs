import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateRoleDto } from 'src/roles/dto/create-role.dto';
import { CurrentUser } from './current-user-decorator';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDocument } from './user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findUsers() {
    return this.usersService.findUsers();
  }

  @Post('sign-up')
  signUp(@Body(ValidationPipe) createUserDto: CreateUserDto, createRoleDto: CreateRoleDto) {
    return this.usersService.signUp(createUserDto, createRoleDto);
  }

  @Post('sign-in')
  signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {
    return this.usersService.signIn(authCredentialsDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@CurrentUser() user: UserDocument) {
    return this.usersService.getProfile(user);
  }

  @Delete()
  @UseGuards(AuthGuard('jwt'))
  deleteAccount(@CurrentUser() user: UserDocument) {
    return this.usersService.deleteAccount(user);
  }
}
