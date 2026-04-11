'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import Default from '@/components/Product/Detail/Default'
import productData from '@/data/Product.json'

const ThumbnailLeftClient = () => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id') ?? '1'

  return <Default data={productData} productId={productId} />
}

export default ThumbnailLeftClient
