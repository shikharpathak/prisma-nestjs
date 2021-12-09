import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  create(createBookDto: Prisma.BookCreateInput) {
    return this.prisma.book.create({
      data: createBookDto,
    });
  }

  findAll() {
    return this.prisma.book.findMany();
  }

  findOne(bookWhereUniqueInput: Prisma.BookWhereUniqueInput) {
    return this.prisma.book.findUnique({
      where: bookWhereUniqueInput,
    });
  }

  update(
    bookWhereUniqueInput: Prisma.BookWhereUniqueInput,
    data: Prisma.BookUpdateInput,
  ) {
    return this.prisma.book.update({
      where: bookWhereUniqueInput,
      data: data,
    });
  }

  remove(id: number) {
    return `This action removes a #  ${id} book`;
  }
}
