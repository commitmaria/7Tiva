"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from "@/context/CartContext";
import { countdownTime } from "@/store/countdownTime";

const Cart = () => {
  const [timeLeft, setTimeLeft] = useState(countdownTime());
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(countdownTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { cartState, updateCart, removeFromCart } = useCart();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    const itemToUpdate = cartState.cartArray.find(
      (item) => item.id === productId
    );

    if (itemToUpdate) {
      updateCart(productId, newQuantity, "", ""); // ✅ removed size/color
    }
  };

  let [totalCart, setTotalCart] = useState<number>(0);
  let [discountCart, setDiscountCart] = useState<number>(0);
  let [applyCode, setApplyCode] = useState<number>(0);

  cartState.cartArray.map((item) => (totalCart += item.price * item.quantity));

  const handleApplyCode = (minValue: number, discount: number) => {
    if (totalCart > minValue) {
      setApplyCode(minValue);
      setDiscountCart(discount);
    } else {
      alert(`Minimum order must be ${minValue}$`);
    }
  };

  if (totalCart < applyCode) {
    applyCode = 0;
    discountCart = 0;
  }

  const redirectToCheckout = () => {
    router.push(`/checkout?discount=${discountCart}`); // ✅ removed shipping
  };

  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading="Shopping cart" subHeading="Shopping cart" />
      </div>
      <div className="cart-block md:py-20 py-10">
        <div className="container">
          <div className="content-main flex justify-between max-xl:flex-col gap-y-8">
            <div className="xl:w-2/3 xl:pr-3 w-full">
              <div className="time bg-green py-3 px-5 flex items-center rounded-lg">
                <div className="heding5">🔥</div>
                <div className="caption1 pl-2">
                  Your cart will expire in
                  <span className="min text-red text-button fw-700">
                    {" "}
                    {timeLeft.minutes}:
                    {timeLeft.seconds < 10
                      ? `0${timeLeft.seconds}`
                      : timeLeft.seconds}
                  </span>
                  <span> minutes!</span>
                </div>
              </div>

              {/* ✅ simplified banner */}
              <div className="heading banner mt-5">
                <div className="text">
                  All products are delivered instantly after purchase.
                </div>
              </div>

              <div className="list-product w-full sm:mt-7 mt-5">
                <div className="w-full">
                  <div className="heading bg-surface bora-4 pt-4 pb-4">
                    <div className="flex">
                      <div className="w-1/2">
                        <div className="text-button text-center">Products</div>
                      </div>
                      <div className="w-1/12">
                        <div className="text-button text-center">Price</div>
                      </div>
                      <div className="w-1/6">
                        <div className="text-button text-center">Access</div>
                      </div>
                      <div className="w-1/6">
                        <div className="text-button text-center">
                          Total Price
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="list-product-main w-full mt-3">
                    {cartState.cartArray.length < 1 ? (
                      <p className="text-button pt-3">No product in cart</p>
                    ) : (
                      cartState.cartArray.map((product) => (
                        <div
                          className="item flex md:mt-7 md:pb-7 mt-5 pb-5 border-b border-line w-full"
                          key={product.id}
                        >
                          <div className="w-1/2">
                            <div className="flex items-center gap-6">
                              <div className="bg-img md:w-[100px] w-20 aspect-[3/4]">
                                <Image
                                  src={product.thumbImage[0]}
                                  width={1000}
                                  height={1000}
                                  alt={product.name}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              </div>
                              <div>
                                <div className="text-title">{product.name}</div>
                              </div>
                            </div>
                          </div>

                          <div className="w-1/12 price flex items-center justify-center">
                            <div className="text-title text-center">
                              ${product.price}
                            </div>
                          </div>

                          {/* ✅ quantity removed */}
                          <div className="w-1/6 flex items-center justify-center">
                            <div className="text-button">1</div>
                          </div>

                          <div className="w-1/6 flex total-price items-center justify-center">
                            <div className="text-title text-center">
                              ${product.price}
                            </div>
                          </div>

                          <div className="w-1/12 flex items-center justify-center">
                            <Icon.XCircle
                              className="text-xl max-md:text-base text-red cursor-pointer hover:text-black duration-500"
                              onClick={() => {
                                removeFromCart(product.id);
                              }}
                            />
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* discount section unchanged */}
              <div className="input-block discount-code w-full h-12 sm:mt-7 mt-5">
                <form className="w-full h-full relative">
                  <input
                    type="text"
                    placeholder="Add voucher discount"
                    className="w-full h-full bg-surface pl-4 pr-14 rounded-lg border border-line"
                    required
                  />
                  <button className="button-main absolute top-1 bottom-1 right-1 px-5 rounded-lg flex items-center justify-center">
                    Apply Code
                  </button>
                </form>
              </div>
            </div>

            <div className="xl:w-1/3 xl:pl-12 w-full">
              <div className="checkout-block bg-surface p-6 rounded-2xl">
                <div className="heading5">Order Summary</div>

                <div className="total-block py-5 flex justify-between border-b border-line">
                  <div className="text-title">Subtotal</div>
                  <div className="text-title">
                    $<span className="total-product">{totalCart}</span>
                  </div>
                </div>

                <div className="discount-block py-5 flex justify-between border-b border-line">
                  <div className="text-title">Discounts</div>
                  <div className="text-title">
                    -${discountCart}
                  </div>
                </div>

                {/* ✅ replaced shipping */}
                <div className="py-5 flex justify-between border-b border-line">
                  <div className="text-title">Delivery</div>
                  <div className="text-title">Instant</div>
                </div>

                <div className="total-cart-block pt-4 pb-4 flex justify-between">
                  <div className="heading5">Total</div>
                  <div className="heading5">
                    ${totalCart - discountCart}
                  </div>
                </div>

                <div className="block-button flex flex-col items-center gap-y-4 mt-5">
                  <div
                    className="checkout-btn button-main text-center w-full"
                    onClick={redirectToCheckout}
                  >
                    Process To Checkout
                  </div>
                  <Link
                    className="text-button hover-underline"
                    href={"/shop/breadcrumb1"}
                  >
                    Continue shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;