import React, { Suspense } from "react"
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import Footer from "@/components/Footer/Footer"
import SearchResultClient from "./SearchResultClient"

const SearchResultPage = () => {
  return (
    <>
      <TopNavOne props="style-one bg-black" slogan="Get real followers — not bot followers" />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading="Search Result" subHeading="Search Result" />
      </div>

      <Suspense fallback={<div>Loading search results...</div>}>
        <SearchResultClient />
      </Suspense>

      <Footer />
    </>
  )
}

export default SearchResultPage
