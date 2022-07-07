import { PartialType } from '@nestjs/mapped-types';
import { IsString, Length } from 'class-validator';
import { CreateIssueDto } from './create-issue.dto';

export class UdateIssueDto extends PartialType(CreateIssueDto) {}
