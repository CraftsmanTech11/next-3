'use client'

import ErrorComp from '@/components/Common/ErrorComp'
import React from 'react'

export default function ErrorP(props:any) {
  console.log('error-props', props)
  return (
    <div     >
      <ErrorComp errorMsg = {props.error?.message}  />
    </div>
  )
}
