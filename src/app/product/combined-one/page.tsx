import React, { Suspense } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import Footer from '@/components/Footer/Footer'
import CombinedOneClient from './CombinedOneClient'
import productData from '@/data/Product.json'

const ProductCombinedOnePage = () => {
  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-white" />
        {/* Breadcrumb can render SSR-safe with default id */}
        <BreadcrumbProduct
          data={productData}
          productPage="variable"
          productId="1"
        />
      </div>

      {/* Client component with Suspense */}
      <Suspense fallback={<div>Loading product...</div>}>
        <CombinedOneClient data={productData} />
      </Suspense>

      <Footer />
    </>
  )
}

export default ProductCombinedOnePage
