import React from "react";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";

import Image from "next/image";
import OrangeButton from "../buttons/OrangeButton";

const NavigationMenu: React.FC = () => {
  return (
    <div className="fixed w-full z-[9999] top-0">
      {/* Desktop Navigation */}
      <nav className="hidden w-full md:block font-themeFont text-xs ">
        <div className="flex justify-between [&>*]:px-5 items-center w-full h-auto border-white/20 shadow-xl backdrop-blur-md bg-[#08156B]/10">
          {/* Logo */}
          <div className="aspect-auto h-10">
            <Link href="/">
              <Image
                height={10}
                width={10}
                src="https://www.quadrasecurity.com/logo_white.svg"
                alt="logo"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <ul className="flex [&>li>svg]:text-[6px] [&>li>*]:p-1.5 items-center text-white gap-3">
              {[
                { page: "Home", url: "/" },
                { page: "Services", url: "/services" },
                { page: "Blogs", url: "/blogs" },
                { page: "About Us", url: "/about" },
                { page: "Contact Us", url: "/contact" },
                { page: "Solutions", url: "/solutions/apartments"},
              ].map((item) => (
                <React.Fragment key={item.page}>
                  <li className="transition-transform duration-300 ease-in-out hover:scale-110">
                    <Link href={item.url}>{item.page}</Link>
                  </li>
                </React.Fragment>
              ))}
              <li className="px-0">
                <OrangeButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Placeholder */}
      <nav className="md:hidden">
        <div className="bg-white">{/* Mobile Navigation Content */}</div>
      </nav>
    </div>
  );
};

export default NavigationMenu;
