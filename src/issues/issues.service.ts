import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UdateIssueDto } from './dto/update-issue.dto';
import { Issue, IssueDocument } from './issue.schema';

@Injectable()
export class IssuesService {
  constructor(
    @InjectModel(Issue.name) private issueModel: Model<IssueDocument>,
  ) {}

  async createIssue(createIssueDto: CreateIssueDto) {
    const issue = new this.issueModel(createIssueDto);
    await issue.save();
    return { issue };
  }

  async updateIssue(id: string, updateIssueDto: UdateIssueDto) {
    const { issue } = await this.findIssueById(id);
    if (updateIssueDto.title) {
      issue.title = updateIssueDto.title;
    }
    if (updateIssueDto.body) {
      issue.body = updateIssueDto.body;
    }
    await issue.save();
    return { issue };
  }

  async findIssues() {
    const issues = await this.issueModel.find();
    return { issues };
  }

  async findIssueById(id: string) {
    const issue = await this.issueModel.findById(id);
    if (!issue) {
      throw new NotFoundException(`Issue with id ${id} not found`);
    }
    return { issue };
  }

  async deleteIssues(id: string) {
    const { issue } = await this.findIssueById(id);
    await issue.remove();
  }
}
