import { Prop } from '@nestjs/mongoose';
import { IsString } from 'class-validator';
import { AuthCredentialsDto } from './auth-credentials.dto';

export class CreateUserDto extends AuthCredentialsDto {
    @IsString()
    name: string;
  
    @IsString()
    phone: string;
    
    @IsString()
    profile_url: string;
    
    @IsString()
    driver_licence_number: string;
    
    @IsString()
    driver_licence_front: string;
    
    @IsString()
    driver_licence_back: string;
    
    @IsString()
    card_id_number: string;
    
    @IsString()
    card_id_front: string;
    
    @IsString()
    card_id_back: string;
    
    @Prop({ required: true, default: false })
    isActive!: boolean;
    
    @Prop({ required: true, default: false })
    isSuperAdmin!: boolean;
    
    @IsString()
    entreprise: string;
    
    @IsString()
    staff: string;
    
    @IsString()
    adresses: string;

    @Prop({ default: Date.now })
    createdAt!: Date;

    @Prop({ default: Date.now })
    updatedAt!: Date;
}
