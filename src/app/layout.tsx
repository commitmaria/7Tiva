import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "@/styles/styles.scss";
import GlobalProvider from "./GlobalProvider";
import ModalCart from "@/components/Modal/ModalCart";
import ModalWishlist from "@/components/Modal/ModalWishlist";
import ModalSearch from "@/components/Modal/ModalSearch";
import ModalQuickview from "@/components/Modal/ModalQuickview";
import ModalCompare from "@/components/Modal/ModalCompare";
import CountdownTimeType from "@/type/CountdownType";
import { countdownTime } from "@/store/countdownTime";
import { SpeedInsights } from "@vercel/speed-insights/next";

const serverTimeLeft: CountdownTimeType = countdownTime();

const instrument = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopClud | Best Digital Products & Exclusive Deals Online",
  description:
    "Discover high-quality digital products at ShopClud. Enjoy exclusive deals, fast delivery, and secure checkout on software, eBooks, courses, and more.",

  openGraph: {
    title: "ShopClud | Best Digital Products & Exclusive Deals Online",
    description:
      "Discover high-quality digital products at ShopClud. Enjoy exclusive deals, fast delivery, and secure checkout on software, eBooks, courses, and more.",
    url: "https://www.shopclud.com", 
    siteName: "ShopClud",
    images: [
      {
        url: "https://www.shopclud.com/open_graph.jpeg", // replace with your image URL
        width: 1200,
        height: 630,
        alt: "ShopClud Digital Storefront",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ShopClud | Best Digital Products & Exclusive Deals Online",
    description:
      "Discover high-quality digital products at ShopClud. Enjoy exclusive deals, fast delivery, and secure checkout on software, eBooks, courses, and more.",
    images: ["https://www.shopclud.com/open_graph.jpeg"], 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalProvider>
      <html lang="en">
        <body className={instrument.className}>
          <SpeedInsights />
          {children}
          <ModalCart serverTimeLeft={serverTimeLeft} />
          <ModalWishlist />
          <ModalSearch />
          <ModalQuickview />
          <ModalCompare />
        </body>
      </html>
    </GlobalProvider>
  );
}
