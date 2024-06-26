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
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NextProgress from "next-progress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const routes = [
  {
    name: "Home",
    icon: "🏠",
    link: "/",
  },
  {
    name: "Experience",
    icon: "💻",
    link: "/experience",
  },
  {
    name: "Blog",
    icon: "✍️",
    link: "/blog",
  },
  {
    name: "Reading",
    icon: "📚",
    link: "/reading-list",
  },
  // {
  //   name: "More",
  //   icon: faBars,
  //   link: "/more",
  // },
];

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  useEffect(() => {
    if ("serviceWorker" in navigator) {
    } else {
      console.log("Service Worker is not supported by browser.");
    }
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/mit_logo.png" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="google-site-verification"
          content="a3NZhcrjwIeJdHAHAkjA5itFgW_NYjzXyMZs9vgvOm8"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              /* css */
              `
          * {
            -webkit-tap-highlight-color: transparent;
            font-family: var(--font-inter);
          }
          body {
            overscroll-behavior-y: none;
          }
          .notion-header {
            -webkit-backdrop-filter: saturate(160%) blur(16px);
            backdrop-filter: saturate(160%) blur(16px);
            background: rgba(255, 255, 255, 0.32) !important;
          }
          .notion-frame {
            padding-top: 0px !important;
          }
          .notion-page-scroller {
            min-height: calc(100vh - 10px - var(--notion-header-height)) !important;
          }
          .notion-column {
            padding-left: 2px;
            padding-right: 2px;
          }
        `,
          }}
        />
      </Head>
      <div className={`${inter.variable} flex max-sm:flex-col`}>
        <DesktopSideBar routes={routes} />

        <div
          className="sm:min-w-[calc(100vw - 200px)] h-screen sm:overflow-auto"
          style={{
            // width: 'calc(100vw - 256px)',
            width: "100%",
          }}
        >
          <Component {...pageProps} />
        </div>
        <MobileNavigationBar routes={routes} />
        <NextProgress />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.addEventListener("load", function () {
                    navigator.serviceWorker
                      .register("/service_worker.js")
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
          `,
          }}
        />
      </div>
    </>
  );
}
