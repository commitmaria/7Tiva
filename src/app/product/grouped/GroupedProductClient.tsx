'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import Grouped from '@/components/Product/Detail/Grouped'
import { ProductType } from '@/type/ProductType'

interface Props {
  data: ProductType[]
}

const GroupedProductClient: React.FC<Props> = ({ data }) => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id') || '1'

  return <Grouped data={data} productId={productId} />
}

export default GroupedProductClient
