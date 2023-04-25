import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}