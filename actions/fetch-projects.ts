"use server"
import prisma from "@/lib/prisma/client";
import { ProjectDataProps } from "@/type/types";

// Proje oluşturma işlemi
export const fetchAllProjects = async (projectData: ProjectDataProps) => {
  try {

    const allProjects = await prisma.post.findMany();

    if (allProjects) {
      return {
        success: true,
        status: 201,
        message: "Proje başarıyla oluşturuldu",
        allProjects
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
