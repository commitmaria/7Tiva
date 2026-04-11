'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import VariableProduct from '@/components/Product/Detail/VariableProduct'

const CombinedOneClient = ({ data }: { data: any }) => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id') || '1' // fallback

  return <VariableProduct data={data} productId={productId} />
}

export default CombinedOneClient
