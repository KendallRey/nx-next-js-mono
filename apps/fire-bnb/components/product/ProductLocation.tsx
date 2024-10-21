import { MuiBox, MuiPaper, MuiStack, MuiTypography } from '@nx-next-js-micro/components'
import { PLACEHOLDER } from 'apps/fire-bnb/placeholder/Placeholder'
import React from 'react'

const ProductLocation = () => {
  return (
    <MuiBox display="flex" flexDirection="column" gap={2}>
      <MuiTypography fontSize={20}>Where you'll be</MuiTypography>
      <MuiPaper className="overflow-hidden flex-grow md:flex-1" elevation={6}>
          <iframe
            height={'100%'}
            width={'100%'}
            className="min-h-[500px]"
            src="https://www.google.com/maps/embed"
          />
        </MuiPaper>
        <MuiStack gap={1}>
          <MuiTypography fontSize={20}>Quezon City, Manila</MuiTypography>
          <MuiTypography fontWeight={400}>
            {PLACEHOLDER.PRODUCT_LOCATION_DESCRIPTION_1}
          </MuiTypography>
          <MuiTypography sx={{ textDecoration: "underline" }}>
            Show more
          </MuiTypography>
        </MuiStack>
    </MuiBox>
  )
}

export default ProductLocation