import Head from "next/head";
import Image from "next/image";
import { Head_C } from "../components/Head";
import Header from "../components/Header/Header";
import FifthSection from "../components/Section1.js/FifthSection";
import FirstSection from "../components/Section1.js/FirstSection";
import FourthSection from "../components/Section1.js/FourthSection";
import SecondSection from "../components/Section1.js/SecondSection";
import ThirdSection from "../components/Section1.js/ThirdSection";

export default function Home() {
  return (
    <div>
      <Head_C title={"Home"} />
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      {/* <FifthSection /> */}
    </div>
  );
}
