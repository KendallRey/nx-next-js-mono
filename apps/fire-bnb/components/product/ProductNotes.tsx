import { MuiBox, MuiStack, MuiTypography } from '@nx-next-js-micro/components'
import React from 'react'

const ProductNotes = () => {
  return (
    <MuiBox>
      <MuiTypography fontSize={20}>Things to know</MuiTypography>
      <MuiBox className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 py-4'>
        <MuiStack>
          <MuiTypography paddingY={2} fontWeight={600}>House Rules</MuiTypography>
          <MuiTypography variant='subtitle2'>Check-in after 3:00 PM</MuiTypography>
          <MuiTypography variant='subtitle2'>Checkout before 11:00 AM</MuiTypography>
        </MuiStack>
        <MuiStack>
          <MuiTypography paddingY={2} fontWeight={600}>Safety & property</MuiTypography>
          <MuiTypography variant='subtitle2'>Pool/hot tub without a gate or lock</MuiTypography>
          <MuiTypography variant='subtitle2'>Climbing or play structure</MuiTypography>
          <MuiTypography variant='subtitle2'>Carbon monoxide alarm</MuiTypography>
        </MuiStack>
        <MuiStack>
          <MuiTypography paddingY={2} fontWeight={600}>Cancellation policy</MuiTypography>
          <MuiTypography variant='subtitle2'>Review this Host's full policy for details</MuiTypography>
        </MuiStack>
      </MuiBox>
    </MuiBox>
  )
}

export default ProductNotes