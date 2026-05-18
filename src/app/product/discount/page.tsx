import React, { Suspense } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import DiscountProductClient from './DiscountProductClient'
import Footer from '@/components/Footer/Footer'
import productData from '@/data/Product.json'

const ProductDiscountPage = () => {
  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="Get real followers — not bot followers"
      />
      <div id="header" className="relative w-full style-discount">
        <MenuOne props="bg-white" />
        {/* Breadcrumb is safe to render in SSR */}
        <BreadcrumbProduct data={productData} productPage="discount" productId="1" />
      </div>

      <Suspense fallback={<div>Loading product...</div>}>
        <DiscountProductClient data={productData} />
      </Suspense>

      <Footer />
    </>
  )
}

export default ProductDiscountPage
