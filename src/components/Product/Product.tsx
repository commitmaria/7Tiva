"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/type/ProductType";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from "@/context/CartContext";
import { useModalCartContext } from "@/context/ModalCartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useModalWishlistContext } from "@/context/ModalWishlistContext";
import { useCompare } from "@/context/CompareContext";
import { useModalCompareContext } from "@/context/ModalCompareContext";
import { useModalQuickviewContext } from "@/context/ModalQuickviewContext";
import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";
import Rate from "../Other/Rate";

interface ProductProps {
  data: ProductType;
  type: string;
  style?: string;
}

const Product: React.FC<ProductProps> = ({ data, type, style }) => {
  const [activeColor, setActiveColor] = useState<string>("");
  const [activeSize, setActiveSize] = useState<string>("");
  const [openQuickShop, setOpenQuickShop] = useState<boolean>(false);
  const { addToCart, updateCart, cartState } = useCart();
  const { openModalCart } = useModalCartContext();
  const { addToWishlist, removeFromWishlist, wishlistState } = useWishlist();
  const { openModalWishlist } = useModalWishlistContext();
  const { addToCompare, removeFromCompare, compareState } = useCompare();
  const { openModalCompare } = useModalCompareContext();
  const { openQuickview } = useModalQuickviewContext();
  const router = useRouter();

  const handleActiveColor = (item: string) => {
    setActiveColor(item);
  };

  const handleActiveSize = (item: string) => {
    setActiveSize(item);
  };

  const handleAddToCart = () => {
    if (!cartState.cartArray.find((item) => item.id === data.id)) {
      addToCart({ ...data });
      updateCart(data.id, data.quantityPurchase, activeSize, activeColor);
    } else {
      updateCart(data.id, data.quantityPurchase, activeSize, activeColor);
    }
    openModalCart();
  };

  const handleAddToWishlist = () => {
    if (wishlistState.wishlistArray.some((item) => item.id === data.id)) {
      removeFromWishlist(data.id);
    } else {
      addToWishlist(data);
    }
    openModalWishlist();
  };

  const handleAddToCompare = () => {
    if (compareState.compareArray.length < 3) {
      if (compareState.compareArray.some((item) => item.id === data.id)) {
        removeFromCompare(data.id);
      } else {
        addToCompare(data);
      }
    } else {
      alert("Compare up to 3 products");
    }

    openModalCompare();
  };

  const handleQuickviewOpen = () => {
    openQuickview(data);
  };

  const handleDetailProduct = (productId: string) => {
    router.push(`/product/default?id=${productId}`);
  };

  let percentSale = Math.floor(100 - (data.price / data.originPrice) * 100);
  let percentSold = Math.floor((data.sold / data.quantity) * 100);

  return (
    <>
      {type === "grid" ? (
        <div className={`product-item grid-type ${style}`}>
          <div
            onClick={() => handleDetailProduct(data.id)}
            className="product-main cursor-pointer block"
          >
            <div className="product-thumb bg-white relative overflow-hidden rounded-2xl">

              {data.new && (
                <div className="product-tag text-button-uppercase bg-green px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">
                  New
                </div>
              )}

              {data.sale && (
                <div className="product-tag text-button-uppercase text-white bg-red px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">
                  Sale
                </div>
              )}

              {/* ACTION ICONS */}
              {style === "style-1" ||
              style === "style-3" ||
              style === "style-4" ? (
                <div className="list-action-right absolute top-3 right-3 max-lg:hidden">
                  {style === "style-4" && (
                    <div
                      className={`add-cart-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative mb-2 ${
                        compareState.compareArray.some(
                          (item) => item.id === data.id
                        )
                          ? "active"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart();
                      }}
                    >
                      <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                        Add To Cart
                      </div>
                      <Icon.ShoppingBagOpen size={20} />
                    </div>
                  )}

                  <div
                    className={`add-wishlist-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative ${
                      wishlistState.wishlistArray.some(
                        (item) => item.id === data.id
                      )
                        ? "active"
                        : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToWishlist();
                    }}
                  >
                    <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                      Add To Wishlist
                    </div>
                    {wishlistState.wishlistArray.some(
                      (item) => item.id === data.id
                    ) ? (
                      <Icon.Heart size={18} weight="fill" className="text-white" />
                    ) : (
                      <Icon.Heart size={18} />
                    )}
                  </div>

                  <div
                    className={`compare-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative mt-2 ${
                      compareState.compareArray.some(
                        (item) => item.id === data.id
                      )
                        ? "active"
                        : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCompare();
                    }}
                  >
                    <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                      Compare Product
                    </div>
                    <Icon.Repeat size={18} className="compare-icon" />
                    <Icon.CheckCircle size={20} className="checked-icon" />
                  </div>

                  {style === "style-3" || style === "style-4" ? (
                    <div
                      className="quick-view-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative mt-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuickviewOpen();
                      }}
                    >
                      <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                        Quick View
                      </div>
                      <Icon.Eye size={20} />
                    </div>
                  ) : null}
                </div>
              ) : null}

              {/* IMAGE */}
              <div className="product-img w-full h-full aspect-[3/4]">
                {activeColor ? (
                  <Image
                    src={
                      data.variation.find(
                        (item) => item.color === activeColor
                      )?.image ?? ""
                    }
                    width={500}
                    height={500}
                    alt={data.name}
                    priority
                    className="w-full h-full object-cover duration-700"
                  />
                ) : (
                  data.thumbImage.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      width={500}
                      height={500}
                      priority
                      alt={data.name}
                      className="w-full h-full object-cover duration-700"
                    />
                  ))
                )}
              </div>

              {/* SALE MARQUEE */}
              {data.sale && (
                <Marquee className="banner-sale-auto bg-black absolute bottom-0 left-0 w-full py-1.5">
                  <div className="caption2 font-semibold uppercase text-white px-2.5">
                    Hot Sale {percentSale}% OFF
                  </div>
                  <Icon.Lightning weight="fill" className="text-red" />
                </Marquee>
              )}
            </div>

            {/* INFO */}
            <div className="product-infor mt-4 lg:mb-7">
              <div className="product-sold sm:pb-4 pb-2">
                <div className="progress bg-line h-1.5 w-full rounded-full overflow-hidden relative">
                  <div
                    className="progress-sold bg-red absolute left-0 top-0 h-full"
                    style={{ width: `${percentSold}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span>Sold: {data.sold}</span>
                  <span>Available: {data.quantity - data.sold}</span>
                </div>
              </div>

              <div className="product-name text-title">{data.name}</div>

              <div className="product-price-block flex items-center gap-2 mt-1">
                <div className="product-price text-title">${data.price}</div>
                {percentSale > 0 && (
                  <>
                    <del>${data.originPrice}</del>
                    <div className="product-sale bg-green px-3 py-0.5 rounded-full">
                      -{percentSale}%
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Product;