import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { Adress } from 'src/adresses/adress.schema';
import { PaginationQueryDto } from 'src/pagination-query.dto';
import { Role } from 'src/roles/role.schema';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwcService: JwtService,
  ) {}

  async findOneByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  createAuthenticationToken(id: string) {
    return this.jwcService.sign({ id });
  }

  async signUp(createUserDto: CreateUserDto, role: Role) {
    const userFoundByEmail = await this.findOneByEmail(createUserDto.email);
    if (userFoundByEmail) {
      throw new ConflictException(`User already exist`);
    }

    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);

    const user = new this.userModel(createUserDto, role);

    await user.save();

    const token = this.createAuthenticationToken(user._id);

    return {
      message: 'user is signed up',
      token: token,
      user: user,
    };
  }

  async signIn(authCredentialsDto: AuthCredentialsDto) {
    const userFoundByEmail = await this.findOneByEmail(
      authCredentialsDto.email,
    );

    if (!userFoundByEmail) {
      throw new UnauthorizedException('invalid credentials');
    }

    const passwordsMatch = bcrypt.compare(
      authCredentialsDto.password,
      userFoundByEmail.password,
    );

    if (!passwordsMatch) {
      throw new UnauthorizedException('invalid credentials');
    }

    const token = this.createAuthenticationToken(userFoundByEmail._id);

    return {
      message: 'user is signed in',
      token: token,
      user: userFoundByEmail,
    };
  }

  getProfile(user: UserDocument) {
    user.password = undefined;

    return { profile: user };
  }

  async deleteAccount(user: UserDocument) {
    try {
      await user.remove();
    } catch (error) {
      throw new InternalServerErrorException('cannot delete account');
    }
    return { message: 'Account successfully deleted' };
  }

  async findUsers() {
    const users = await this.userModel.find()
    .populate('role'  , null, Role.name)
    .populate('entreprise', null, User.name);

    return users;
  }

  async findClients() {
    const clients = await this.userModel
    .find({ role: '62ca9ec9738ee38481256ddc' })
    .populate('role'  , null, Role.name)
    .populate('adresses'  , null, Adress.name)
    .populate('staff'  , null, User.name)
    .where('isActive').equals(true);

    return clients;
  }

  async findDrivers() {
    const clients = await this.userModel
    .find({ role: '62ca9ec9738ee38481256ddb' })
    .populate('role'  , null, Role.name)
    .populate('adresses'  , null, Adress.name)
    .populate('staff'  , null, User.name)
    .where('isActive').equals(true);

    return clients;
  }


}
