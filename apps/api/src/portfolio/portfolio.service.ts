import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PortfolioService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.portfolio.findMany();
  }

  findOne(id: number) {
    return this.prisma.portfolio.findUnique({ where: { id } });
  }

  create(data: Partial<any>) {
    return this.prisma.portfolio.create({ data: data as any });
  }

  async remove(id: number) {
    await this.prisma.portfolio.delete({ where: { id } });
  }
}
