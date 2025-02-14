"use server"
import prisma from "@/lib/prisma/client";
import { ProjectDataProps } from "@/type/types";

// Proje oluşturma işlemi
export const createProject = async (projectData: ProjectDataProps) => {
  try {

    const newProject = await prisma.post.create({
      data: {
        title: projectData.title,
        address: projectData.address,
        technologies: projectData.technologies,
        date: projectData.date,
        file: projectData.file || "",
      },
    });

    if (newProject) {
      return {
        success: true,
        status: 201,
        message: "Proje başarıyla oluşturuldu",
      };
    }
  } catch (error) {
    console.error("Error in createProject:", error);
    return {
      success: false,
      status: 403,
      message: "Proje oluşturulurken bir hata oluştu",
    };
  }
};
