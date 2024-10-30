import React from "react"
import { Metadata } from "next"

/* Dependencies */
import NextTopLoader from "nextjs-toploader"

/* Global styles & fonts */
import "../assets/globals.css"
import { lora, lexendDeca } from "@/utils/fonts"

/* Metadata for the global layout */
import { metadata as SiteMetadata } from "@/config/metadata"
export const metadata: Metadata = SiteMetadata

/* Components */
import { SideNav } from "@/components/sidenav/_index"
import { Footer } from "@/components/footer/_index"
import Breadcrumbs from "@/components/others/breadcrums"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={[lora.variable, lexendDeca.variable].join(" ")}>
      <body className={`bg-neutral-900 font-lexend-deca font-light text-slate-50 antialiased`}>
        <NextTopLoader showSpinner={false} color="#eefeff" easing="ease" />
        <div className="flex h-screen">
          <SideNav />
          <div className="flex h-full flex-grow flex-col">
            <Breadcrumbs />
            <div className="relative h-full flex-grow overflow-auto">
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
