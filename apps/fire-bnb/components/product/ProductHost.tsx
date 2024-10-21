import { MuiAvatar, MuiBox, MuiButton, MuiDivider, MuiPaper, MuiRating, MuiStack, MuiTypography } from '@nx-next-js-micro/components'
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoIosMale } from "react-icons/io";
import { GiGraduateCap } from "react-icons/gi";
import React from 'react'
import { PLACEHOLDER } from 'apps/fire-bnb/placeholder/Placeholder';

const ProductHost = () => {
  return (
    <MuiBox display="flex" flexDirection="column" gap={4}>
      <MuiTypography fontSize={20}>Meet your Host</MuiTypography>
      <MuiBox className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <MuiStack gap={4}>
        <MuiPaper sx={{ borderRadius: 4, paddingY: 3}} className='flex gap-4 justify-between items-center shadow-xl'>
          <MuiStack alignItems="center" marginX={6}>
            <MuiAvatar sx={{ width: 120, height: 120 }}/>
            <MuiTypography  fontSize={24} fontWeight={600}>Smith</MuiTypography>
            <MuiTypography variant='body2'>Premium</MuiTypography>
          </MuiStack>
          <MuiStack gap={1} minWidth={120}>
            <MuiStack>
              <MuiTypography fontSize={24} fontWeight={600}>402</MuiTypography>
              <MuiTypography fontSize={12}>Reviews</MuiTypography>
            </MuiStack>
            <MuiDivider sx={{ width: "100%" }}/>
            <MuiStack>
              <MuiStack direction="row" alignItems="center">
                <MuiTypography fontSize={24} fontWeight={600}>4.5</MuiTypography> 
                <MuiRating defaultValue={1} max={1} readOnly/>
              </MuiStack>
              <MuiTypography fontSize={12}>Rating</MuiTypography>
            </MuiStack>
            <MuiDivider sx={{ width: "100%" }}/>
            <MuiStack>
              <MuiTypography fontSize={24} fontWeight={600}>4</MuiTypography>
              <MuiTypography fontSize={12}>Years hosting</MuiTypography>
            </MuiStack>
          </MuiStack>
        </MuiPaper>
        <MuiStack gap={1}>
          <MuiStack direction='row' alignItems="center" gap={2}>
            <IoIosMale fontSize={24}/>
            <MuiTypography variant='subtitle1'>Born in the 90s</MuiTypography>
          </MuiStack>
          <MuiStack direction='row' alignItems="center" gap={2}>
            <GiGraduateCap  fontSize={24}/>
            <MuiTypography variant='subtitle1'>Graduated at: Manila State Univerity</MuiTypography>
          </MuiStack>
          <MuiTypography variant='subtitle1'>{PLACEHOLDER.USER_DESCRIPTION_1}</MuiTypography>
        </MuiStack>
        </MuiStack>
        <MuiBox>
        <MuiStack gap={2}>
          <MuiTypography fontSize={18}>Smith is a Premium Member</MuiTypography>
          <MuiTypography variant='subtitle2'>Premium members are experienced, highly rated hosts who are committed to providing great stays for customers.</MuiTypography>
          <MuiTypography fontSize={18}>Host details</MuiTypography>
          <MuiStack>
            <MuiTypography variant='subtitle2'>Response rate: 100%</MuiTypography>
            <MuiTypography variant='subtitle2'>Responds within an hour</MuiTypography>
          </MuiStack>
          <span>
            <MuiButton size='large'>Message Host</MuiButton>
          </span>
          <MuiDivider/>
          <MuiStack direction='row' gap={2} alignItems='center'>
            <RiSecurePaymentLine fontSize={24}/>
            <MuiTypography variant='caption'>To protect your payment, never transfer money or communicate outside of the FireBnB website or app.</MuiTypography>
          </MuiStack>
        </MuiStack>
      </MuiBox>
      </MuiBox>
    </MuiBox>
  )
}

export default ProductHost