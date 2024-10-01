'use client';

import { usePathname } from 'next/navigation';
import React, { useCallback } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import { useScroll, motion } from 'framer-motion';
import {
  MuiButton,
  MuiFab,
  MuiPaper,
  MuiTypography,
  IRoute,
} from '@nx-next-js-micro/components';

type INavigation = {
  routes: IRoute[];
};

export const Navigation: React.FC<INavigation> = (props) => {
  const { routes } = props;
  const pathname = usePathname();
  const theme = useTheme();

  const { scrollY } = useScroll();

  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  const isActiveLink = useCallback(
    (link: string) => {
      return pathname.startsWith(link);
    },
    [pathname]
  );

  if (!isMd) return <div></div>;

  return (
    <MuiPaper
      component={'nav'}
      className="flex-grow max-w-[50px] lg:max-w-[240px] lg:min-w-[240px] p-4"
      elevation={3}
      color="primary"
    >
      <motion.div style={{ marginTop: scrollY, transitionDuration: '200ms' }}>
        <div className="flex flex-col gap-4 lg:gap-2">
          {routes.map((route) => {
            const active = isActiveLink(route.href);
            return (
              <React.Fragment key={route.href}>
                {isLg ? (
                  <MuiButton
                    component={Link}
                    href={route.href}
                    variant={active ? 'contained' : 'text'}
                  >
                    <MuiTypography variant="button" fontSize={18}>
                      {route.name}
                    </MuiTypography>
                  </MuiButton>
                ) : (
                  <MuiFab
                    component={Link}
                    href={route.href}
                    size="small"
                    color={active ? 'primary' : 'default'}
                  >
                    {route.icon}
                  </MuiFab>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </motion.div>
    </MuiPaper>
  );
};
