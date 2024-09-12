'use client';

import React, { useState } from 'react';
import { ManageImageProps } from '@/app/lib/definitions';
import { validateImage } from '@/app/lib/utils';
import ImgFill from '../image-fill';
import ManageUpload from './manage-upload';
import data from '@/app/lib/appData.json';
import styles from '@/app/assets/css/manage/Form.module.css';

export default function ManageImage({ productId, isDelete }: ManageImageProps) {
  const [isImageFound, setIsImageFound] = useState(false);
  const [newImage, setNewImage] = useState('');
  const { imgWinePath } = data;
  const imgURL = `${imgWinePath}${productId}.webp`;

  validateImage(imgURL).then((isValid) => {
    // check if image exists
    setIsImageFound(isValid);
  });

  return (
    <div>
      <ManageUpload
        productId={productId}
        setNewImage={setNewImage}
        isDelete={isDelete}
      />
      {productId && isImageFound && !newImage && (
        <div className={styles.existingImage}>
          <ImgFill
            imgSrc={`wine/${productId}.webp`}
            imgAlt=""
            imgStyle="product130h"
            imgPriority={true}
          />
        </div>
      )}

      {/* Next.js image caching stops new uploaded images being shown so using standard img element */}
      {productId && newImage && (
        <div className={styles.newImage}>
          <img
            src={`/img/wine/${productId}.webp?imgId=${Date.now()}`}
            alt="wine"
            className={styles.uploadImg}
          />
        </div>
      )}
    </div>
  );
}
