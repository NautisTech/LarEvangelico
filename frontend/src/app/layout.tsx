import type { Metadata } from "next";

// @ts-ignore
import "@fontsource/rufina/400.css";
// @ts-ignore 
import "@fontsource/rufina/700.css";
// @ts-ignore
import "@fontsource/urbanist/400.css";
// @ts-ignore
import "@fontsource/urbanist/600.css";
// @ts-ignore
import "@fontsource/urbanist/700.css";
// @ts-ignore
import "@fontsource/inter/400.css";
// @ts-ignore
import "@fontsource/inter/600.css";
// @ts-ignore
import "@fontsource/inter/700.css";

import { AppProvider } from "@/context";

export const metadata: Metadata = {
  title: "Lar Evangélico",
  description: "Website do Lar Evangélico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <AppProvider>
          {children}
        </AppProvider>
        <div id="svg-templates"
          style={{ position: "absolute", overflow: "hidden", bottom: 0, left: 0, width: 0, height: 0, zIndex: 0, contain: "strict" }}
          aria-hidden="true">
          <svg viewBox="0 0 594 13" id="svg11269819673">
            <path d="M 3.625 3.581 C 103.196 3.581 202.581 5.813 302.06 7.991 C 398.061 10.092 494.374 8.994 590.446 8.994"
              fill="transparent" strokeWidth="6.07"
              stroke="var(--token-065bffec-4ac7-4625-aced-acd0f0a75d90, rgb(254, 206, 102))" strokeLinecap="round"
              strokeMiterlimit="10"></path>
          </svg>
          <svg viewBox="0 0 16 16" id="svg9431982782">
            <path d="M 15.5 8 L 4.25 14.495 L 4.25 1.505 Z"
              fill="var(--token-f1712222-c010-4358-b082-9f76dbcbd998, rgb(113, 34, 11))"></path>
          </svg>
          <svg viewBox="0 0 297 7" id="svg9271376661">
            <path d="M 2.315 2.313 C 51.852 2.313 101.296 3.515 150.786 4.688 C 198.546 5.819 246.462 5.227 294.257 5.227"
              fill="transparent" strokeWidth="3"
              stroke="var(--token-065bffec-4ac7-4625-aced-acd0f0a75d90, rgb(254, 206, 102))" strokeLinecap="round"
              strokeMiterlimit="10"></path>
          </svg>
          <svg viewBox="0 0 11 11" id="svg9308410346">
            <path d="M 10.656 5.5 L 2.922 9.965 L 2.922 1.035 Z"
              fill="var(--token-f1712222-c010-4358-b082-9f76dbcbd998, rgb(113, 34, 11))"></path>
          </svg>
        </div>
      </body>
    </html >
  );
}
