import { MuiBox, MuiButton, MuiFab } from '@nx-next-js-micro/components';
import React from 'react';

type IFloatingNavigation = {
  logo?: React.ReactNode;
  children: React.ReactNode;
};

const FloatingNavigation: React.FC<IFloatingNavigation> = (props) => {
  const { logo, children } = props;

  return (
    <MuiBox className="fixed flex justify-center gap-2 top-[25px] w-full">
      <MuiBox className="flex gap-2 items-center bg-white p-2 rounded">
        {logo}
        {children}
      </MuiBox>
    </MuiBox>
  );
};

export default FloatingNavigation;
