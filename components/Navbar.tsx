"use client";

import { usePathname } from "next/navigation";
import { navbarLink } from "../data";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathName = usePathname();

  const activeIndex = navbarLink.findIndex((link) => link.href === pathName);

  console.log((() => "hello world")());

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 z-[9999] w-full flex justify-center transition-all ease-in-out duration-2 "
    >
      <div
        className="relative w-full max-w-[500px] mx-4 rounded-full 
        bg-white/10 border border-white/20 backdrop-blur-xl p-2"
      >
        <div
          className="absolute top-1 bottom-1 rounded-full 
          bg-blue-600/40 "
        />

        <ul className="relative flex items-center justify-around transition-all">
          {navbarLink.map((link) => {
            const isActive = pathName === link.href;

            return (
              <li
                key={link.id}
                className="flex-1 text-center transition-all duration-500 ease-in-out"
              >
                <a
                  href={link.href}
                  className={`block py-2 text-sm font-medium transition-all duration-600 
                  ${
                    isActive
                      ? "text-white bg-blue-950 rounded-4xl"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
