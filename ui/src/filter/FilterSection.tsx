'use client';

import {
  MuiButton,
  MuiIconButton,
  MuiStack,
  MuiTypography,
} from '@nx-next-js-micro/components';
import { toSearchParams } from 'components/src/helper/api';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo, useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import style from './FilterSection.module.scss';

type FilterSectionProps = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

type IFilterSection = {
  name: string;
  filters: FilterSectionProps[];
};

export const FilterSection: React.FC<IFilterSection> = (props) => {
  const { filters, name } = props;
  const router = useRouter();
  const searchParams = useSearchParams();

  const containerRef = useRef<HTMLDivElement>(null);

  const currentFilter = useMemo(() => searchParams.get(name), [searchParams]);

  const onClickFilter = useCallback(
    (value: string) => {
      const _params = toSearchParams(searchParams, { page: 1 });
      if (value === currentFilter) _params.delete(name);
      else _params.set(name, value);
      router.replace(`?${_params.toString()}`, { scroll: false });
    },
    [router, searchParams, name, currentFilter, containerRef.current]
  );

  const onNext = useCallback(() => {
    if (!containerRef.current) return;
    const { clientWidth } = containerRef.current;
    const newScrollPosition = containerRef.current.scrollLeft + clientWidth;
    containerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
  }, [containerRef.current]);

  const onPrev = useCallback(() => {
    if (!containerRef.current) return;
    const { clientWidth } = containerRef.current;
    const newScrollPosition = containerRef.current.scrollLeft - clientWidth;
    containerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
  }, [containerRef.current]);

  return (
    <div className={style['container']}>
      <div className={`${style['button']} ${style['prev']} hidden`}>
        <MuiIconButton onClick={onPrev}>
          <HiChevronLeft />
        </MuiIconButton>
      </div>
      <MuiStack
        ref={containerRef}
        direction={'row'}
        overflow={'scroll'}
        gap={2}
        className="no-scrollbar relative"
      >
        {filters.map((filter) => {
          const isActive = filter.id === currentFilter;
          return (
            <MuiButton
              key={filter.id}
              variant="text"
              color="inherit"
              className="rounded-3xl text-gray-500 hover:text-gray-900 duration-200"
              onClick={() => onClickFilter(filter.id)}
              noAnimation
            >
              <MuiStack alignItems="center">
                <MuiTypography fontSize={24}>{filter.icon}</MuiTypography>
                <MuiTypography
                  variant="subtitle2"
                  borderBottom={2}
                  borderColor={isActive ? 'unset' : 'transparent'}
                >
                  {filter.name}
                </MuiTypography>
              </MuiStack>
            </MuiButton>
          );
        })}
      </MuiStack>
      <div className={`${style['button']} ${style['next']}`}>
        <MuiIconButton onClick={onNext}>
          <HiChevronRight />
        </MuiIconButton>
      </div>
    </div>
  );
};
