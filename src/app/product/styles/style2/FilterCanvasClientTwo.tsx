'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import ShopFilterCanvas from '@/components/Shop/ShopFilterCanvas'
import productData from '@/data/Product.json'

const FilterCanvasClientTwo = () => {
  const searchParams = useSearchParams()
  const type = searchParams.get('type') ?? null  // match ShopFilterCanvas type

  return (
    <ShopFilterCanvas
      data={productData}
      productPerPage={12}
      dataType={type}
      productStyle='style-2'
    />
  )
}

export default FilterCanvasClientTwo
