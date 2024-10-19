import { ILayout, MuiBox } from '@nx-next-js-micro/components';
import React from 'react';

type ISection = {
  className?: string;
} & ILayout;

const Section: React.FC<ISection> = (props) => {
  const { children, className } = props;

  return (
    <MuiBox
      maxWidth={1600}
      width={'100%'}
      className={`w-full mx-auto p-2 sm:p-4 md:p-6 lg:p-8 ${
        className ? className : ''
      }`}
    >
      {children}
    </MuiBox>
  );
};

export default Section;
