import {
  MuiCard,
  MuiCardContent,
  MuiCardMedia,
  MuiSkeleton,
  MuiStack,
} from '@nx-next-js-micro/components';
import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <MuiCard className="rounded-2xl hover:shadow-xl">
      <MuiCardMedia className="relative">
        <MuiSkeleton width={'100%'} height={240} />
      </MuiCardMedia>
      <MuiCardContent>
        <div className="flex justify-between gap-2 my-1">
          <MuiSkeleton
            variant="text"
            height={20}
            width={150}
            animation="wave"
          />
          <MuiSkeleton width={35} height={20} animation="wave" />
        </div>
        <MuiStack gap={0.4} marginY={1}>
          <MuiSkeleton width={170} height={12} animation="wave" />
          <MuiSkeleton width={100} height={12} animation="wave" />
        </MuiStack>
        <MuiSkeleton
          width={130}
          height={16}
          className="my-2"
          animation="wave"
        />
      </MuiCardContent>
    </MuiCard>
  );
};

export default ProductCardSkeleton;
