import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

import { TopSection, PositiveImpact, Difference, Mission, Volunteers } from "@/components/site/about-us";

// @ts-ignore
import './page.css'

export default function SobreNos() {
    return (
        <>
            <Navbar />
            <div data-framer-root=""
                className="framer-j4WzQ framer-q258S framer-U1h5s framer-jRQOc framer-uhp5V framer-oGK70 framer-Qg7Vs framer-1cn8rbi"
                style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
                <TopSection />
                <PositiveImpact />
                <Difference />
                <Mission />
                <Volunteers />
            </div>
            <Footer />
        </>
    );
}
