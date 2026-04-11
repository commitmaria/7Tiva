import React, { Suspense } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import ExternalProductClient from './ExternalProductClient'
import Footer from '@/components/Footer/Footer'
import productData from '@/data/Product.json'

const ProductExternalPage = () => {
  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-white" />
        <BreadcrumbProduct
          data={productData}
          productPage="external"
          productId="1"
        />
      </div>

      <Suspense fallback={<div>Loading product...</div>}>
        <ExternalProductClient data={productData} />
      </Suspense>

      <Footer />
    </>
  )
}

export default ProductExternalPage
