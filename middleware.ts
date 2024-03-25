import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

const auth = NextAuth(authConfig).auth;
console.log('auth');
console.log(auth.toString());

export default auth;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
