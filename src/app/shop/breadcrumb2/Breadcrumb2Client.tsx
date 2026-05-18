'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import ShopBreadCrumb2 from '@/components/Shop/ShopBreadCrumb2'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'

export default function Breadcrumb2Client() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const category = searchParams.get('category')

  return (
    <>
      <TopNavOne props="style-one bg-black" slogan="Get real followers — not bot followers" />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
      </div>
      <ShopBreadCrumb2
        data={productData}
        productPerPage={9}
        dataType={type}
      />
      <Footer />
    </>
  )
}
