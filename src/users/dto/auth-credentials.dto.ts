import { Prop } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { IsEmail, IsString, Length } from 'class-validator';
import mongoose from 'mongoose';
import { Role } from 'src/roles/role.schema';

export class AuthCredentialsDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Length(8)
  password: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Role.name })
  @Type(() => Role)
  role: Role;

}
