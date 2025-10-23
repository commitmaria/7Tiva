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

    // optional email notify
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

        // ==============================
        // START HTML TEMPLATE FOR EMAIL
        // ==============================
        const html = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #f9f9f9;">
            <h2 style="color: #4f46e5; margin-bottom: 20px;">New Purchase Notification</h2>
            <p><strong>Name:</strong> ${firstName || ""} ${lastName || ""}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>WhatsApp:</strong> ${whatsapp || "N/A"}</p>
            <p><strong>Amount:</strong> $${amount || "N/A"}</p>
            <p><strong>Order ID:</strong> ${order?.id || "N/A"}</p>

            <h3 style="margin-top: 20px; color: #4f46e5;">Cart Items:</h3>
            <ul>
              ${(cart || []).map(item => `<li>${item.name} - $${item.price}</li>`).join("")}
            </ul>

            <p style="margin-top: 20px; font-size: 12px; color: #666;">
              This is an automated message from ShopClud.
            </p>
          </div>
        `;
        // ==============================
        // END HTML TEMPLATE FOR EMAIL
        // ==============================

        // ==============================
        // SEND EMAIL WITH HTML TEMPLATE
        // ==============================
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: process.env.OWNER_EMAIL,
          subject: `New purchase from ${email}`,
          html, // use HTML instead of plain text
        });
        // ==============================
        // EMAIL SENT
        // ==============================

      } catch (mailErr) {
        console.error("Email send failed:", mailErr);
      }
    }

    return new Response(JSON.stringify({ ok: true, supabase: data || null }), {
      status: 200,
    });
  } catch (err) {
    console.error("notify-payment error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
