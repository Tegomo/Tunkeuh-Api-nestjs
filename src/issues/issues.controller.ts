import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UdateIssueDto } from './dto/update-issue.dto';
import { IssuesService } from './issues.service';

@Controller('issues')
export class IssuesController {
  constructor(private readonly issuesService: IssuesService) {}

  @Post()
  createIssue(@Body(ValidationPipe) createIssueDto: CreateIssueDto) {
    return this.issuesService.createIssue(createIssueDto);
  }

  @Get()
  findIssues() {
    return this.issuesService.findIssues();
  }

  @Put(':id')
  updateIssue(
    @Param('id') id: string,
    @Body(ValidationPipe) updateIssueDto: UdateIssueDto,
  ) {
    return this.issuesService.updateIssue(id, updateIssueDto);
  }

  @Get(':id')
  findIssueById(@Param('id') id: string) {
    return this.issuesService.findIssueById(id);
  }

  @Delete(':id')
  deleteIssues(@Param('id') id: string) {
    return this.issuesService.deleteIssues(id);
  }
}
