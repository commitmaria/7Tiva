'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import Discount from '@/components/Product/Detail/Discount'
import { ProductType } from '@/type/ProductType'

interface Props {
  data: ProductType[]
}

const DiscountProductClient: React.FC<Props> = ({ data }) => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id') || '1'

  return <Discount data={data} productId={productId} />
}

export default DiscountProductClient
