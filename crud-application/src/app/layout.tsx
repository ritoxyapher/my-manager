'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import GlobalStyle from "./global-styles";
import { GlobalContextProvider } from "./context/global";

// typically represents a layout component that you create to define the overall structure or layout of your application.
// It often contains elements that are shared across multiple pages of your application, such as headers, footers, navigation bars, or sidebars.

// In this case, I'm using a global context provider to share data that is universal to multiple components so I don't have to go down the
// component tree and import each one into each nested component. I'm also using this to apply a globalstyles using styled-components lib.

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <GlobalStyle/>
        <GlobalContextProvider>
          <body className={inter.className}>{children}</body>
        </GlobalContextProvider>

    </html>
  );
}
