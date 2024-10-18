import { ILayout, MuiBox } from '@nx-next-js-micro/components'
import React from 'react'


const Section:React.FC<ILayout> = ({ children }) => {
  return (
    <MuiBox maxWidth={800}>{children}</MuiBox>
  )
}

export default Section