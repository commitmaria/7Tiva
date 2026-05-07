// src/metadata.ts
import type { Metadata } from "next";

const baseUrl = "https://www.3minta.com";
const defaultImage = `${baseUrl}/images/open_graph.jpeg`;

export const AboutMetadata: Metadata = {
  title: "About Us | 3minta",
  description:
    "Discover 3minta’s story, mission, and values. Learn how we provide top digital products and subscriptions at competitive prices worldwide.",
  alternates: { canonical: `${baseUrl}/about` },
  openGraph: {
    title: "About 3minta",
    description:
      "Learn how 3minta delivers high-quality digital products and subscription services with great value.",
    url: `${baseUrl}/about`,
    images: [defaultImage],
  },
};

export const ContactMetadata: Metadata = {
  title: "Contact Us | 3minta",
  description:
    "Have questions or feedback? Get in touch with the 3minta team for support, business inquiries, or digital product assistance.",
  alternates: { canonical: `${baseUrl}/contact` },
  openGraph: {
    title: "Contact 3minta",
    description: "Reach out to 3minta for support or inquiries about our digital products and subscriptions.",
    url: `${baseUrl}/contact`,
    images: [defaultImage],
  },
};

export const ShopMetadata: Metadata = {
  title: "Shop | 3minta",
  description:
    "Explore our wide range of digital products and subscription plans at unbeatable prices. Find the perfect service for you today.",
  alternates: { canonical: `${baseUrl}/shop` },
  openGraph: {
    title: "3minta Store",
    description: "Browse trending digital products and subscription services at 3minta.",
    url: `${baseUrl}/shop`,
    images: [defaultImage],
  },
};

export const ProductMetadata: Metadata = {
  title: "Product Details | 3minta",
  description:
    "View detailed information about our digital products and subscriptions. Learn features, pricing, and benefits before purchasing.",
  alternates: { canonical: `${baseUrl}/product` },
  openGraph: {
    title: "3minta Product",
    description: "Discover the features and pricing of our digital products and subscription plans.",
    url: `${baseUrl}/product`,
    images: [defaultImage],
  },
};

export const ComingSoonMetadata: Metadata = {
  title: "Coming Soon | 3minta",
  description:
    "Exciting new digital products and subscription plans are on the way. Stay tuned for upcoming launches and offers.",
  alternates: { canonical: `${baseUrl}/coming-soon` },
  openGraph: {
    title: "Coming Soon to 3minta",
    description: "We’re preparing amazing new digital products and subscriptions just for you!",
    url: `${baseUrl}/coming-soon`,
    images: [defaultImage],
  },
};

export const FAQsMetadata: Metadata = {
  title: "FAQs | 3minta",
  description:
    "Get answers to frequently asked questions about 3minta’s digital products, subscriptions, orders, and more.",
  alternates: { canonical: `${baseUrl}/faqs` },
  openGraph: {
    title: "3minta FAQs",
    description: "Find help and answers for your questions about 3minta services and digital products.",
    url: `${baseUrl}/faqs`,
    images: [defaultImage],
  },
};

export const LoginMetadata: Metadata = {
  title: "Login | 3minta",
  description:
    "Sign in to your 3minta account to access purchased digital products, manage subscriptions, and track orders.",
  alternates: { canonical: `${baseUrl}/login` },
  openGraph: {
    title: "Login to 3minta",
    description: "Access your account for digital products and subscription management.",
    url: `${baseUrl}/login`,
    images: [defaultImage],
  },
};

export const StoreListMetadata: Metadata = {
  title: "Store List | 3minta",
  description:
    "Browse all 3minta partner stores and discover exclusive digital products and subscriptions near you.",
  alternates: { canonical: `${baseUrl}/stores` },
  openGraph: {
    title: "3minta Store Directory",
    description: "Find featured sellers and 3minta partner stores offering top digital products.",
    url: `${baseUrl}/stores`,
    images: [defaultImage],
  },
};

export const NotFoundMetadata: Metadata = {
  title: "404 - Page Not Found | 3minta",
  description:
    "Oops! The page you’re looking for doesn’t exist. Return to the homepage to continue exploring digital products and subscriptions.",
  alternates: { canonical: `${baseUrl}/404` },
  openGraph: {
    title: "Page Not Found",
    description: "The page you requested could not be found on 3minta.",
    url: `${baseUrl}/404`,
    images: [defaultImage],
  },
};

export const FeedbacksMetadata: Metadata = {
  title: "Customer Feedback | 3minta",
  description:
    "Read genuine customer reviews and testimonials about their experience with 3minta’s digital products and subscription services.",
  alternates: { canonical: `${baseUrl}/feedbacks` },
  openGraph: {
    title: "3minta Reviews",
    description: "See what customers are saying about 3minta digital products and subscriptions.",
    url: `${baseUrl}/feedbacks`,
    images: [defaultImage],
  },
};

export const BlogMetadata: Metadata = {
  title: "Blog | 3minta",
  description:
    "Stay up-to-date with 3minta’s latest articles, guides, and updates about digital products and subscription services.",
  alternates: { canonical: `${baseUrl}/blog` },
  openGraph: {
    title: "3minta Blog",
    description: "Explore tips, trends, and insights on digital products and subscriptions from 3minta.",
    url: `${baseUrl}/blog`,
    images: [defaultImage],
  },
};
