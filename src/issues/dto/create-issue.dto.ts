import { IsString, Length } from 'class-validator';

export class CreateIssueDto {
  @IsString()
  @Length(10, 100)
  title: string;

  @IsString()
  @Length(10, 500)
  body: string;
}
