import Covered from "@/components/Home/Covered";
import Enough from "@/components/Home/Enough";
import FAQSection from "@/components/Home/FAQ";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Packed from "@/components/Home/Packed";
import Personal from "@/components/Home/Personal";
import Sending from "@/components/Home/Sending";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Sending />
      <Packed />
      <Covered />
      <Enough />
      <FAQSection />
      <Personal />
      <Footer />
    </div>
  );
}
