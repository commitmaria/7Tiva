'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import Default from '@/components/Product/Detail/Default'
import { ProductType } from '@/type/ProductType'

interface Props {
  data: ProductType[]
}

const DefaultProductClient: React.FC<Props> = ({ data }) => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id') || '1'

  return <Default data={data} productId={productId} />
}

export default DefaultProductClient
