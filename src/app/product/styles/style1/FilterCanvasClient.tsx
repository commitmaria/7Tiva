'use client'

import React, { Suspense } from 'react'
import ShopFilterCanvas from '@/components/Shop/ShopFilterCanvas'
import productData from '@/data/Product.json'
import { useSearchParams } from 'next/navigation'

const FilterCanvasInner = () => {
  const searchParams = useSearchParams()
  const typeParam = searchParams.get('type') // returns string | null
  const type: string | null = typeParam ?? null // ensure type is string | null

  return (
    <ShopFilterCanvas
      data={productData}
      productPerPage={12}
      dataType={type} // now type matches expected type
      productStyle='style-1'
    />
  )
}

const FilterCanvasClient = () => {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <FilterCanvasInner />
    </Suspense>
  )
}

export default FilterCanvasClient
