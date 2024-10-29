import { Metadata } from "next"
import { keywords } from "./keywords"

// TODO : Update the metadata object with your site's information
export const metadata: Metadata = {
  title: {
    default: "Aelluminate Campus",
    template: "%s | Aelluminate Campus",
  },
  keywords: keywords,
  manifest: "https://aelluminate.com/manifest.json",
  generator: "Aelluminate Campus",
  applicationName: "Aelluminate Campus",
  description:
    "Join our community to build the next big thing in tech and be part of the future of computer engineering.",
  openGraph: {
    title: "Aelluminate Campus • Shaping the next generation of computer engineers",
    description:
      "Join our community to build the next big thing in tech and be part of the future of computer engineering.",
    url: "https://aelluminate.com",
    siteName: "Aelluminate",
    images: [
      {
        url: "https://aelluminate.com/og.png",
        width: 1920,
        height: 1080,
        alt: "Aelluminate Open Graph Image",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Aelluminate",
    card: "summary_large_image",
    site: "@aelluminate",
    creator: "@aelluminate",
    creatorId: "1658936245899370503",
    description:
      "Join our community to build the next big thing in tech and be part of the future of computer engineering.",
    images: [
      {
        url: "https://aelluminate.com/og.png",
        width: 1920,
        height: 1080,
        alt: "Aelluminate Open Graph Image",
      },
    ],
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
  },
  alternates: {
    canonical: "https://aelluminate.com",
    languages: {},
  },
  verification: {
    other: {
      me: ["campus@aelluminate.com"],
    },
  },
  appLinks: {
    web: {
      url: "https://aelluminate.com",
      should_fallback: true,
    },
  },
  category: "business",
}
