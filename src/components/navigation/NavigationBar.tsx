"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OrangeButton from "../buttons/OrangeButton";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
              onMouseLeave={() => setActiveMenu(null)}
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
        {activeMenu && (
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
              className="fixed top-[64px] left-0 w-full border-white/20 shadow-lg backdrop-blur-md bg-[#08156B]/10 z-40 flex items-start justify-center text-lg font-semibold"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "40vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="w-full max-w-6xl p-8">
                <div className="text-white text-2xl">{activeMenu}</div>
                <div className="mt-4 text-sm text-gray-200">
                  {activeMenu} Section Content — put cards, links, or previews
                  here.
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MOBILE SLIDING PANEL */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* backdrop for mobile panel */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.38, ease: "easeInOut" }}
              className="fixed -top-[64px] left-0 bottom-0 w-full bg-[#08156B] text-white z-40 flex flex-col p-6"
            >
              {/* menu items with expand */}
              <nav className="flex-1  overflow-auto mt-40">
                <ul className="space-y-4">
                  {menuItems.map((item, idx) => (
                    <li key={idx}>
                      <button
                        className="w-full flex justify-between items-center text-left text-lg font-medium"
                        onClick={() =>
                          setExpandedItem(
                            expandedItem === item.page ? null : item.page
                          )
                        }
                      >
                        <span>{item.page}</span>
                        <span className="text-2xl">
                          {expandedItem === item.page ? "−" : "+"}
                        </span>
                      </button>

                      <AnimatePresence>
                        {expandedItem === item.page && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28 }}
                          >
                            <div className="pl-4 py-2 text-sm text-gray-300">
                              <div className="mb-2">
                                {item.page} Section Content
                              </div>
                              <Link
                                href={item.url}
                                onClick={() => setMobileOpen(false)}
                                className="inline-block underline text-sm"
                              >
                                Go to {item.page}
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  ))}
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
