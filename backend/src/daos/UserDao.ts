import { PrismaClient, user } from '@prisma/client';

const prisma = new PrismaClient();

export default class UserDao {
  public static async getAllUsers(): Promise<user[]> {
    return await prisma.user.findMany();
  }

  public static async getUserById(id: number): Promise<user | null> {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  public static async createUser(name: string, email: string): Promise<user> {
    return await prisma.user.create({
      data: {
        name,
        email,
      },
    });
  }

  public static async updateUser(id: number, name: string, email: string): Promise<user | null> {
    return await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
      },
    });
  }

  public static async deleteUser(id: number): Promise<user | null> {
    return await prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
