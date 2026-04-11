'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import OnSale from '@/components/Product/Detail/OnSale'
import { ProductType } from '@/type/ProductType'

interface Props {
  data: ProductType[]
}

const OnSaleProductClient: React.FC<Props> = ({ data }) => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id') || '1'

  return <OnSale data={data} productId={productId} />
}

export default OnSaleProductClient
