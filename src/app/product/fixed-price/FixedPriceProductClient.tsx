'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import FixedPrice from '@/components/Product/Detail/FixedPrice'
import { ProductType } from '@/type/ProductType'

interface Props {
  data: ProductType[]
}

const FixedPriceProductClient: React.FC<Props> = ({ data }) => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id') || '1'

  return <FixedPrice data={data} productId={productId} />
}

export default FixedPriceProductClient
