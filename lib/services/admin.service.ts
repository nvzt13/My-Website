import { prisma } from '@/lib/prisma' // Prisma client
import { Admin } from '@prisma/client';
import bcrypt from 'bcrypt';
import { SignJWT } from 'jose';
import { NextResponse } from "next/server";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);


export async function create(data: Admin) {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const newAdmin = await prisma.admin.create({
    data: {
      userName: data.userName,
      password: hashedPassword,
    },
  });

  return {
    id: newAdmin.id,
    userName: newAdmin.userName,
  }; // Şifreyi return etme!
}

export async function login({ userName, password }: { userName: string, password: string }) {
  const admin = await prisma.admin.findFirst({
    where: { userName },
  });

  if (!admin) {
    throw new Error("Kullanıcı bulunamadı");
  }

  const isPasswordCorrect = await bcrypt.compare(password, admin.password);
  if (!isPasswordCorrect) {
    throw new Error("Şifre yanlış");
  }

  const token = await new SignJWT({
    id: admin.id,
    userName: admin.userName,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .setIssuedAt()
    .sign(JWT_SECRET);

  return { token };
}

export async function getAdmin () {
  const admin = await prisma.admin.findFirst({
    select: {
      id: true,
      userName: true,
    },
  });

  return admin;
}