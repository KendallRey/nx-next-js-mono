'use client';

import {
  DateRange,
  MuiBox,
  MuiButton,
  MuiDivider,
  MuiPaper,
  MuiStack,
  MuiTypography,
} from '@nx-next-js-micro/components';
import { editReservationForm } from 'apps/fire-bnb/redux/feature/reservation/reservationFormSlice';
import {
  useAppDispatch,
  useAppSelector,
} from 'apps/fire-bnb/redux/services/hooks';
import { parseToMoney } from 'components/src/helper/component';
import { differenceInDays, format, daysToWeeks } from 'date-fns';
import React, { useCallback, useMemo } from 'react';

type IReservationCard = {
  discountPerWeek?: number;
  nightPrice: number;
  cleaningFee?: number;
};

const ReservationCard: React.FC<IReservationCard> = (props) => {
  const { discountPerWeek, cleaningFee, nightPrice } = props;
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
    return `${daysCount} night in Quezon`;
  }, [daysCount]);

  const checkInDates = useMemo(() => {
    if (!form.end_date || !form.start_date)
      return 'Add your travel dates for exact pricing';
    return `${format(new Date(form.start_date), 'PP')} - ${format(
      new Date(form.end_date),
      'PP'
    )}`;
  }, [form]);

  const totalPrice = useMemo(() => {
    if(!daysCount) return 0;
    let totalPrice = 0
    totalPrice += (daysCount * nightPrice)
    totalPrice += cleaningFee ?? 0
    return totalPrice;
  },[daysCount, nightPrice, cleaningFee])

  const onChangeDates = useCallback(
    (start: string, end: string) => {
      dispatch(editReservationForm({ start_date: start, end_date: end }));
    },
    [dispatch]
  );

  return (
    <MuiPaper
      sx={{ position: 'sticky', top: 80, borderRadius: 4 }}
      variant="outlined"
      className="flex flex-col gap-4 min-w-[400px] max-w-[600px] p-5 shadow-xl"
    >
      <MuiStack direction={'row'} gap={0.5} alignItems={'center'}>
        <MuiTypography
          fontSize={24}
          className="text-gray-500"
          sx={{ textDecoration: 'line-through' }}
        >
          ₱5,500
        </MuiTypography>
        <MuiTypography fontSize={24}>{parseToMoney(nightPrice)}</MuiTypography>
        <MuiTypography>night</MuiTypography>
      </MuiStack>
      <DateRange
        startDate={form.start_date}
        endDate={form.end_date}
        onChange={onChangeDates}
      />
      <MuiButton size="large" disabled={!daysCount}>Reserve</MuiButton>
      <MuiTypography textAlign={'center'}>
        You won't be charged yet
      </MuiTypography>
      {daysCount && (
        <>
          <MuiStack gap={1}>
            <MuiBox display="flex" justifyContent="space-between" gap={4}>
              <MuiTypography sx={{ textDecoration: 'underline' }}>
                {parseToMoney(nightPrice)} x {daysCount} night{daysCount > 1 ? "s" : ''}
              </MuiTypography>
              <MuiTypography>
                {parseToMoney(nightPrice * daysCount)}
              </MuiTypography>
            </MuiBox>
            {cleaningFee && <MuiBox display="flex" justifyContent="space-between" gap={4}>
              <MuiTypography sx={{ textDecoration: 'underline' }}>
                Cleaning Fee
              </MuiTypography>
              <MuiTypography>
                {parseToMoney(cleaningFee)}
              </MuiTypography>
            </MuiBox>}
          </MuiStack>
          <MuiDivider/>
          <MuiBox display="flex" justifyContent="space-between" gap={4}>
              <MuiTypography fontWeight={600}>
                Total before taxes
              </MuiTypography>
              <MuiTypography  fontWeight={600}>
                {parseToMoney(totalPrice)}
              </MuiTypography>
            </MuiBox>
        </>
      )}
    </MuiPaper>
  );
};

export default ReservationCard;
