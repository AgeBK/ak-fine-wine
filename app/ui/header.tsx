import Link from 'next/link';
import AutoComplete from '@/app/ui/AutoComplete';
import Nav from './nav';
import Img from './image';
import HeaderUserCart from './header-user-cart';
import getUser from '@/getUser';
import { fetchProducts } from '../lib/data';
import styles from '@/app/assets/css/Header.module.css';

export default async function Header() {
  // loads site header / calls to fetch all products and check if current user has a session
  const [products, user] = await Promise.all([fetchProducts(), getUser()]);
  const firstName = user?.firstName;

  return (
    <header className={styles.header}>
      <div className={styles.headerRow}>
        <div className={styles.logo}>
          <Link href="/">
            <Img
              imgSrc={'logos/AK.webp'}
              imgAlt="AK Fine Wines"
              imgWidth={80}
              imgHeight={80}
              imgPriority={true}
            />
          </Link>
        </div>
        <h1 className={styles.hdr}>
          AK <span>FINE WINES</span>
        </h1>
        <AutoComplete products={products} />
        <HeaderUserCart user={firstName} />
      </div>
      <Nav />
    </header>
  );
}
