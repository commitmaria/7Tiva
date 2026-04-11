'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import External from '@/components/Product/Detail/External'
import { ProductType } from '@/type/ProductType'

interface Props {
  data: ProductType[]
}

const ExternalProductClient: React.FC<Props> = ({ data }) => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id') || '1'

  return <External data={data} productId={productId} />
}

export default ExternalProductClient
