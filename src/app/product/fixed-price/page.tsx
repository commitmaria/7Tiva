import React, { Suspense } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import FixedPriceProductClient from './FixedPriceProductClient'
import Footer from '@/components/Footer/Footer'
import productData from '@/data/Product.json'

const ProductFixedPricePage = () => {
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
          productPage="fixed-price"
          productId="1" // default id for breadcrumb
        />
      </div>

      <Suspense fallback={<div>Loading product...</div>}>
        <FixedPriceProductClient data={productData} />
      </Suspense>

      <Footer />
    </>
  )
}

export default ProductFixedPricePage
