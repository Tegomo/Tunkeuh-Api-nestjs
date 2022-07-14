import { Prop } from '@nestjs/mongoose';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { AuthCredentialsDto } from './auth-credentials.dto';

export class CreateUserDto extends AuthCredentialsDto {

    @IsOptional()
    @IsString()
    @Prop({ required: false, default: null })
    name: string;
  
    @IsOptional()
    @IsString()
    @Prop({ required: false, default: null })
    phone: string;
    
    @IsOptional()
    @IsString()
    @Prop({ required: false, default: null })
    profile_url: string;
    
    @IsOptional()
    @IsString()
    @Prop({ required: false, default: null })
    driver_licence_number: string;
    
    @IsOptional()
    @IsString()
    @Prop({ required: false, default: null })
    driver_licence_front: string;
    
    @IsOptional()
    @IsString()
    @Prop({ required: false, default: null })
    driver_licence_back: string;
    
    @IsString()
    @IsOptional()
    @Prop({ required: false, default: null })
    card_id_number: string;
    
    @IsOptional()
    @IsString()
    @Prop({ required: false, default: null })
    card_id_front: string;
    
    @IsOptional()
    @IsString()
    @Prop({ required: false, default: null })
    card_id_back: string;
    
    @IsOptional()
    @IsBoolean ()
    @Prop({ required: true, default: false })
    isActive!: boolean;
    
    @IsOptional()
    @IsBoolean ()
    @Prop({ required: true, default: false })
    isSuperAdmin!: boolean;
    
    @IsOptional()
    @IsString()
    @Prop({ required: true, default: false })
    entreprise: string;
    
    @IsOptional()
    @IsBoolean ()
    @Prop({ required: true, default: false })
    staff: string;
    
    @IsOptional()
    @IsString()
    @Prop({ required: true, default: false })
    adresses: string;

    @Prop({ default: Date.now })
    createdAt!: Date;

    @Prop({ default: Date.now })
    updatedAt!: Date;
}
