'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import External from '@/components/Product/Detail/External'

const CombinedTwoClient = ({ data }: { data: any }) => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id') || '1' // fallback

  return <External data={data} productId={productId} />
}

export default CombinedTwoClient
