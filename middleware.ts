import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const { pathname } = req.nextUrl;

  if (pathname === '/login') {
    if (token) {
      try {
        await jwtVerify(token, secret);
        return NextResponse.redirect(new URL('/admin', req.url)); // Token geçerliyse admin'e gönder
      } catch {
        return NextResponse.next(); // Token geçersizse login'e erişmesine izin ver
      }
    }
    return NextResponse.next(); // Token yoksa login'e erişmesine izin ver
  }

  // /admin ve alt rotalar için token kontrolü
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch (err) {
    console.error('Token doğrulama hatası:', err);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

// 🧭 Middleware çalışacak rotalar
export const config = {
  matcher: ['/admin/:path*', '/login'],
};
