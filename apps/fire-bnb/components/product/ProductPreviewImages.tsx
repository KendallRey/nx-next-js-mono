'use client';

import { MuiPaper, useAppMediaQuery } from '@nx-next-js-micro/components';
import { IImageCarousel, ImageCarousel } from '@nx-next-js-micro/ui';
import Image from 'next/image';
import React from 'react';

const IMAGES: IImageCarousel[] = [
  {
    id: 'image1',
    src: '/images/sample.webp',
    title: 'Title 1',
    children: <div>TEST</div>,
  },
  {
    id: 'image2',
    src: '/images/sample.webp',
    title: 'Title 2',
    children: <div>TEST</div>,
  },
  {
    id: 'image3',
    src: '/images/sample.webp',
    title: 'Title 3',
    children: <div>TEST</div>,
  },
  {
    id: 'image4',
    src: '/images/sample.webp',
    title: 'Title 4',
    children: <div>TEST</div>,
  },
  {
    id: 'image5',
    src: '/images/sample.webp',
    title: 'Title 5',
    children: <div>TEST</div>,
  },
];

const ProductPreviewImages = () => {
  const { sm } = useAppMediaQuery();

  return (
    <>
      {sm ? (
        <ImageCarousel slideProps={{ height: 500 }} slides={IMAGES} />
      ) : (
        <div className="flex gap-4 h-[500px] rounded-2xl overflow-hidden">
          <div className="relative flex-grow">
            <Image
              src={IMAGES[0].src ?? ''}
              objectFit="cover"
              alt="test1"
              fill
              className=" top-0 left-0 object-cover"
            />
          </div>
          <div className="flex flex-grow max-h-[500px] ">
            <div className="relative flex-1">
              <Image
                src={IMAGES[0].src ?? ''}
                objectFit="cover"
                alt="test1"
                fill
                className=" top-0 left-0 object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPreviewImages;
