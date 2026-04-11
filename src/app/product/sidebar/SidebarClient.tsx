'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import Sidebar from '@/components/Product/Detail/Sidebar'
import productData from '@/data/Product.json'

const SidebarClient = () => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id') || '1'

  return <Sidebar data={productData} productId={productId} />
}

export default SidebarClient
