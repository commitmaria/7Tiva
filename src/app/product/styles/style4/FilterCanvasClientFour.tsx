'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import ShopFilterCanvas from '@/components/Shop/ShopFilterCanvas'
import productData from '@/data/Product.json'

const FilterCanvasClientFour = () => {
  const searchParams = useSearchParams()
  const type = searchParams.get('type') ?? null // ensures string | null

  return (
    <ShopFilterCanvas
      data={productData}
      productPerPage={12}
      dataType={type}
      productStyle='style-4'
    />
  )
}

export default FilterCanvasClientFour
