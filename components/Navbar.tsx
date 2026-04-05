import { navbarLink } from "../data";

const Navbar = () => {
  return (
    <nav className="fixed top-3  z-[9999] w-full flex justify-center ">
      <div className="w-full max-w-[500px] mx-4 rounded-full bg-[rgba(28,43,79,0.4)]  text-white backdrop-blur-2xl ">
        <ul className="flex items-center justify-around h-[50px] w-full">
          {navbarLink.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="text-white hover:text-gray-300 transition duration-200"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
