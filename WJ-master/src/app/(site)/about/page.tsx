import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is About page description",
};

const AboutPage = () => {
  return (
    <main>
      {/* <Breadcrumb pageName="About Us Page" /> */}
      <About />
      <Faq />
      <Testimonials />
      {/* <Team /> */}
    </main>
  );
};

export default AboutPage;
