import React from 'react';
import {
  MuiCard,
  MuiCardContent,
  MuiCardMedia,
  MuiRating,
  MuiStack,
  MuiTypography,
} from '@nx-next-js-micro/components';
import { IImageCarousel, ImageCarousel } from '@nx-next-js-micro/ui';
import Link from 'next/link';
import { ROUTE_ID, ROUTES } from 'apps/fire-bnb/constants/ROUTES';

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
];

const ProductCard = () => {
  return (
    <MuiCard className="rounded-2xl hover:shadow-xl">
      <MuiCardMedia className="relative">
        <ImageCarousel slides={IMAGES} slideProps={{ height: 240 }} />
      </MuiCardMedia>
      <MuiCardContent className="cursor-pointer">
        <Link href={ROUTES.PRODUCT.VIEW.href.replace(ROUTE_ID, 'test')}>
          <div className="flex justify-between gap-2">
            <MuiTypography textOverflow={'ellipsis'} noWrap fontWeight={600}>
              Room Name
            </MuiTypography>
            <MuiStack direction={'row'}>
              <MuiRating defaultValue={1} max={1} readOnly />
              <MuiTypography>4.8</MuiTypography>
            </MuiStack>
          </div>
          <MuiStack>
            <MuiTypography variant="body2">2,627 kilometers away</MuiTypography>
            <MuiTypography variant="body2">Nov 1-6</MuiTypography>
          </MuiStack>
          <MuiStack direction={'row'} gap={0.5} alignItems={'center'}>
            <MuiTypography variant="body1" fontWeight={600}>
              ₱15,217
            </MuiTypography>
            <MuiTypography variant="body1">night</MuiTypography>
          </MuiStack>
        </Link>
      </MuiCardContent>
    </MuiCard>
  );
};

export default ProductCard;
