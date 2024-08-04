import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";

import DockComponent from "./components/DockComponent";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kevin Zhu",
  description: "My Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className=""><DockComponent /></div> */}
        <main className="">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
