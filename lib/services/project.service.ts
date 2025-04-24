import { prisma } from '@/lib/prisma' // Prisma client

export async function getAll() {
  const projects = await prisma.post.findMany()
  return projects
}
import { prisma } from '@/lib/prisma';

export async function create(data: {
  title: string;
  address: string;
  technologies: string;
  date: string;
  file?: string;
}) {
  const newProject = await prisma.project.create({
    data: {
      title: data.title,
      address: data.address,
      technologies: data.technologies,
      date: data.date,
      file: data.file,
    },
  });

  return newProject;
}