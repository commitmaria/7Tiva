import React, { Suspense } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import DefaultProductClient from './DefaultProductClient'
import Footer from '@/components/Footer/Footer'
import productData from '@/data/Product.json'

const ProductDefaultPage = () => {
  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-white" />
        {/* Breadcrumb can safely use a default id */}
        <BreadcrumbProduct data={productData} productPage="default" productId="1" />
      </div>

      {/* Wrap the client component in Suspense */}
      <Suspense fallback={<div>Loading product...</div>}>
        <DefaultProductClient data={productData} />
      </Suspense>

      <Footer />
    </>
  )
}

export default ProductDefaultPage
