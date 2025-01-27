import { navbarLink } from "../data";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul className="navbar-list">
          {navbarLink.map((link) => (
            <li key={link.id} className="navbar-item">
              <a href={link.href} style={{ color: "#fff" }}>
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
