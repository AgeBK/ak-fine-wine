import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAdminPage = nextUrl.pathname.startsWith('/manage');
      const isLoginPage = nextUrl.pathname.startsWith('/login');
      const pathname = nextUrl.searchParams.get('callbackUrl') || '/';
      console.log('==========================');
      console.log('LOGIN');
      console.log('isLoggedIn: ' + isLoggedIn);
      console.log('isAdminPage: ' + isAdminPage);
      console.log('isLoginPage: ' + isLoginPage);
      console.log('pathname:' + pathname);

      if (isLoginPage && isLoggedIn) {
        console.log('isLoginPage && LOGGED IN');
        return Response.redirect(new URL(pathname, nextUrl));
      }

      if (isAdminPage) {
        if (!isLoggedIn) {
          console.log('isAdminPage NOT LOGGED IN');
          return Response.redirect(new URL('/login', nextUrl));
        }
        console.log('isAdminPage LOGGED IN');
        return true; // admin page / logged in
      }
      console.log('==========================');
      return true; // normal page (no auth required)
    },
  },
} satisfies NextAuthConfig;
