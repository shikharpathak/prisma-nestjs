import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '.prisma/client';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}
  create(createAuthorDto: Prisma.AuthorCreateInput) {
    return this.prisma.author.create({
      data: createAuthorDto,
    });
  }

  findAll() {
    return this.prisma.author.findMany();
  }

  findOne(authorWhereUniqueInput: Prisma.AuthorWhereUniqueInput) {
    return this.prisma.author.findUnique({
      where: authorWhereUniqueInput,
    });
  }

  update(
    authorWhereUniqueInput: Prisma.AuthorWhereUniqueInput,
    updateAuthorDto: Prisma.AuthorUpdateInput,
  ) {
    return this.prisma.author.update({
      where: authorWhereUniqueInput,
      data: updateAuthorDto,
    });
  }

  remove(authorWhereUniqueInput: Prisma.AuthorWhereUniqueInput) {
    return this.prisma.author.delete({
      where: authorWhereUniqueInput,
    });
  }
}
