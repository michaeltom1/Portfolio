import { logo } from "../assets/assets";
import { Link } from "react-router-dom";
import { navItems } from "../constants/data";
import { useState, useEffect } from "react";


export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const [menu, setMenu] = useState(false);
    const savedTheme = localStorage.getItem("theme") || null;
    const [theme, setTheme] = useState(savedTheme);

  //  hide and show nav
  useEffect(() => {
    if (typeof window === "undefined") return;
    function toggleNav() {
      const currentValue = window.scrollY;
      if (currentValue > lastScroll && currentValue > 100) {
        setIsVisible(false);
      } else if (currentValue < lastScroll) {
        setIsVisible(true);
      }
      setLastScroll(currentValue);
    }
    window.addEventListener("scroll", toggleNav);

    return () => removeEventListener("scroll", toggleNav);
  }, [lastScroll]);
  return (
    <header
      className={`fixed w-full py-2 backdrop-blur bg-nav-bg z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-4/5 mx-auto flex items-center justify-between">
        <div>
          <a href="/">
            <img src={logo} alt="logo" className="size-12" />
          </a>
        </div>
        <div>
          <ul className="flex items-center gap-4 ">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.path}>{item.pathName}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
