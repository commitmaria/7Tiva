'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import Sale from '@/components/Product/Detail/Sale'
import productData from '@/data/Product.json'

const SaleClient = () => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id') || '1'

  return <Sale data={productData} productId={productId} />
}

export default SaleClient
