import { ILayout, MuiBox } from '@nx-next-js-micro/components'
import React from 'react'


const Section:React.FC<ILayout> = ({ children }) => {
  return (
    <MuiBox maxWidth={1400} width={"100%"} className='w-full mx-auto p-2 sm:p-4 md:p-6 lg:p-8'>{children}</MuiBox>
  )
}

export default Section