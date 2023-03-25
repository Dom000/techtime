import "../styles/globals.css";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplayRegular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplayExtralight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplayLight.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplayMedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplaySemibold.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/ClashDisplayBold.woff",
      weight: "700",
      style: "italic",
    },
  ],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
