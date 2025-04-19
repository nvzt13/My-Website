import { NextRequest, NextResponse } from "next/server";
import * as ProjectService from "@/lib/services/project.service";

export const handlers = {
  GET: async (req: NextRequest) => {
    const projects = await ProjectService.getAll();
    return NextResponse.json(projects);
  },
  /*
 
  POST: async (req: NextRequest) => {
    const data = await req.json()
    const project = await ProjectService.create(data)
    return NextResponse.json(project, { status: 201 })
  },

  PUT: async (req: NextRequest) => {
    const data = await req.json()
    const updated = await ProjectService.update(data)
    return NextResponse.json(updated)
  },

  DELETE: async (req: NextRequest) => {
    const data = await req.json()
    await ProjectService.remove(data.id)
    return NextResponse.json({ message: 'Silindi' })
  }
} 
  */
};
