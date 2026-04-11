'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import CountdownTimer from '@/components/Product/Detail/CountdownTimer'
import productData from '@/data/Product.json'

const TwoScrollingClient = () => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id') ?? '1'

  return <CountdownTimer data={productData} productId={productId} />
}

export default TwoScrollingClient
