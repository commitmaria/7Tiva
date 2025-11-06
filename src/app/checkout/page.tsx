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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "Your PayPal id Here",
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
            <div className="content-main flex flex-col md:flex-row justify-between">
              {/* RIGHT SIDE - Order Summary */}
              <div className="right w-full md:w-5/12 mt-10 md:mt-0">
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
                              <span>${product.price}</span>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="discount-block py-5 flex justify-between border-b border-line">
                    <div className="text-title">Discounts</div>
                    <div className="text-title">-${discount}</div>
                  </div>
                  <div className="ship-block py-5 flex justify-between border-b border-line">
                    <div className="text-title">Shipping</div>
                    <div className="text-title">
                      {ship === 0 ? "Free" : `$${ship}`}
                    </div>
                  </div>
                  <div className="total-cart-block pt-5 flex justify-between">
                    <div className="heading5">Total</div>
                    <div className="heading5 total-cart">${finalAmount}</div>
                  </div>
                </div>
              </div>

              {/* LEFT SIDE - Checkout Form */}
              <div className="left w-full md:w-1/2">
                <div className="information mt-5">
                  <div className="heading5">Information</div>
                  <div className="form-checkout mt-5">
                    <form>
                      <div className="grid sm:grid-cols-2 gap-4 gap-y-5 flex-wrap">
                        {/* First Name (required) */}
                        <input
                          className="border-line px-4 py-3 w-full rounded-lg"
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="First Name *"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />

                        {/* Last Name (required) */}
                        <input
                          className="border-line px-4 py-3 w-full rounded-lg"
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Last Name *"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />

                        {/* Email (required) */}
                        <input
                          className="border-line px-4 py-3 w-full rounded-lg"
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email address *"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />

                        {/* WhatsApp (optional) */}
                        <input
                          className="border-line px-4 py-3 w-full rounded-lg"
                          id="whatsappNumber"
                          name="whatsappNumber"
                          type="tel"
                          placeholder="WhatsApp (optional)"
                          pattern="[0-9]{7,15}"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                        />
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
                                    const finalAmount =
                                      totalCart -
                                      Number(discount || 0) +
                                      Number(ship || 0);

                                    return actions.order.create({
                                      intent: "CAPTURE",
                                      purchase_units: [
                                        {
                                          amount: {
                                            currency_code: "USD",
                                            value: finalAmount.toString(),
                                          },
                                        },
                                      ],
                                    });
                                  }}
                                  onApprove={async (data, actions) => {
                                    if (!actions?.order) {
                                      console.error(
                                        "PayPal actions.order is undefined"
                                      );
                                      return;
                                    }

                                    try {
                                      const capture =
                                        await actions.order.capture();
                                      console.log(
                                        "PayPal Order completed:",
                                        capture
                                      );

                                      // ✅ Send all form data to your backend
                                      await fetch("/api/notify-payment", {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                          firstName,
                                          lastName,
                                          email,
                                          whatsapp,
                                          order: capture,
                                          amount:
                                            totalCart -
                                            Number(discount || 0) +
                                            Number(ship || 0),
                                          cart: cartState.cartArray,
                                        }),
                                      });

                                      alert("Payment successful!");
                                    } catch (err) {
                                      console.error(
                                        "Capture / notify error",
                                        err
                                      );
                                      alert(
                                        "Payment captured but an error occurred sending data to server. Check console."
                                      );
                                    }
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
            </div>
          </div>
        </div>
        <Footer />
      </>
    </PayPalScriptProvider>
  );
};

export default Checkout;
