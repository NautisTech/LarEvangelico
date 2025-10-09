import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Change, Main, Volunteers } from "@/components/site/parceiros";

// @ts-ignore
import './page.css'

export default function Parceiros() {
    return (
        <>
            <Navbar />
            <div data-framer-root="" className="framer-ZRjYO framer-q258S framer-jRQOc framer-uhp5V framer-1y9xiyb"
                style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
                <Main />
                <Volunteers />
                <Change />
            </div>
            <Footer />
        </>
    );
}
