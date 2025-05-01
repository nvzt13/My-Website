import { prisma } from '@/lib/prisma' // Prisma client
interface Admin {
  userName: string
  password: string
}
export async function create(data) {
  const newProject = await prisma.admin.create({
    data: {
      userName: data.userName,
      password: data.password,
    },
  });

  return newProject;
}