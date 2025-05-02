import { NextRequest, NextResponse } from "next/server";
import * as ProjectService from "@/lib/services/project.service";

export const handlers = {
  GET: async (req: NextRequest) => {
    const projects = await ProjectService.getAll();
    return NextResponse.json(projects);
  },
 
  POST: async (req: NextRequest) => {
    const data = await req.json()
    const project = await ProjectService.create(data)
    return NextResponse.json(project, { status: 201 })
  },

  DELETE: async (req: NextRequest) => {
    const id = req.url.split('/').pop() || ''
    if (!id) {
      return NextResponse.json({ message: 'ID yok' }, { status: 400 })
    }
    await ProjectService.remove(id)
    return NextResponse.json({ message: 'Silindi' })
  }
} 
  /*
  PUT: async (req: NextRequest) => {
    const data = await req.json()
    const updated = await ProjectService.update(data)
    return NextResponse.json(updated)
  },
  };

  */
