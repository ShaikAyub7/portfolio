import "../index.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h3 style={{ paddingLeft: "2rem" }}>
          Shaik <span style={{ color: "darkcyan" }}>Ayub</span>
        </h3>
        <div className="navbar-list">
          <li>Home</li>
          <li>About</li>
          <li>More</li>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
