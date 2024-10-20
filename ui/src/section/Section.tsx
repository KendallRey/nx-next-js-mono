import { ILayout, MuiBox } from '@nx-next-js-micro/components';
import React from 'react';

type ISection = {
  className?: string;
  maxWidth?: number;
} & ILayout;

const Section: React.FC<ISection> = (props) => {
  const { children, maxWidth, className } = props;

  return (
    <MuiBox
      maxWidth={maxWidth || 1600}
      width={'100%'}
      className={`w-full mx-auto sm:p-4 md:p-6 lg:p-8 ${
        className ? className : ''
      }`}
    >
      {children}
    </MuiBox>
  );
};

export default Section;
