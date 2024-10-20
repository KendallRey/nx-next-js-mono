import { MuiAvatar, MuiListItem, MuiListItemAvatar, MuiListItemText, MuiRating, MuiStack, MuiTypography } from '@nx-next-js-micro/components'
import { PLACEHOLDER } from 'apps/fire-bnb/placeholder/Placeholder'
import React from 'react'

const ReviewCard = () => {

  return (
    <MuiStack boxSizing="border-box">
      <MuiListItem component={'div'} sx={{ paddingX: 0 }}>
        <MuiListItemAvatar>
          <MuiAvatar/>
        </MuiListItemAvatar>
        <MuiListItemText
          primary='Gladius' secondary='4 years on FireBNB' />
      </MuiListItem>
      <MuiStack direction="row" alignItems="center" gap={1}>
        <MuiRating value={4.5} precision={0.05} size='small' />
        <span>•</span>
        <MuiTypography variant='subtitle2'>4 weeks ago</MuiTypography>
      </MuiStack>
      <MuiTypography textOverflow="ellipsis" overflow="hidden" sx={{ wordWrap: "break-word" }} maxWidth="100%" maxHeight={120}>{PLACEHOLDER.PRODUCT_REVIEW_1}</MuiTypography>
    </MuiStack>
  )
}

export default ReviewCard