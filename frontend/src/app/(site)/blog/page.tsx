import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Insights } from "@/components/site/blog";

// @ts-ignore
import './page.css'

export default function Causas() {
    return (
        <>
            <Navbar />
            <div data-framer-root="" className="framer-6Donv framer-q258S framer-k7twfa"
                style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
                <Insights />
            </div>
            <Footer />
        </>
    );
}
