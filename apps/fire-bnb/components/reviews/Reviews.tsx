import { MuiBox } from '@nx-next-js-micro/components'
import React from 'react'
import ReviewHeader from './ReviewHeader'
import ReviewRating from './ReviewRating'
import ReviewCard from './ReviewCard'

const Reviews = () => {
  return (
    <MuiBox display="flex" flexDirection="column" gap={4}>
      <ReviewHeader/>
      <ReviewRating/>
      <MuiBox className='grid grid-cols-1 md:grid-cols-2' gap={4}>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
      </MuiBox>
    </MuiBox>
  )
}

export default Reviews