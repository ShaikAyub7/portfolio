"use client";

import { usePathname } from "next/navigation";
import { navbarLink } from "../data";

const Navbar = () => {
  const pathName = usePathname();

  const activeIndex = navbarLink.findIndex((link) => link.href === pathName);

  return (
    <nav className="fixed top-4 z-[9999] w-full flex justify-center ">
      <div
        className="relative w-full max-w-[500px] mx-4 rounded-full 
        bg-white/10 border border-white/20 backdrop-blur-xl p-2"
      >
        {/* Sliding Pill */}
        <div
          className="absolute top-1 bottom-1 rounded-full 
          bg-blue-600/40 transition-all duration-300 ease-in-out"
        />

        <ul className="relative flex items-center justify-around transition-all">
          {navbarLink.map((link) => {
            const isActive = pathName === link.href;

            return (
              <li key={link.id} className="flex-1 text-center">
                <a
                  href={link.href}
                  className={`block py-2 text-sm font-medium transition-all duration-200
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
    </nav>
  );
};

export default Navbar;
