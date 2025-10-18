"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OrangeButton from "../buttons/OrangeButton";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ArrowRight } from "lucide-react";

type CardProps = {
  href: string;
  label: string;
  title: string;
  description: string;
  gradient: string;
  hoverBorder: string;
  image: string;
};

function InterestedCardItem({
  href,
  label,
  title,
  description,
  gradient,
  hoverBorder,
  image,
}: CardProps) {
  return (
    <Link href={href} className="group w-[240px] block h-full m-3">
      <div
        className={`grid grid-rows-[auto_1fr] h-full rounded-xl relative  overflow-hidden transition-all ${gradient}`}
      >
        <div className="flex justify-between pt-3 md:px-4 md:py-">
          <div>
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <span className="text-xs md:text-base uppercase">{label}</span>
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-medium mb-3 md:mb-5 max-w-[200px]">
              {title}
            </h3>
            <p className="text-xs md:text-xs font-medium max-w-md">
              {description}
            </p>
          </div>
          <svg
            viewBox="0 0 63 63"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white w-10 h-10 md:w-20  md:h-20 opacity-50 group-hover:opacity-100 group-hover:-rotate-45 transition-all ease-out"
          >
            <path d="M32.78 17.64a1.355 1.355 0 10-1.917 1.917L41.126 29.82H13.858a1.36 1.36 0 000 2.718h27.254L30.85 42.801a1.353 1.353 0 00.965 2.31c.36-.001.707-.142.964-.394l12.574-12.573c.256-.256.398-.604.395-.965a1.401 1.401 0 00-.395-.965L32.779 17.641z"></path>
            <path d="M31.53 1.954A29.22 29.22 0 0010.867 51.84c11.411 11.411 29.912 11.411 41.323 0 11.41-11.41 11.41-29.911 0-41.322a29.039 29.039 0 00-20.662-8.564zm0 55.731c-14.613 0-26.507-11.894-26.507-26.506S16.917 4.673 31.53 4.673c14.613 0 26.506 11.894 26.506 26.506S46.142 57.685 31.53 57.685z"></path>
          </svg>
        </div>
        <div className="relative -bottom-6 left-10">
          <Image
            src={image}
            width={200}
            height={200}
            alt="Quadra Security Logo"
            priority
            className=""
          />
        </div>
        <div
          className={`absolute inset-0 border border-transparent rounded-xl transition-all ${hoverBorder}`}
        />
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const menuItems = [
    { page: "Home", url: "/" },
    { page: "Services", url: "/services" },
    { page: "Blogs", url: "/blog" },
    { page: "About Us", url: "/about" },
    { page: "Contact Us", url: "/contact" },
    { page: "Solutions", url: "/solutions/apartments" },
  ];

  const SolutionItems = [
    {
      href: "/solutions/retail",
      label: "IN-DEMAND",
      tittle: "Retail",
      description: "Small shops to Large Coveinience stores we got all covered",
      gradient:
        "bg-gradient-to-b from-[#41a25c]/75 via-[#41a25c]/80 to-[#41a25c]",
      hoverBorder: "group-hover:border-green-300",
      image: "/Navigation/Solutions/retail.png",
    },
    {
      href: "/solutions/bank",
      label: "NECESSITY",
      tittle: "Banks",
      description:
        "Protect every corner and cranny with out specialised systems and devices",
      gradient:
        "bg-gradient-to-b from-[#b48c0c]/75 via-#b48c0c]/80 to-[#b48c0c]",
      hoverBorder: "group-hover:border-yellow-300",
      image: "/Navigation/Solutions/bank.png",
    },
    {
      href: "/solutions/apartments",
      label: "POPULAR",
      tittle: "Apartments",
      description:
        "Understand the optimal methods to secure your apartment premise",
      gradient:
        "bg-gradient-to-b from-[#a939b3]/75 via-[#a939b3]/80 to-[#a939b3]",
      hoverBorder: "group-hover:border-pink-300",
      image: "/Navigation/Solutions/apartment.png",
    },
    {
      href: "/solutions/hotels",
      label: "IN-DEMAND",
      tittle: "Hotels",
      description:
        "Prevent any theft from ever happening at you hotels and restraunts",
      gradient:
        "bg-gradient-to-b from-[#ae3514]/75 via-[#ae3514]/80 to-[#ae3514]",
      hoverBorder: "group-hover:border-red-300",
      image: "/Navigation/Solutions/hotel.png",
    },
  ];

  return (
    <div className="relative">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 border-white/20 shadow-lg backdrop-blur-md bg-[#08156B]/10 z-50">
        {/* LEFT: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/Navigation/WhiteLogo.svg"
              width={200}
              height={60}
              alt="Quadra Security Logo"
              priority
            />
          </Link>
        </div>

        {/* CENTER: Desktop menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="relative cursor-pointer"
              onMouseEnter={() => setActiveMenu(item.page)}
            >
              <Link
                href={item.url}
                className="hover:underline transition text-white"
              >
                {item.page}
              </Link>
            </div>
          ))}
        </div>

        {/* RIGHT: CTA + Hamburger (mobile) */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:block">
            <OrangeButton text="Get Your Quotation Today" />
          </div>

          {/* hamburger toggles to X on mobile */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden text-white z-[60]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <motion.div
              key={mobileOpen ? "close" : "menu"} // unique key for AnimatePresence
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </button>
        </div>
      </nav>

      {/* DESKTOP DROPDOWN (hover) */}
      <AnimatePresence>
        {activeMenu === "Solutions" && (
          <>
            <motion.div
              className="fixed top-[64px] left-0 w-full bottom-0 bg-black bg-opacity-40 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onMouseEnter={() => setActiveMenu(null)}
            />

            <motion.div
              className="fixed top-[64px] left-0 w-full  border-white/20 shadow-lg backdrop-blur-md bg-[#08156B]/10 z-40 flex items-start justify-center text-lg font-semibold"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "60vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="w-full  p-8">
                {/* <div className="text-white text-2xl">{activeMenu}</div> */}

                {activeMenu === "Solutions" && (
                  <div className="w-2/3 flex h-full">
                    {SolutionItems.map((item, idx) => (
                      <div key={idx} className="relative w- cursor-pointer">
                        <InterestedCardItem
                          description={item.description}
                          gradient={item.gradient}
                          hoverBorder={item.hoverBorder}
                          href={item.href}
                          label={item.label}
                          title={item.tittle}
                          image={item.image}
                        />
                      </div>
                    ))}

                    <div className="w-1/3 ml-5 mt-3 pl-4 border-l-2 border-white">
                      <ul className="text-3xl flex flex-col text-white justify-evenly h-[45vh]">
                        <li className="text-lg translate-x-1 text-orange-400">
                          All Solutions
                        </li>
                        <li className="group flex  items-center hover:text-white ">
                          <div className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <ArrowRight />
                          </div>
                          <div className="group-hover:translate-x-2 -translate-x-5 transform transition-transform duration-500">
                            <Link href="/solutions/apartments">Apartments</Link>
                          </div>
                        </li>
                        <li className="group flex  items-center hover:text-white ">
                          <div className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <ArrowRight />
                          </div>
                          <div className="group-hover:translate-x-2 -translate-x-5 transform transition-transform duration-500">
                            <Link href="/solutions/bank">Banks</Link>
                          </div>
                        </li>
                        <li className="group flex  items-center hover:text-white ">
                          <div className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <ArrowRight />
                          </div>
                          <div className="group-hover:translate-x-2 -translate-x-5 transform transition-transform duration-500">
                            <Link href="/solutions/campus">Campuses</Link>
                          </div>
                        </li>
                        <li className="group flex  items-center hover:text-white ">
                          <div className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <ArrowRight />
                          </div>
                          <div className="group-hover:translate-x-2 -translate-x-5 transform transition-transform duration-500">
                            <Link href="/solutions/hotels">Hotels</Link>
                          </div>
                        </li>
                        <li className="group flex  items-center hover:text-white ">
                          <div className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <ArrowRight />
                          </div>
                          <div className="group-hover:translate-x-2 -translate-x-5 transform transition-transform duration-500">
                            <Link href="/solutions/retail">Retail</Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      
      {/* MOBILE SLIDING PANEL */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* side panel */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.38, ease: "easeInOut" }}
              className="fixed -top-[64px] left-0 bottom-0 w-full bg-[#08156B] text-white z-40 flex flex-col p-6"
            >
              {/* menu items */}
              <nav className="flex-1 overflow-auto mt-35">
                <ul className="space-y-3">
                  {menuItems.map((item, idx) => {
                    if (item.page === "Solutions") {
                      // Solutions dropdown
                      return (
                        <li key={idx}>
                          <button
                            className="w-full flex justify-between items-center text-left text-lg font-medium"
                            onClick={() =>
                              setExpandedItem(
                                expandedItem === "Solutions"
                                  ? null
                                  : "Solutions"
                              )
                            }
                          >
                            <span>{item.page}</span>
                            <span className="text-2xl">
                              {expandedItem === "Solutions" ? "−" : "+"}
                            </span>
                          </button>

                          <AnimatePresence>
                            {expandedItem === "Solutions" && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="pl-4 py-2 text-sm text-gray-300 space-y-3">
                                  {SolutionItems.map((sol, sIdx) => (
                                    <Link
                                      key={sIdx}
                                      href={sol.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block hover:text-orange-400 transition"
                                    >
                                      {sol.tittle}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </li>
                      );
                    } else {
                      // Direct redirect for all other menu items
                      return (
                        <li key={idx}>
                          <Link
                            href={item.url}
                            onClick={() => setMobileOpen(false)}
                            className="block text-lg font-medium hover:text-orange-400 transition"
                          >
                            {item.page}
                          </Link>
                        </li>
                      );
                    }
                  })}
                </ul>
              </nav>

              {/* CTA at bottom */}
              <div className="mt-6">
                <OrangeButton text="Get Your Quotation Today" />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
