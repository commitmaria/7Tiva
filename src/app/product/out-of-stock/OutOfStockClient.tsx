'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import OutOfStock from '@/components/Product/Detail/OutOfStock'
import productData from '@/data/Product.json'

const OutOfStockClient = () => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id') || '1'

  return <OutOfStock data={productData} productId={productId} />
}

export default OutOfStockClient
