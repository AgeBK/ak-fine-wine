/* eslint-disable @typescript-eslint/no-explicit-any */
// import next from 'next';
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
      // const pathname = nextUrl.searchParams.get('callbackUrl') || '/';
      // console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
      // console.log('LOGIN');
      // console.log('isLoggedIn: ' + isLoggedIn);
      // console.log('isAdminPage: ' + isAdminPage);
      // console.log('isLoginPage: ' + isLoginPage);
      // console.log('pathname:' + pathname);

      if (isLoginPage && isLoggedIn) {
        //console.log('isLoginPage && LOGGED IN');
        return Response.redirect(new URL('/manage', nextUrl));
      }

      if (isAdminPage) {
        if (!isLoggedIn) {
          return Response.redirect(new URL('/login', nextUrl));
        }
        return true; // admin page / logged in
      }
      return true; // normal page (no auth required)
    },
    jwt: ({ token, user }: { token: any; user: any }): any => {
      if (user) {
        token.uid = user;
      }

      return token;
    },
    session: ({ session, token }: { session: any; token: any }): any => {
      // modified session to return first and last name
      session.user = {
        firstName: token.uid.first_name,
        lastName: token.uid.last_name,
        email: token.uid.email,
      };
      return session;
    },
  },
} satisfies NextAuthConfig;
