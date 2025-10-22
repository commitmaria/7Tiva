"use client";

import React, { useState } from "react";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import { useCart } from "@/context/CartContext";
import { useSearchParams } from "next/navigation";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Checkout = () => {
  const searchParams = useSearchParams();
  const discount = Number(searchParams.get("discount") || 0);
  const ship = Number(searchParams.get("ship") || 0);

  const { cartState } = useCart();

  // Correct total calculation using reduce
  const totalCart = cartState.cartArray.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [activePayment, setActivePayment] = useState<string>("paypal");

  const handlePayment = (item: string) => {
    setActivePayment(item);
  };

  const finalAmount = totalCart - discount + ship;

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AYW-U8C4ouJJ4EP3_AZt_6R5OOnWvo1eXnWpJzCz3IJTE0sDaZWk84aWmriEh5l_ia0j3PuNiUuDihLr",
        currency: "USD",
      }}
    >
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
            <div className="content-main flex justify-between">
              {/* LEFT SIDE - Checkout Form */}
              <div className="left w-1/2">
                <div className="information mt-5">
                  <div className="heading5">Information</div>
                  <div className="form-checkout mt-5">
                    <form>
                      <div className="grid sm:grid-cols-2 gap-4 gap-y-5 flex-wrap">
                        <input
                          className="border-line px-4 py-3 w-full rounded-lg"
                          id="firstName"
                          type="text"
                          placeholder="First Name *"
                          required
                        />
                        <input
                          className="border-line px-4 py-3 w-full rounded-lg"
                          id="lastName"
                          type="text"
                          placeholder="Last Name *"
                          required
                        />
                        <input
                          className="border-line px-4 py-3 w-full rounded-lg"
                          id="email"
                          type="email"
                          placeholder="Email Address *"
                          required
                        />
                        <input
                          className="border-line px-4 py-3 w-full rounded-lg"
                          id="whatsappNumber"
                          type="tel"
                          placeholder="Enter your WhatsApp number"
                          pattern="[0-9]{10,15}"
                        />
                        <input
                          className="border-line px-4 py-3 w-full rounded-lg"
                          id="city"
                          type="text"
                          placeholder="Town/City *"
                          required
                        />

                        <select
                          className="border border-line px-4 py-3 w-full rounded-lg"
                          id="region"
                          defaultValue="default"
                        >
                          <option value="default" disabled>
                            Choose Country/Region
                          </option>
                          <option value="India">India</option>
                          <option value="France">France</option>
                          <option value="Singapore">Singapore</option>
                        </select>
                        <select
                          className="border border-line px-4 py-3 w-full rounded-lg"
                          id="country"
                          defaultValue="default"
                        >
                          <option value="default" disabled>
                            Choose State
                          </option>
                          <option value="India">India</option>
                          <option value="France">France</option>
                          <option value="Singapore">Singapore</option>
                        </select>
                        <input
                          className="border-line px-4 py-3 w-full rounded-lg"
                          id="postal"
                          type="text"
                          placeholder="Postal Code *"
                          required
                        />
                        <textarea
                          className="border border-line px-4 py-3 w-full rounded-lg"
                          id="note"
                          placeholder="Write note..."
                        ></textarea>
                      </div>

                      {/* PAYMENT SECTION */}
                      <div className="payment-block md:mt-10 mt-6">
                        <div className="heading5">Payment Option:</div>
                        <div className="list-payment mt-5">
                          {activePayment === "paypal" && (
                            <div className="type bg-surface p-5 border border-line rounded-lg open">
                              <div className="infor">
                                <div className="text-on-surface-variant1 pt-4 pb-4 text-center">
                                  Pay securely with PayPal. Your order will be
                                  processed immediately.
                                </div>

                                <PayPalButtons
                                  style={{
                                    layout: "vertical",
                                    color: "blue",
                                    shape: "pill",
                                    label: "pay",
                                  }}
                                  createOrder={(data, actions) => {
                                    return actions.order.create({
                                      purchase_units: [
                                        {
                                          amount: {
                                            value: finalAmount.toString(),
                                          },
                                        },
                                      ],
                                    });
                                  }}
                                  onApprove={async (data, actions) => {
                                    const order = await actions.order.capture();
                                    console.log(
                                      "PayPal Order completed:",
                                      order
                                    );
                                    alert("Payment successful!");
                                  }}
                                  onError={(err) => {
                                    console.error(err);
                                    alert("Payment failed. Try again.");
                                  }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - Order Summary */}
              <div className="right w-5/12">
                <div className="checkout-block">
                  <div className="heading5 pb-3">Your Order</div>
                  <div className="list-product-checkout">
                    {cartState.cartArray.length < 1 ? (
                      <p className="text-button pt-3">No product in cart</p>
                    ) : (
                      cartState.cartArray.map((product) => (
                        <div
                          key={product.id}
                          className="item flex items-center justify-between w-full pb-5 border-b border-line gap-6 mt-5"
                        >
                          <div className="bg-img w-[100px] aspect-square flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={product.thumbImage[0]}
                              width={500}
                              height={500}
                              alt={product.name}
                              className="w-full h-full"
                            />
                          </div>
                          <div className="flex items-center justify-between w-full">
                            <div>
                              <div className="name text-title">
                                {product.name}
                              </div>
                              <div className="caption1 text-secondary mt-2">
                                <span className="size capitalize">
                                  {product.selectedSize || product.sizes[0]}
                                </span>
                                <span>/</span>
                                <span className="color capitalize">
                                  {product.selectedColor ||
                                    product.variation[0].color}
                                </span>
                              </div>
                            </div>
                            <div className="text-title">
                              <span className="quantity">
                                {product.quantity}
                              </span>
                              <span className="px-1">x</span>
                              <span>${product.price}.00</span>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="discount-block py-5 flex justify-between border-b border-line">
                    <div className="text-title">Discounts</div>
                    <div className="text-title">-${discount}.00</div>
                  </div>
                  <div className="ship-block py-5 flex justify-between border-b border-line">
                    <div className="text-title">Shipping</div>
                    <div className="text-title">
                      {ship === 0 ? "Free" : `$${ship}.00`}
                    </div>
                  </div>
                  <div className="total-cart-block pt-5 flex justify-between">
                    <div className="heading5">Total</div>
                    <div className="heading5 total-cart">${finalAmount}.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    </PayPalScriptProvider>
  );
};

export default Checkout;
