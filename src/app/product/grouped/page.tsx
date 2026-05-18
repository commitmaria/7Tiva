import React, { Suspense } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import GroupedProductClient from './GroupedProductClient'
import Footer from '@/components/Footer/Footer'
import productData from '@/data/Product.json'

const ProductGroupedPage = () => {
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
          productPage="grouped"
          productId="1" // default for breadcrumb
        />
      </div>

      <Suspense fallback={<div>Loading product...</div>}>
        <GroupedProductClient data={productData} />
      </Suspense>

      <Footer />
    </>
  )
}

export default ProductGroupedPage
