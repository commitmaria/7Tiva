'use client';

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const CheckoutClient = () => {
  const searchParams = useSearchParams();
  const discount = Number(searchParams.get("discount") || 0);
  const ship = Number(searchParams.get("ship") || 0);

  const { cartState } = useCart();
  const productMain = cartState.cartArray[0];

  const totalCart = cartState.cartArray.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const finalAmount = totalCart - discount + ship;

  const [activePayment, setActivePayment] = useState<string>("paypal");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  // Payment handling logic here (PayPal buttons, Buy Now, etc.)

  return (
    <div className="cart-block md:py-20 py-10">
      <div className="container">
        <div className="content-main flex flex-col md:flex-row justify-between">
          {/* RIGHT SIDE - Order Summary */}
          <div className="right w-full md:w-5/12 mt-10 md:mt-0">
            {/* Render order summary */}
            <div className="checkout-block">
              <div className="heading5 pb-3">Your Order</div>
              {cartState.cartArray.map((product) => (
                <div key={product.id} className="item flex items-center justify-between">
                  <div className="bg-img w-[100px] aspect-square flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={product.thumbImage[0]}
                      width={500}
                      height={500}
                      alt={product.name}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="text-title">
                    {product.quantity} x ${product.price}
                  </div>
                </div>
              ))}
              <div className="discount-block py-5 flex justify-between">
                <div>Discounts</div>
                <div>- ${discount}</div>
              </div>
              <div className="ship-block py-5 flex justify-between">
                <div>Shipping</div>
                <div>{ship === 0 ? "Free" : `$${ship}`}</div>
              </div>
              <div className="total-cart-block pt-5 flex justify-between">
                <div>Total</div>
                <div>${finalAmount}</div>
              </div>
            </div>
          </div>

          {/* LEFT SIDE - Checkout Form */}
          <div className="left w-full md:w-1/2">
            <div className="information mt-5">
              <div className="heading5">Information</div>
              <form className="form-checkout mt-5">
                <div className="grid sm:grid-cols-2 gap-4 gap-y-5">
                  <input
                    type="text"
                    placeholder="First Name *"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp (optional)"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutClient;
