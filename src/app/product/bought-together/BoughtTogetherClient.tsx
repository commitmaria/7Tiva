'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import BoughtTogether from '@/components/Product/Detail/BoughtTogether'

const BoughtTogetherClient = ({ data }: { data: any }) => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id') || '1'

  return <BoughtTogether data={data} productId={productId} />
}

export default BoughtTogetherClient
