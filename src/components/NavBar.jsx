import React from "react";
import Logo from "../assets/website/Logo.svg";

const NavBar = () => {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="flex">
                        {/* Logo */}
                        <div>
                            <a href="#" className="flex items-center gap-3">
                                <img src={Logo} alt="Logo" className="w-5" />
                                All Surface Refreshing
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default NavBar;