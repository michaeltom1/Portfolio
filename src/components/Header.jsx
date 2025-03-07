import { logo } from "../assets/assets";
import { navItems } from "../constants/data";
import { useState, useEffect } from "react";
import { MdBrightness6 } from "react-icons/md";
import { motion } from "framer-motion";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const savedTheme = localStorage.getItem("theme") || null;
  const [theme, setTheme] = useState(savedTheme);
  const [menu, setMenu] = useState(false);

  // Set initial theme based on system preference or saved theme
  useEffect(() => {
    if (!savedTheme) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, [savedTheme]);

  // Apply theme changes
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  // Toggle theme
  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  //  hide and show nav
  useEffect(() => {
    if (typeof window === "undefined") return;
    function toggleNav() {
      const currentValue = window.scrollY;
      if (currentValue > lastScroll && currentValue > 100) {
        setIsVisible(false);
        setMenu(false);
      } else if (currentValue < lastScroll) {
        setIsVisible(true);
      }
      setLastScroll(currentValue);
    }
    window.addEventListener("scroll", toggleNav);

    return () => removeEventListener("scroll", toggleNav);
  }, [lastScroll]);

  const handleNavLink = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <header
        className={`sticky top-0 w-full p-8 z-2 bg-[hsl(0,0%,100%/0.95)] transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b dark:from-[#00000080] to-transparent/50
          [backdrop-filter:blur(16px)] [--webkit-backdrop-filter:blur(16px)]
          bg-[hsl(0,0%,100%/0.5)]"
        >
          <nav className="w-11/12 md:w-4/5 mx-auto flex items-center justify-between py-2 ">
            <motion.div
              className={`${menu && "hidden"} md:block`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <a href="/">
                <img src={logo} alt="logo" className="size-12" />
              </a>
            </motion.div>
            <div
              className={`${
                !menu ? "hidden md:flex" : "flex"
              } items-center gap-4`}
            >
              <ul className="flex items-center gap-4 ">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    onClick={() => setMenu(false)}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    <span
                      onClick={() => handleNavLink(item.path)}
                      className="hover:font-semibold hover:text-light-Name dark:hover:text-dark-Name cursor-pointer"
                    >
                      {item.pathName}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                onClick={handleTheme}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <MdBrightness6 className="size-6 text-light-foreground dark:text-dark-foreground" />
              </motion.button>
            </div>

            {/* hamburger menu */}
            <motion.div
              className="text-4xl md:hidden"
              onClick={() => setMenu(!menu)}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div
                onClick={() => setMenu(!menu)}
                className={`w-10 h-8 flex flex-col justify-between cursor-pointer transition-transform duration-300 ${
                  menu ? "rotate-90" : ""
                }`}
              >
                <span
                  className={`w-full h-[2px] bg-light-foreground dark:bg-dark-foreground transition-transform duration-300 rounded-md ${
                    menu ? "translate-y-[14px] -rotate-45" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-[2px] bg-light-foreground dark:bg-dark-foreground transition-opacity duration-300 rounded-md ${
                    menu ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-[2px] bg-light-foreground dark:bg-dark-foreground transition-transform duration-300 rounded-md ${
                    menu ? "-translate-y-[14px] rotate-45" : ""
                  }`}
                ></span>
              </div>
            </motion.div>
          </nav>
        </div>
        <div
          className="absolute left-0 right-0 bottom-0 h-[4px] bg-[hsl(0,0%,100%/0.1)]
          translate-y-full
          [backdrop-filter:blur(12px)brightness(0.96)]"
        ></div>
      </header>
    </>
  );
};

export default Header;
