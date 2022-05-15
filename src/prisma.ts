import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ['query'], // Para retornar o log após a execução de alguma ação do banco
});