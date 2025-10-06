import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { GoogleMaps } from "@/components/site/contactos";

// @ts-ignore
import './page.css'

export default function Home() {
    return (
        <>
            <Navbar />
            <div data-framer-root=""
                className="framer-0p8Q4 framer-q258S framer-jRQOc framer-oGK70 framer-11s0wc4"
                style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
                {/* <MainSection /> */}
                <GoogleMaps />
            </div>
            <Footer />
        </>
    );
}
