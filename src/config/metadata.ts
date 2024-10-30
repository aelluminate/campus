import { Metadata } from "next"
import { keywords } from "./keywords"

// TODO : Update the metadata object with your site's information
export const metadata: Metadata = {
  title: {
    default: "Aelluminate Campus",
    template: "%s | Aelluminate Campus",
  },
  keywords: keywords,
  manifest: "https://campus.aelluminate.com/manifest.json",
  generator: "Aelluminate Campus",
  applicationName: "Aelluminate Campus",
  description:
    "Join our community to build the next big thing in tech and be part of the future of computer engineering.",
  openGraph: {
    title: "Aelluminate Campus • Together, we will craete the engineers of tomorrow.",
    description:
      "Join our community to build the next big thing in tech and be part of the future of computer engineering.",
    url: "https://campus.aelluminate.com",
    siteName: "Aelluminate Campus",
    images: [
      {
        url: "https://campus.aelluminate.com/og.png",
        width: 1920,
        height: 1080,
        alt: "Aelluminate Campus Open Graph Image",
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
    title: "Aelluminate Campus",
    card: "summary_large_image",
    site: "@aelluminate",
    creator: "@aelluminate",
    creatorId: "1658936245899370503",
    description:
      "Join our community to build the next big thing in tech and be part of the future of computer engineering.",
    images: [
      {
        url: "https://campus.aelluminate.com/og.png",
        width: 1920,
        height: 1080,
        alt: "Aelluminate Campus Open Graph Image",
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
    canonical: "https://campus.aelluminate.com",
    languages: {},
  },
  verification: {
    other: {
      me: ["campus@aelluminate.com"],
    },
  },
  appLinks: {
    web: {
      url: "https://campus.aelluminate.com",
      should_fallback: true,
    },
  },
  category: "education",
}
