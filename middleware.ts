import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    await jwtVerify(token, secret); // decode işlemi burada
    return NextResponse.next();
  } catch (err) {
    console.error('Token doğrulama hatası:', err);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}