import React, { Suspense } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import Footer from '@/components/Footer/Footer'
import CombinedTwoClient from './CombinedTwoClient'
import productData from '@/data/Product.json'

const ProductCombinedTwoPage = () => {
  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-white" />
        {/* Breadcrumb is SSR-safe with default id */}
        <BreadcrumbProduct
          data={productData}
          productPage="external"
          productId="1"
        />
      </div>

      {/* Client component inside Suspense */}
      <Suspense fallback={<div>Loading product...</div>}>
        <CombinedTwoClient data={productData} />
      </Suspense>

      <Footer />
    </>
  )
}

export default ProductCombinedTwoPage
