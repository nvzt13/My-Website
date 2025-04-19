import { prisma } from '@/lib/prisma' // Prisma client

export async function getAll() {
  const projects = await prisma.post.findMany()
  return projects
}
