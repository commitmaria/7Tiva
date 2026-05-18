import React, { Suspense } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Footer from '@/components/Footer/Footer'
import FilterCanvasClientTwo from './FilterCanvasClientTwo'

export default function FilterCanvasProductTwoPage() {
  return (
    <>
      <TopNavOne props="style-one bg-black" slogan="Get real followers — not bot followers" />
      <div id="header" className='relative w-full'>
        <MenuOne props="bg-transparent" />
      </div>

      <Suspense fallback={<div>Loading products...</div>}>
        <FilterCanvasClientTwo />
      </Suspense>

      <Footer />
    </>
  )
}
