'use client';

import { differenceInDays } from 'date-fns';
import { toDate, format } from 'date-fns';

import {
  DateRange,
  MuiStack,
  MuiTypography,
} from '@nx-next-js-micro/components';
import {
  useAppDispatch,
  useAppSelector,
} from 'apps/fire-bnb/redux/services/hooks';
import React, { useCallback, useMemo } from 'react';
import { editReservationForm } from 'apps/fire-bnb/redux/feature/reservation/reservationFormSlice';

const ReservationDates = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.reservationFormSlice);

  const daysCount = useMemo(() => {
    if (!form.end_date || !form.start_date) return null;
    const diff = differenceInDays(
      new Date(form.start_date),
      new Date(form.end_date)
    );
    const abs = Math.abs(diff);
    if (abs <= 0) return null;
    return abs;
  }, [form.end_date, form.start_date]);


  const daysBetween = useMemo(() => {
    if (!daysCount) return 'Select check-in date';
    return `${daysCount} night${daysCount > 1 ? 's' : ''} in Quezon`;
  }, [daysCount]);

  const checkInDates = useMemo(() => {
    if (!form.end_date || !form.start_date || !daysCount)
      return 'Add your travel dates for exact pricing';
    return `${format(new Date(form.start_date), 'PP')} - ${format(
      new Date(form.end_date),
      'PP'
    )}`;
  }, [daysCount ,form.end_date, form.start_date]);

  const onChangeDates = useCallback(
    (start: string, end: string) => {
      dispatch(editReservationForm({ start_date: start, end_date: end }));
    },
    [dispatch]
  );

  return (
    <>
      <MuiStack>
        <MuiTypography fontSize={20}>{daysBetween}</MuiTypography>
        <MuiTypography variant="body2">{checkInDates}</MuiTypography>
      </MuiStack>
      <DateRange
        startDate={form.start_date}
        endDate={form.end_date}
        onChange={onChangeDates}
      />
    </>
  );
};

export default ReservationDates;
