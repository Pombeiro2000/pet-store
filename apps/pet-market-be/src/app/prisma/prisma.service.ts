import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from '../../generated/prisma'; // caminho relativo à localização do ficheiro

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}