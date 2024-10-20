import { LinearProgress } from '@mui/material'
import { MuiBox, MuiStack, MuiTypography } from '@nx-next-js-micro/components'
import React from 'react'

import style from './ReviewRating.module.scss';

import { PiSprayBottle } from "react-icons/pi";
import { CiCircleCheck } from "react-icons/ci";
import { PiKey } from "react-icons/pi";
import { LuMessageSquare } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { IoPricetagsOutline } from "react-icons/io5";

const ReviewRating = () => {
  return (
    <div className={style.container}>
      <MuiBox className='flex-1 py-2 px-4'>
        <MuiTypography>Overall rating</MuiTypography>
        <MuiStack>
          <MuiStack direction='row' alignItems="center" gap={1}>
            <MuiTypography variant='subtitle2'>5</MuiTypography>
            <LinearProgress style={{ width: "100%" }} variant="determinate" value={90} />
          </MuiStack>
          <MuiStack direction='row' alignItems="center" gap={1}>
            <MuiTypography variant='subtitle2'>4</MuiTypography>
            <LinearProgress style={{ width: "100%" }} variant="determinate" value={50} />
          </MuiStack>
          <MuiStack direction='row' alignItems="center" gap={1}>
            <MuiTypography variant='subtitle2'>3</MuiTypography>
            <LinearProgress style={{ width: "100%" }} variant="determinate" value={20} />
          </MuiStack>
          <MuiStack direction='row' alignItems="center" gap={1}>
            <MuiTypography variant='subtitle2'>2</MuiTypography>
            <LinearProgress style={{ width: "100%" }} variant="determinate" value={10} />
          </MuiStack>
          <MuiStack direction='row' alignItems="center" gap={1}>
            <MuiTypography variant='subtitle2'>1</MuiTypography>
            <LinearProgress style={{ width: "100%" }} variant="determinate" value={0} />
          </MuiStack>
        </MuiStack>
      </MuiBox>
      <MuiBox className='flex-1 flex flex-col gap-6 border-l py-2 px-4'>
        <MuiStack>
          <MuiTypography>Cleanliness</MuiTypography>
          <MuiTypography fontSize={20}>4.9</MuiTypography>
        </MuiStack>
        <PiSprayBottle fontSize={32}/>
      </MuiBox>
      <MuiBox className='flex-1 flex flex-col gap-6 border-l py-2 px-4'>
        <MuiStack>
          <MuiTypography>Accuracy</MuiTypography>
          <MuiTypography fontSize={20}>5.0</MuiTypography>
        </MuiStack>
        <CiCircleCheck fontSize={32}/>
      </MuiBox>
      <MuiBox className='flex-1 flex flex-col gap-6 border-l py-2 px-4'>
        <MuiStack>
          <MuiTypography>Check-in</MuiTypography>
          <MuiTypography fontSize={20}>4.9</MuiTypography>
        </MuiStack>
        <PiKey fontSize={32}/>
      </MuiBox>
      <MuiBox className='flex-1 flex flex-col gap-6 border-l py-2 px-4'>
        <MuiStack>
          <MuiTypography>Communication</MuiTypography>
          <MuiTypography fontSize={20}>5.0</MuiTypography>
        </MuiStack>
        <LuMessageSquare fontSize={32}/>
      </MuiBox>
      <MuiBox className='flex-1 flex flex-col gap-6 border-l py-2 px-4'>
        <MuiStack>
          <MuiTypography>Location</MuiTypography>
          <MuiTypography fontSize={20}>4.8</MuiTypography>
        </MuiStack>
        <LuMapPin fontSize={32}/>
      </MuiBox>
      <MuiBox className='flex-1 flex flex-col gap-6 border-l py-2 px-4'>
        <MuiStack>
          <MuiTypography>Value</MuiTypography>
          <MuiTypography fontSize={20}>4.7</MuiTypography>
        </MuiStack>
        <IoPricetagsOutline fontSize={32}/>
      </MuiBox>
    </div>
  )
}

export default ReviewRating