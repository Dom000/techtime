import Head from "next/head";
import Image from "next/image";
import { Head_C } from "../components/Head";
import Header from "../components/Header/Header";
import FirstSection from "../components/Section1.js/FirstSection";
import SecondSection from "../components/Section1.js/SecondSection";

export default function Home() {
  return (
    <div>
      <Head_C title={"Home"} />
      <Header />
      <FirstSection />
      <SecondSection />
    </div>
  );
}
