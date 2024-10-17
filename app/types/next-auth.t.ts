import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /* The extra user properties I added to the session user object */
      /* while keeping the default session properties are extened here so the compiler doesn't complain */
      firstName: string;
      lastName: string;
    } & DefaultSession['user'];
  }
}
