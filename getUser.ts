import { auth } from './auth';

export default async function getUser() {
  // first name/last name/email
  // I modified the standard session in auth.config
  const session = await auth();
  return session?.user || null;
}
