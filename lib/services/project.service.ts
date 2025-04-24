import { prisma } from '@/lib/prisma' // Prisma client
// fetch all projects from the database
export async function getAll() {
  const projects = await prisma.post.findMany()
  console.log(projects)
  return projects
}
// create a new project in the database
export async function create(data: {
  title: string;
  address: string;
  technologies: string;
  date: string;
  file?: string;
}) {
  const newProject = await prisma.post.create({
    data: {
      title: data.title,
      address: data.address,
      technologies: data.technologies,
      date: data.date,
      file: data.file ?? '',
    },
  });

  return newProject;
}
// delete a project from the database
export async function remove(id: string) {
  const deletedProject = await prisma.post.delete({
    where: {
      id: id,
    },
  });
  return deletedProject;
}
// update a project in the database
export async function update(data: {
  id: string;
  title: string;
  address: string;
  technologies: string;
  date: string;
  file?: string;
}) {
  const updatedProject = await prisma.post.update({
    where: {
      id: data.id,
    },
    data: {
      title: data.title,
      address: data.address,
      technologies: data.technologies,
      date: data.date,
      file: data.file ?? '',
    },
  });
  return updatedProject;
}