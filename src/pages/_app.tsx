import "@/styles/globals.css";
import type { AppProps } from "next/app";

import "@fortawesome/fontawesome-svg-core/styles.css";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";
import MobileNavigationBar from "@/components/MobileNavigationBar";
import DesktopSideBar from "@/components/DesktopSideBar";
import { Inter } from "next/font/google";
import {
  faBars,
  faHouseChimney,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { useEffect } from "react";
import Script from "next/script";

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
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      
    } else {
      console.log("Service Worker is not supported by browser.");
    }
  }, []);
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href="./mit_logo.png"
          sizes="any"
        />
        <link rel="manifest" href="./manifest.json" />
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
        <script dangerouslySetInnerHTML={{
          __html: `

          window.addEventListener("load", function () {
            navigator.serviceWorker
              .register("./service_worker.js")
              .then(
                function (registration) {
                  console.log("Worker registration successful", registration.scope);
                },
                function (err) {
                  console.log("Worker registration failed", err);
                }
              )
              .catch(function (err) {
                console.log(err);
              });
          });
          `
        }} />
        {/* <Script>
          {`
            window.addEventListener("load", function () {
              navigator.serviceWorker
                .register("./service_worker.js")
                .then(
                  function (registration) {
                    console.log("Worker registration successful", registration.scope);
                  },
                  function (err) {
                    console.log("Worker registration failed", err);
                  }
                )
                .catch(function (err) {
                  console.log(err);
                });
            });
          `}
        </Script> */}
      </Head>
      <div className={`${inter.variable} flex max-sm:flex-col`}>
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
    </>
  );
}
