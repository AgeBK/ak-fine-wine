// manage folder seperate from the default routes (authorised users only)
import styles from '@/app/assets/css/manage/ManagePage.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className={styles.main}>{children}</main>;
}
