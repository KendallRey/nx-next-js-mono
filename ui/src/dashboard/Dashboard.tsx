import { ILayout, MuiBox } from '@nx-next-js-micro/components';
import React from 'react';

export const Dashboard: React.FC<ILayout> = ({ children }) => {
  return <MuiBox className="flex flex-col flex-grow gap-4">{children}</MuiBox>;
};
