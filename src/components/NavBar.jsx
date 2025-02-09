import React from "react";
import Logo from "../assets/website/Logo.svg";

const MenuLinks = [
    {
        id: 1,
        name: "About",
        link: "/#about",
    },
    {
        id: 2,
        name: "Services",
        link: "/#services",
    },
    {
        id: 3,
        name: "Projects",
        link: "/#projects",
    },
    {
        id: 4,
        name: "Contact",
        link: "/#contact",
    }
]

const NavBar = () => {
    return (
        <>
            <nav>
                <div className="container py-3 md:py-2">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div>
                            <a href="#" className="flex items-center gap-3">
                                <img src={Logo} alt="Logo" className="w-5" />
                                <span className="text-2xl sm:text-3xl font-semibold">
                                    All Surface Refreshing
                                </span>
                            </a>
                        </div>
                        {/* Desktop NavLinks Section */}
                        <div className="hidden md:block">
                            <ul className="flex items-center gap-5">
                                {
                                    MenuLinks.map(({id, name, link}) => (
                                        <li key={id} className="cursor-pointer py-4">
                                            <a href={link} className="text-lg font-medium hover:text-primary py-2
                                             hover:border-b-2 hover:border-primary transition duration-300"
                                             >
                                                {name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default NavBar;