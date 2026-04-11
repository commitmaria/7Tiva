import React, { Suspense } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import Footer from '@/components/Footer/Footer'
import BoughtTogetherClient from './BoughtTogetherClient'
import productData from '@/data/Product.json'

const ProductBoughtTogetherPage = () => {
  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-white" />
        {/* Render breadcrumb with default productId, safe for SSR */}
        <BreadcrumbProduct
          data={productData}
          productPage="bought-together"
          productId="1"
        />
      </div>

      {/* Client component wrapped in Suspense */}
      <Suspense fallback={<div>Loading products...</div>}>
        <BoughtTogetherClient data={productData} />
      </Suspense>

      <Footer />
    </>
  )
}

export default ProductBoughtTogetherPage
