'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import VariableProduct from '@/components/Product/Detail/VariableProduct'
import productData from '@/data/Product.json'

const VariableClient = () => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id') ?? '1'

  return <VariableProduct data={productData} productId={productId} />
}

export default VariableClient
