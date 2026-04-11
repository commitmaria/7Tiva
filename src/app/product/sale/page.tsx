import React, { Suspense } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import SaleClient from './SaleClient'
import Footer from '@/components/Footer/Footer'
import productData from '@/data/Product.json'

const ProductSalePage = () => {
  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-white" />
        <BreadcrumbProduct data={productData} productPage="sale" productId="1" />
      </div>

      <Suspense fallback={<div>Loading product...</div>}>
        <SaleClient />
      </Suspense>

      <Footer />
    </>
  )
}

export default ProductSalePage
