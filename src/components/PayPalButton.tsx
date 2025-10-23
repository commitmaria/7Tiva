'use client'

import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

interface PayPalButtonProps {
  amount: number                  // total amount to pay
  onSuccess?: (details: any) => void
  onError?: (error: any) => void
  className?: string
}

const PayPalButton: React.FC<PayPalButtonProps> = ({
  amount,
  onSuccess,
  onError,
  className = '',
}) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
        currency: "USD", // always USD
      } as any} // fix TypeScript
    >
      <div className={className}>
        <PayPalButtons
          style={{
            layout: "vertical",
            color: "blue",
            shape: "pill",
            label: "pay",
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: amount.toString(),
                  },
                },
              ],
            })
          }}
          onApprove={async (data, actions) => {
            if (!actions?.order) {
              console.error("PayPal actions.order is undefined")
              return
            }
            const order = await actions.order.capture()
            console.log("PayPal Order completed:", order)
            if (onSuccess) onSuccess(order)
            alert("Payment successful!") // optionally redirect or close modal
          }}
          onError={(err) => {
            console.error("PayPal error:", err)
            if (onError) onError(err)
          }}
        />
      </div>
    </PayPalScriptProvider>
  )
}

export default PayPalButton
