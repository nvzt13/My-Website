import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';
import { SignJWT } from 'jose';

// JWT Secret'i encoder ile hazırla
const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export const handlers = {
  POST: async (req: NextRequest) => {
    const data = await req.json();
    const { userName, password } = data;

    const admin = await prisma.admin.findFirst({
      where: {
        userName,
      },
    });

    if (!admin) {
      return NextResponse.json({ error: "Kullanıcı bulunamadı" }, { status: 401 });
    }

    const isPasswordCorrect = await bcrypt.compare(password, admin.password);

    if (!isPasswordCorrect) {
      return NextResponse.json({ error: "Şifre yanlış" }, { status: 401 });
    }

    // jose ile token oluştur
    const token = await new SignJWT({
      id: admin.id,
      userName: admin.userName,
      role: admin.role,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('7d')
      .setIssuedAt()
      .sign(secret);

    const response = NextResponse.json({ success: true });
    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return response;
  },
};