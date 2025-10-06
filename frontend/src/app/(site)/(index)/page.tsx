import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { AboutSection, BlogSection, Causes, Customers, Donate, MainBanner, Newsletter, OurProjects, Testimonial, Volunteers, WhyChooseUs } from "@/components/site/home";

// @ts-ignore
import './page.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <div data-framer-root=""
        className="framer-eiJjF framer-q258S framer-Qg7Vs framer-jRQOc framer-uhp5V framer-oKbxU framer-U1h5s framer-2Vypl framer-RcNjK framer-72rtr7"
        style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
        <div className="framer-hq0l56" data-framer-name="Page Main">
          <MainBanner />
          <AboutSection />
          <Causes />
          <Volunteers />
          <WhyChooseUs />
          <Customers />
          <OurProjects />
          <BlogSection />
          <Donate />
          <Testimonial />
          <Newsletter />
        </div>
      </div>
      <Footer />
    </>
  );
}
