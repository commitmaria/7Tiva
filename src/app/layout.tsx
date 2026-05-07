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
import { Analytics } from "@vercel/analytics/next";

const serverTimeLeft: CountdownTimeType = countdownTime();

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});


export const metadata: Metadata = {
  title: "3minta | Best Digital Products & Exclusive Deals Online",
  description:
    "Discover high-quality digital products at 3minta. Enjoy exclusive deals, fast delivery, and secure checkout on SofTools, eBooks, courses, and more.",

  openGraph: {
    title: "3minta | Best Digital Products & Exclusive Deals Online",
    description:
      "Discover high-quality digital products at 3minta. Enjoy exclusive deals, fast delivery, and secure checkout on SofTools, eBooks, courses, and more.",
    url: "https://www.3minta.com",
    siteName: "3minta",
    images: [
      {
        url: "https://www.3minta.com/open_graph.jpeg", // replace with your image URL
        width: 1200,
        height: 630,
        alt: "3minta Digital Storefront",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "3minta | Best Digital Products & Exclusive Deals Online",
    description:
      "Discover high-quality digital products at 3minta. Enjoy exclusive deals, fast delivery, and secure checkout on SofTools, eBooks, courses, and more.",
    images: ["https://www.3minta.com/open_graph.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalProvider>
      <html lang="en" className={instrument.variable}>
        <head>
          {/* Google */}
          <meta
            name="google-site-verification"
            content="JeGQcFab2tmIIePoPCy83hGJ07e_APE8_hJJbx0b3XU"
          />
          {/* Bing / Microsoft */}
          <meta
            name="msvalidate.01"
            content="57363A009272A35D9667EFBA52D8EDD3"
          />
          {/* Yandex */}
          <meta name="yandex-verification" content="e14503bce1b56e8a" />
        </head>
        <body className={instrument.className}>        
          {children}
          <SpeedInsights />
          <Analytics />
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
