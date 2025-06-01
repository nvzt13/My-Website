import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import * as adminService from "@/lib/services/admin.service";

export const handlers = {
  POST: async (req: NextRequest) => {
    const body = await req.json();
    const admin = await adminService.getAdmin();
    // Eğer admin zaten varsa giriş yapma, yoksa kayıt olma işlemi yapacağız
    if (admin) {
      try {
        const { token } = await adminService.login({
          userName: body.userName,
          password: body.password,
        });

        const response = NextResponse.json({ success: true });
        response.cookies.set("token", token, {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
        });

        return response;
      } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 401 });
      }
    } else {
      // admin oluşturma (register)
      const admin = await adminService.create(body);
      return NextResponse.json(admin, { status: 201 });
    }
  },
};
