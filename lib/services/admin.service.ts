import { prisma } from '@/lib/prisma' // Prisma client
import { Admin } from '@prisma/client';

export async function create(data: Admin) {
  const newProject = await prisma.admin.create({
    data: {
      userName: data.userName,
      password: data.password,
    },
  });

  return newProject;
}