// src/metadata.ts
import type { Metadata } from "next";

const baseUrl = "https://www.shopclud.com";
const defaultImage = `${baseUrl}/images/open_graph.jpeg`;

export const AboutMetadata: Metadata = {
  title: "About Us | ShopClud",
  description:
    "Discover ShopClud’s story, mission, and values. Learn how we provide top digital products and subscriptions at competitive prices worldwide.",
  alternates: { canonical: `${baseUrl}/about` },
  openGraph: {
    title: "About ShopClud",
    description:
      "Learn how ShopClud delivers high-quality digital products and subscription services with great value.",
    url: `${baseUrl}/about`,
    images: [defaultImage],
  },
};

export const ContactMetadata: Metadata = {
  title: "Contact Us | ShopClud",
  description:
    "Have questions or feedback? Get in touch with the ShopClud team for support, business inquiries, or digital product assistance.",
  alternates: { canonical: `${baseUrl}/contact` },
  openGraph: {
    title: "Contact ShopClud",
    description: "Reach out to ShopClud for support or inquiries about our digital products and subscriptions.",
    url: `${baseUrl}/contact`,
    images: [defaultImage],
  },
};

export const ShopMetadata: Metadata = {
  title: "Shop | ShopClud",
  description:
    "Explore our wide range of digital products and subscription plans at unbeatable prices. Find the perfect service for you today.",
  alternates: { canonical: `${baseUrl}/shop` },
  openGraph: {
    title: "ShopClud Store",
    description: "Browse trending digital products and subscription services at ShopClud.",
    url: `${baseUrl}/shop`,
    images: [defaultImage],
  },
};

export const ProductMetadata: Metadata = {
  title: "Product Details | ShopClud",
  description:
    "View detailed information about our digital products and subscriptions. Learn features, pricing, and benefits before purchasing.",
  alternates: { canonical: `${baseUrl}/product` },
  openGraph: {
    title: "ShopClud Product",
    description: "Discover the features and pricing of our digital products and subscription plans.",
    url: `${baseUrl}/product`,
    images: [defaultImage],
  },
};

export const ComingSoonMetadata: Metadata = {
  title: "Coming Soon | ShopClud",
  description:
    "Exciting new digital products and subscription plans are on the way. Stay tuned for upcoming launches and offers.",
  alternates: { canonical: `${baseUrl}/coming-soon` },
  openGraph: {
    title: "Coming Soon to ShopClud",
    description: "We’re preparing amazing new digital products and subscriptions just for you!",
    url: `${baseUrl}/coming-soon`,
    images: [defaultImage],
  },
};

export const FAQsMetadata: Metadata = {
  title: "FAQs | ShopClud",
  description:
    "Get answers to frequently asked questions about ShopClud’s digital products, subscriptions, orders, and more.",
  alternates: { canonical: `${baseUrl}/faqs` },
  openGraph: {
    title: "ShopClud FAQs",
    description: "Find help and answers for your questions about ShopClud services and digital products.",
    url: `${baseUrl}/faqs`,
    images: [defaultImage],
  },
};

export const LoginMetadata: Metadata = {
  title: "Login | ShopClud",
  description:
    "Sign in to your ShopClud account to access purchased digital products, manage subscriptions, and track orders.",
  alternates: { canonical: `${baseUrl}/login` },
  openGraph: {
    title: "Login to ShopClud",
    description: "Access your account for digital products and subscription management.",
    url: `${baseUrl}/login`,
    images: [defaultImage],
  },
};

export const StoreListMetadata: Metadata = {
  title: "Store List | ShopClud",
  description:
    "Browse all ShopClud partner stores and discover exclusive digital products and subscriptions near you.",
  alternates: { canonical: `${baseUrl}/stores` },
  openGraph: {
    title: "ShopClud Store Directory",
    description: "Find featured sellers and ShopClud partner stores offering top digital products.",
    url: `${baseUrl}/stores`,
    images: [defaultImage],
  },
};

export const NotFoundMetadata: Metadata = {
  title: "404 - Page Not Found | ShopClud",
  description:
    "Oops! The page you’re looking for doesn’t exist. Return to the homepage to continue exploring digital products and subscriptions.",
  alternates: { canonical: `${baseUrl}/404` },
  openGraph: {
    title: "Page Not Found",
    description: "The page you requested could not be found on ShopClud.",
    url: `${baseUrl}/404`,
    images: [defaultImage],
  },
};

export const FeedbacksMetadata: Metadata = {
  title: "Customer Feedback | ShopClud",
  description:
    "Read genuine customer reviews and testimonials about their experience with ShopClud’s digital products and subscription services.",
  alternates: { canonical: `${baseUrl}/feedbacks` },
  openGraph: {
    title: "ShopClud Reviews",
    description: "See what customers are saying about ShopClud digital products and subscriptions.",
    url: `${baseUrl}/feedbacks`,
    images: [defaultImage],
  },
};

export const BlogMetadata: Metadata = {
  title: "Blog | ShopClud",
  description:
    "Stay up-to-date with ShopClud’s latest articles, guides, and updates about digital products and subscription services.",
  alternates: { canonical: `${baseUrl}/blog` },
  openGraph: {
    title: "ShopClud Blog",
    description: "Explore tips, trends, and insights on digital products and subscriptions from ShopClud.",
    url: `${baseUrl}/blog`,
    images: [defaultImage],
  },
};
