import React, { Suspense } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import OneScrollingClient from './OneScrollingClient'
import Footer from '@/components/Footer/Footer'
import productData from '@/data/Product.json'

const ProductOneScrollingPage = () => {
  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="Get real followers — not bot followers"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-white" />
        <BreadcrumbProduct
          data={productData}
          productPage="grouped" // breadcrumb uses default
          productId="1"
        />
      </div>

      <Suspense fallback={<div>Loading product...</div>}>
        <OneScrollingClient data={productData} />
      </Suspense>

      <Footer />
    </>
  )
}

export default ProductOneScrollingPage
