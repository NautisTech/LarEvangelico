import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { MainBanner, MainContent, Causes } from "@/components/site/causas/especifica";

// @ts-ignore
import './page.css'

export default function CausaEspecifica() {
    return (
        <>
            <Navbar />
            <div data-framer-root="" className="framer-NTQ6f framer-q258S framer-uhp5V framer-Qg7Vs framer-oGK70 framer-RcNjK framer-u5oc0 framer-jRQOc framer-4n4vX framer-yjG4E framer-U1h5s framer-utjgut"
                style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
                <MainBanner />
                <MainContent />
                <Causes />
            </div>
            <Footer />
        </>
    );
}
