import React, { Suspense } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import Footer from '@/components/Footer/Footer'
import productData from '@/data/Product.json'
import ThumbnailLeftClient from './ThumbnailLeftClient'

export default function ProductThumbnailLeftPage() {
  return (
    <>
      <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
      <div id="header" className='relative w-full'>
        <MenuOne props="bg-white" />
        <BreadcrumbProduct data={productData} productPage='default' productId='1' />
      </div>

      <Suspense fallback={<div>Loading product...</div>}>
        <ThumbnailLeftClient />
      </Suspense>

      <Footer />
    </>
  )
}
