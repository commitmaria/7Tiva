"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import Product from "@/components/Product/Product";
import productData from "@/data/Product.json";
import useLoginPopup from "@/store/useLoginPopup";
import useShopDepartmentPopup from "@/store/useShopDepartmentPopup";
import useMenuMobile from "@/store/useMenuMobile";
import { useModalCartContext } from "@/context/ModalCartContext";
import { useModalWishlistContext } from "@/context/ModalWishlistContext";
import { useModalSearchContext } from "@/context/ModalSearchContext";
import { useCart } from "@/context/CartContext";

const MenuPet = () => {
  const pathname = usePathname();
  const { openLoginPopup, handleLoginPopup } = useLoginPopup();
  const { openShopDepartmentPopup, handleShopDepartmentPopup } =
    useShopDepartmentPopup();
  const { openMenuMobile, handleMenuMobile } = useMenuMobile();
  const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null);
  const { openModalCart } = useModalCartContext();
  const { cartState } = useCart();
  const { openModalWishlist } = useModalWishlistContext();
  const { openModalSearch } = useModalSearchContext();

  const [searchKeyword, setsearchKeyword] = useState("");
  const router = useRouter();

  const handleSearch = (value: string) => {
    router.push(`/search-result?query=${value}`);
    setsearchKeyword("");
  };

  const handleOpenSubNavMobile = (index: number) => {
    setOpenSubNavMobile(openSubNavMobile === index ? null : index);
  };

  const [fixedHeader, setFixedHeader] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setFixedHeader(scrollPosition > 0 && scrollPosition < lastScrollPosition);
      setLastScrollPosition(scrollPosition);
    };

    // Gắn sự kiện cuộn khi component được mount
    window.addEventListener("scroll", handleScroll);

    // Hủy sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  const handleGenderClick = (gender: string) => {
    router.push(`/shop/breadcrumb1?gender=${gender}`);
  };

  const handleCategoryClick = (category: string) => {
    router.push(`/shop/breadcrumb1?category=${category}`);
  };

  const handleTypeClick = (type: string) => {
    router.push(`/shop/breadcrumb1?type=${type}`);
  };

  return (
    <>
      <div
        className={`header-menu style-eight ${
          fixedHeader ? " fixed" : "relative"
        } bg-surface w-full md:h-[90px] h-[64px]`}
      >
        <div className="container mx-auto h-full">
          <div className="header-main flex items-center justify-between h-full">
            <div
              className="menu-mobile-icon lg:hidden flex items-center"
              onClick={handleMenuMobile}
            >
              <i className="icon-category text-2xl"></i>
            </div>
            <Link href={"/"} className="flex items-center">
              <div className="heading4">
                <Image
                  src="/logoclud.png"
                  alt="Shopclud logo"
                  width={100}
                  height={30}
                  priority
                />
              </div>
            </Link>
            <div className="form-search w-[54%] pl-8 flex items-center h-[48px] max-lg:hidden">
              <div className="w-full flex items-center h-full">
                <input
                  type="text"
                  className="search-input h-full px-4 w-full border border-line rounded-l-2xl"
                  placeholder="What are you looking for today?"
                  value={searchKeyword}
                  onChange={(e) => setsearchKeyword(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleSearch(searchKeyword)
                  }
                />
                <button
                  className="search-button button-main bg-black h-full flex items-center px-3 rounded-l-none rounded-r-2xl"
                  onClick={() => {
                    handleSearch(searchKeyword);
                  }}
                >
                  <Icon.MagnifyingGlass
                    color="#fff"
                    size={24}
                    weight="bold"
                    className="duration-300"
                  />
                </button>
              </div>
            </div>
            <div className="right flex gap-12">
              <div className="list-action flex items-center gap-6">
                <div className="user-icon flex items-center flex-col justify-center cursor-pointer">
                  <Icon.User
                    size={24}
                    color="black"
                    onClick={handleLoginPopup}
                  />
                  <div className="caption1" onClick={handleLoginPopup}>
                    Account
                  </div>
                  <div
                    className={`login-popup absolute top-[74px] w-[320px] p-7 rounded-xl bg-white box-shadow-sm 
                                            ${openLoginPopup ? "open" : ""}`}
                  >
                    <Link
                      href={"/login"}
                      className="button-main w-full text-center"
                    >
                      Login
                    </Link>
                    <div className="text-secondary text-center mt-3 pb-4">
                      Don’t have an account?
                      <Link
                        href={"/register"}
                        className="text-black pl-1 hover:underline"
                      >
                        Register
                      </Link>
                    </div>
                    <Link
                      href={"/my-account"}
                      className="button-main bg-white text-black border border-black w-full text-center"
                    >
                      Dashboard
                    </Link>
                    <div className="bottom mt-4 pt-4 border-t border-line"></div>
                    <Link href={"#!"} className="body1 hover:underline">
                      Support
                    </Link>
                  </div>
                </div>
                <div
                  className="max-md:hidden wishlist-icon flex flex-col items-center cursor-pointer"
                  onClick={openModalWishlist}
                >
                  <Icon.Heart size={24} color="black" />
                  <div className="caption1">Wishlist</div>
                </div>
                <div
                  className="cart-icon flex flex-col items-center relative cursor-pointer"
                  onClick={openModalCart}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    role="img"
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
                    />
                  </svg>
                  <div className="caption1">Cart</div>
                  <span className="quantity cart-quantity absolute -right-1 -top-1.5 text-xs text-white bg-black w-4 h-4 flex items-center justify-center rounded-full">
                    {cartState.cartArray.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-nav-menu relative bg-white h-[44px] max-lg:hidden z-10">
        <div className="container h-full">
          <div className="top-nav-menu-main flex items-center justify-between h-full">
            <div className="left flex items-center h-full">
              <div className="menu-department-block relative h-full">
                <div
                  className="menu-department-btn bg-black relative flex items-center gap-2 pl-4 pr-24 h-full w-fit cursor-pointer"
                  onClick={handleShopDepartmentPopup}
                >
                  <i className="icon-category text-white"></i>
                  <div className="text-button-uppercase text-white whitespace-nowrap">
                    Shop By
                  </div>
                </div>
                <div
                  className={`sub-menu-department absolute top-[44px] left-0 right-0 h-max bg-white rounded-b-2xl ${
                    openShopDepartmentPopup ? "open" : ""
                  }`}
                >
                  <div className="item block">
                    <Link
                      href={"/shop/breadcrumb-img"}
                      className="caption1 py-4 px-5 border-b border-line whitespace-nowrap block"
                    >
                      Dog Food
                    </Link>
                  </div>
                  <div className="item block">
                    <Link
                      href={"/shop/breadcrumb-img"}
                      className="caption1 py-4 px-5 border-b border-line whitespace-nowrap block"
                    >
                      Dog Outfits
                    </Link>
                  </div>
                  <div className="item block">
                    <Link
                      href={"/shop/breadcrumb-img"}
                      className="caption1 py-4 px-5 border-b border-line whitespace-nowrap block"
                    >
                      Dog Toys
                    </Link>
                  </div>
                  <div className="item block">
                    <Link
                      href={"/shop/breadcrumb-img"}
                      className="caption1 py-4 px-5 border-b border-line whitespace-nowrap block"
                    >
                      Dog Accessory
                    </Link>
                  </div>
                  <div className="item block">
                    <Link
                      href={"/shop/breadcrumb-img"}
                      className="caption1 py-4 px-5 border-b border-line whitespace-nowrap block"
                    >
                      Cat Food
                    </Link>
                  </div>
                  <div className="item block">
                    <Link
                      href={"/shop/breadcrumb-img"}
                      className="caption1 py-4 px-5 border-b border-line whitespace-nowrap block"
                    >
                      Cat Outfits
                    </Link>
                  </div>
                  <div className="item block">
                    <Link
                      href={"/shop/breadcrumb-img"}
                      className="caption1 py-4 px-5 border-b border-line whitespace-nowrap block"
                    >
                      Cat Toys
                    </Link>
                  </div>
                  <div className="item block">
                    <Link
                      href={"/shop/breadcrumb-img"}
                      className="caption1 py-4 px-5 border-b border-line whitespace-nowrap block"
                    >
                      Cat Accessory
                    </Link>
                  </div>
                  <div className="item block">
                    <Link
                      href={"/shop/breadcrumb-img"}
                      className="caption1 py-4 px-5 whitespace-nowrap block"
                    >
                      Pet Services
                    </Link>
                  </div>
                </div>
              </div>
              <div className="menu-main style-eight h-full pl-12 max-lg:hidden">
                <ul className="flex items-center gap-8 h-full">
                  <li className="h-full relative">
                    <Link
                      href="/"
                      className={`text-button-uppercase duration-300 h-full flex items-center justify-center gap-1 
                                            ${
                                              pathname.includes("/homepages/")
                                                ? "active"
                                                : ""
                                            }`}
                    >
                      Home
                    </Link>
                    
                  </li>
                  
                  <li className="h-full">
                    <Link
                      href="/shop/default"
                      className="text-button-uppercase duration-300 h-full flex items-center justify-center"
                    >
                      Shop
                    </Link>
                   
                  </li>
                  <li className="h-full">
                    <Link
                      href="/pages/contact"
                      className="text-button-uppercase duration-300 h-full flex items-center justify-center"
                    >
                      Contact us
                    </Link>
                    
                  </li>
                  <li className="h-full relative">
                    <Link
                      href="/blog/list"
                      className="text-button-uppercase duration-300 h-full flex items-center justify-center"
                    >
                      Blog
                    </Link>
                    
                  </li>
                  <li className="h-full relative">
                    <Link
                      href="#!"
                      className={`text-button-uppercase duration-300 h-full flex items-center justify-center ${
                        pathname.includes("/pages") ? "active" : ""
                      }`}
                    >
                      Pages
                    </Link>
                    <div className="sub-menu py-3 px-5 -left-10 absolute bg-white rounded-b-xl">
                      <ul className="w-full">
                        <li>
                          <Link
                            href="/pages/about"
                            className={`text-secondary duration-300 ${
                              pathname === "/pages/about" ? "active" : ""
                            }`}
                          >
                            About Us
                          </Link>
                        </li>
                        
                        <li>
                          <Link
                            href="/pages/page-not-found"
                            className={`text-secondary duration-300 ${
                              pathname === "/pages/page-not-found"
                                ? "active"
                                : ""
                            }`}
                          >
                            404
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/pages/faqs"
                            className={`text-secondary duration-300 ${
                              pathname === "/pages/faqs" ? "active" : ""
                            }`}
                          >
                            FAQs
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/pages/coming-soon"
                            className={`text-secondary duration-300 ${
                              pathname === "/pages/coming-soon" ? "active" : ""
                            }`}
                          >
                            Coming Soon
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/pages/customer-feedbacks"
                            className={`text-secondary duration-300 ${
                              pathname === "/pages/customer-feedbacks"
                                ? "active"
                                : ""
                            }`}
                          >
                            Customer Feedbacks
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right flex items-center gap-1 max-[1240px]:hidden">
              <div className="text-button">
                Limited Time Offer:{" "}
                <span className="text-red">Instant Download</span> on all orders
                over $50
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="menu-mobile" className={`${openMenuMobile ? "open" : ""}`}>
        <div className="menu-container bg-white h-full">
          <div className="container h-full">
            <div className="menu-main h-full overflow-hidden">
              <div className="heading py-2 relative flex items-center justify-center">
                <div
                  className="close-menu-mobile-btn absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface flex items-center justify-center"
                  onClick={handleMenuMobile}
                >
                  <Icon.X size={14} />
                </div>
                <Link href={"/"}>
                  <div className="logo">
                    <Image
                      src="/logoclud.png"
                      alt="Shopclud logo"
                      width={114}
                      height={31}
                      priority
                    />
                  </div>
                </Link>
              </div>
              <div className="form-search relative mt-2">
                <Icon.MagnifyingGlass
                  size={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
                />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className=" h-12 rounded-lg border border-line text-sm w-full pl-10 pr-4"
                />
              </div>
              <div className="list-nav mt-6">
                <ul>
                  <li
                    className={`${openSubNavMobile === 1 ? "open" : ""}`}
                    onClick={() => handleOpenSubNavMobile(1)}
                  >
                    <a
                      href={"/"}
                      className={`text-xl font-semibold flex items-center justify-between`}
                    >
                      Home
                      <span className="text-right">
                        <Icon.CaretRight size={20} />
                      </span>
                    </a>
                    
                  </li>
                  <li
                    className={`${openSubNavMobile === 2 ? "open" : ""}`}
                    onClick={() => handleOpenSubNavMobile(2)}
                  >
                    <a
                      href={"/pages/contact"}
                      className="text-xl font-semibold flex items-center justify-between mt-5"
                    >
                      Contact us
                      <span className="text-right">
                        <Icon.CaretRight size={20} />
                      </span>
                    </a>
                   
                  </li>
                  <li
                    className={`${openSubNavMobile === 3 ? "open" : ""}`}
                    onClick={() => handleOpenSubNavMobile(3)}
                  >
                    <a
                      href={"/shop/default"}
                      className="text-xl font-semibold flex items-center justify-between mt-5"
                    >
                      Shop
                      <span className="text-right">
                        <Icon.CaretRight size={20} />
                      </span>
                    </a>
                  
                  </li>
                  
                  <li
                    className={`${openSubNavMobile === 5 ? "open" : ""}`}
                    onClick={() => handleOpenSubNavMobile(5)}
                  >
                    <a
                      href={"/blog/list"}
                      className="text-xl font-semibold flex items-center justify-between mt-5"
                    >
                      Blog
                      <span className="text-right">
                        <Icon.CaretRight size={20} />
                      </span>
                    </a>
                  
                  </li>
                  <li
                    className={`${openSubNavMobile === 6 ? "open" : ""}`}
                    onClick={() => handleOpenSubNavMobile(6)}
                  >
                    <a
                      href={"#!"}
                      className="text-xl font-semibold flex items-center justify-between mt-5"
                    >
                      Pages
                      <span className="text-right">
                        <Icon.CaretRight size={20} />
                      </span>
                    </a>
                    <div className="sub-nav-mobile">
                      <div
                        className="back-btn flex items-center gap-3"
                        onClick={() => handleOpenSubNavMobile(6)}
                      >
                        <Icon.CaretLeft />
                        Back
                      </div>
                      <div className="list-nav-item w-full pt-2 pb-6">
                        <ul className="w-full">
                          <li>
                            <Link
                              href="/pages/about"
                              className={`text-secondary duration-300 ${
                                pathname === "/pages/about" ? "active" : ""
                              }`}
                            >
                              About Us
                            </Link>
                          </li>
                          
                          <li>
                            <Link
                              href="/pages/page-not-found"
                              className={`text-secondary duration-300 ${
                                pathname === "/pages/page-not-found"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              404
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/pages/faqs"
                              className={`text-secondary duration-300 ${
                                pathname === "/pages/faqs" ? "active" : ""
                              }`}
                            >
                              FAQs
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/pages/coming-soon"
                              className={`text-secondary duration-300 ${
                                pathname === "/pages/coming-soon"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              Coming Soon
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/pages/customer-feedbacks"
                              className={`text-secondary duration-300 ${
                                pathname === "/pages/customer-feedbacks"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              Customer Feedbacks
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPet;
