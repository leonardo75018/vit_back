import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IssueTagService } from './issue-tag.service';
import { CreateIssueTagDto } from './dto/create-issue-tag.dto';
import { UpdateIssueTagDto } from './dto/update-issue-tag.dto';

@Controller('issue-tag')
export class IssueTagController {
  constructor(private readonly issueTagService: IssueTagService) {}

  @Post()
  create(@Body() createIssueTagDto: CreateIssueTagDto) {
    return this.issueTagService.create(createIssueTagDto);
  }

  @Get()
  findAll() {
    return this.issueTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.issueTagService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIssueTagDto: UpdateIssueTagDto,
  ) {
    return this.issueTagService.update(+id, updateIssueTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.issueTagService.remove(+id);
  }
}
