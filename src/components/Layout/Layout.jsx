import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout() {
    const { pathname } = useLocation();
    const isHomePage = pathname === "/";

    return (
        <>
        <Navbar />
        <main className={`page-content ${isHomePage ? "home" : "inner"}`}>
            <Outlet />
        </main>
        <Footer />
        </>
    );
}

export default Layout;



