import Header from "@/components/Header";
import Hero from "@/app/Hero";
import ButtonGradient from "@/assets/svg/ButtonGradient";
import Footer from "@/components/Footer";
import Services from "@/app/Services";
import { SITE_SCHEMA_SCRIPT } from "@/constants";

export default function Home() {
  return (
    <>
      <script
        type={"application/ld+json"}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_SCHEMA_SCRIPT) }}
      />
      <div className={"pt-[4.75rem] lg:pt-[5.25rem]"}>
        <Header />
        <Hero />
        <Services />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}
