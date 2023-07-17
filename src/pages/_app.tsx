import "@/styles/globals.css";
import type { AppProps } from "next/app";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";
import MobileNavigationBar from "@/components/MobileNavigationBar";
import DesktopSideBar from "@/components/DesktopSideBar";
import { Inter } from "next/font/google";
import { faBars,  faHouseChimney, faPenNib } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const routes = [
  {
    name: "Home",
    icon: faHouseChimney,
    link: "/",
  },
  {
    name: "Blog",
    icon: faPenNib,
    link: "/blog",
  },
  // {
  //   name: "More",
  //   icon: faBars,
  //   link: "/more",
  // },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} flex max-sm:flex-col`}>
      <style
        dangerouslySetInnerHTML={{
          __html:
            /* css */
            `
          * {
            -webkit-tap-highlight-color: transparent;
            font-family: var(--font-inter);
          }
        `,
        }}
      />
      <DesktopSideBar routes={routes} />
      <div
        className="sm:w-[calc(100vw - 256px)]"
        style={{
          // width: 'calc(100vw - 256px)',
          width: "100%",
          overflow: "auto",
          height: "100vh",
        }}
      >
        <Component {...pageProps} />
      </div>
      <MobileNavigationBar routes={routes} />
    </div>
  );
}
