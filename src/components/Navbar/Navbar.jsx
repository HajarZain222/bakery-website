import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoColor from "../../assets/bakery-color.png";
import logoLight from "../../assets/bakery-light.png";
import "./Navbar.css";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navbarClasses = [
        "navbar",
        "navbar-expand-lg",
        "fixed-top",
        isHomePage ? "navbar-home" : "navbar-inner",
        scrolled ? "navbar-scrolled" : "",
    ].join(" ");

    // Nav links with Blog before Contact
    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/offer", label: "Our Offer" },
        { path: "/gallery", label: "Gallery" },
        {
            label: "Blog",
            dropdown: [
                { path: "/blog", label: "Blog Index" },
                { path: "/simple-post", label: "Simple Post" },
                { path: "/gallery-post", label: "Gallery Post" },
                { path: "/basic-post", label: "Basic Post" },
            ],
        },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <nav className={navbarClasses}>
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img
                        src={
                            isHomePage && !scrolled && window.innerWidth > 991
                                ? logoLight
                                : logoColor
                        }
                        alt="Bakery Logo"
                        width="180"
                        height="50"
                    />
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
                        {navLinks.map((link, idx) => (
                            <li
                                className={`nav-item ${link.dropdown ? "dropdown" : ""}`}
                                key={idx}
                            >
                                {link.dropdown ? (
                                    <>
                                        <NavLink
                                            className="nav-link dropdown-toggle"
                                            to="/blog"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {link.label}
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            {link.dropdown.map((item) => (
                                                <li key={item.path}>
                                                    <NavLink
                                                        className="dropdown-item"
                                                        to={item.path}
                                                    >
                                                        {item.label}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <NavLink
                                        end
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? "active" : ""}`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


