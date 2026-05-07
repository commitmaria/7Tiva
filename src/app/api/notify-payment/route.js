import { createClient } from "@supabase/supabase-js";
const nodemailer = require("nodemailer");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, serviceKey);

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, whatsapp, order, amount, cart } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
    }

    const { data, error } = await supabase.from("payments").insert([
      {
        first_name: firstName || null,
        last_name: lastName || null,
        email,
        whatsapp: whatsapp || null,
        order_data: order || null,
        amount: amount || null,
        cart: cart || null,
      },
    ]);

    if (error) console.error("Supabase insert error:", error);

    // --- Define JSON-LD for Gmail "Order placed" card ---
    const jsonLd = {
      "@context": "http://schema.org",
      "@type": "Order",
      "merchant": {
        "@type": "Organization",
        "name": "3minta",
      },
      "orderNumber": order?.id || "N/A",
      "priceCurrency": "USD",
      "price": amount || "N/A",
      "acceptedOffer": cart?.length
        ? cart.map(item => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": item.name,
              "price": item.price,
              "priceCurrency": "USD",
            },
          }))
        : [],
      "orderStatus": "http://schema.org/OrderProcessing",
      "url": `https://www.3minta.com/orders/${order?.id || ""}`,
    };

    if (process.env.SMTP_HOST && process.env.OWNER_EMAIL) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 587),
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        // HTML template with JSON-LD embedded
        const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Order Confirmation - 3minta</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script type="application/ld+json">
${JSON.stringify(jsonLd)}
</script>
<style>
body { font-family: Arial, sans-serif; background: #f9f9f9; margin:0; padding:0; }
.container { max-width:600px; margin:30px auto; background:#fff; border-radius:10px; padding:20px; border:1px solid #eee; }
h1 { color:#4f46e5; text-align:center; }
.order-details { margin:20px 0; padding:15px; background:#f3f4f6; border-radius:8px; }
.order-details p { margin:5px 0; }
.btn { display:inline-block; text-decoration:none; background:#4f46e5; color:#fff; padding:12px 20px; border-radius:6px; margin-top:20px; text-align:center; }
.footer { margin-top:30px; text-align:center; font-size:12px; color:#888; }
</style>
</head>
<body>
<div class="container">
<h1>Thank you for your order!</h1>
<p>Hello <strong>${firstName || ""} ${lastName || ""}</strong>,</p>
<p>We have received your order and it is now being processed. Here are the details:</p>
<div class="order-details">
<p><strong>Order Number:</strong> ${order?.id || "N/A"}</p>
<p><strong>Products:</strong> ${cart?.length ? cart.map(i => i.name).join(", ") : "N/A"}</p>
<p><strong>Amount:</strong> $${amount || "N/A"}</p>
<p><strong>Status:</strong> Processing</p>
</div>
<a href="https://www.3minta.com/orders/${order?.id || ""}" class="btn">View your order</a>
<div class="footer">
© 2025 3minta. All rights reserved.
</div>
</div>
</body>
</html>
`;

        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: process.env.OWNER_EMAIL,
          subject: `New purchase from ${email}`,
          html,
        });

      } catch (mailErr) {
        console.error("Email send failed:", mailErr);
      }
    }

    return new Response(JSON.stringify({ ok: true, supabase: data || null }), { status: 200 });
  } catch (err) {
    console.error("notify-payment error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
