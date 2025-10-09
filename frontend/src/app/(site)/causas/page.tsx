import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Main, Insights } from "@/components/site/causas";

// @ts-ignore
import './page.css'

export default function Causas() {
    return (
        <>
            <Navbar />
            <div data-framer-root="" className="framer-Oz8yq framer-q258S framer-jRQOc framer-uhp5V framer-i8u7wv"
                style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
                <Main />
                <Insights />
            </div>
            <Footer />
        </>
    );
}
