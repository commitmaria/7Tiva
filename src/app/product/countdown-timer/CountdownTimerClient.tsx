'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import CountdownTimer from '@/components/Product/Detail/CountdownTimer'

const CountdownTimerClient = ({ data }: { data: any }) => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id') || '1'

  return <CountdownTimer data={data} productId={productId} />
}

export default CountdownTimerClient
