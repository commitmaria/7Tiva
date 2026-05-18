import React, { Suspense } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Footer from '@/components/Footer/Footer'
import FilterCanvasClient from './FilterCanvasClient'

export default function FilterCanvasProductOnePage() {
  return (
    <>
      <TopNavOne props="style-one bg-black" slogan="Get real followers — not bot followers" />
      <div id="header" className='relative w-full'>
        <MenuOne props="bg-transparent" />
      </div>

      <Suspense fallback={<div>Loading products...</div>}>
        <FilterCanvasClient />
      </Suspense>

      <Footer />
    </>
  )
}
