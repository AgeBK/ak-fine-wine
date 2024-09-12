'use client';

import { CategoryBlurbProps, KeyStringProps } from '@/app/lib/definitions';
import { deHyphenate, hyphenate } from '@/app/lib/utils';
import data from '@/app/lib/appData.json';
import styles from '@/app/assets/css/Blurb.module.css';

export default function CategoryBlurb({
  urlCategory,
  variety,
}: CategoryBlurbProps) {
  // displays heading/info about the wine or deal based on the URL on the category page
  const { blurb } = data;
  const synopsis: KeyStringProps = blurb;

  let hdr = variety || deHyphenate(decodeURIComponent(urlCategory)); // decodeURIComponent when searching
  if (hdr?.includes('=')) {
    // removes search= from search bar and brand= from product details link
    hdr = hdr?.split('=')[1];
  }

  const wineBlurb =
    (variety && synopsis[hyphenate(variety) as string]) || // some wines have a specific variety blurb (sub-category)
    synopsis[urlCategory] || // some have a general category blurb
    synopsis['generic']; // some have a generic blurb (2 for deals etc)

  return (
    <section className={styles.categoryBlurb}>
      <h2 className={styles.hdr}>{hdr}</h2>
      <div className={styles.blurb}>{wineBlurb}</div>
    </section>
  );
}
