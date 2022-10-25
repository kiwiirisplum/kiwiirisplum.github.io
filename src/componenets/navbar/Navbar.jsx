import "./navbar.scss";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const hamburgerIcon = <HiOutlineMenu className="hamburger" onClick={() => setOpenMenu(!openMenu)} />
  const closeIcon = <AiOutlineClose className="hamburger" onClick={() => setOpenMenu(!openMenu)} />

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <Link to="/" alt="shan's website" className="logo">
            Shan's site💜</Link>
        </div>

        <div className="right">
          <nav>
            <ul className={openMenu ? 'links active' : 'links'}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Me</Link>
              </li>
              <li>
                <Link to="/project">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {openMenu ? hamburgerIcon : closeIcon}
    </div>
  )
}

export default Navbar;

