import { logo } from "../assets/assets";
import { navItems } from "../constants/data";
import { useState, useEffect } from "react";
import { MdBrightness6 } from "react-icons/md";
import { LuMenu, LuX } from "react-icons/lu";

const HeaderWithBall = () => {
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
      } else if (currentValue < lastScroll) {
        setIsVisible(true);
      }
      setLastScroll(currentValue);
    }
    window.addEventListener("scroll", toggleNav);

    return () => removeEventListener("scroll", toggleNav);
  }, [lastScroll]);
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
            <div className={`${menu && "hidden"} md:block`}>
              <a href="/">
                <img src={logo} alt="logo" className="size-12" />
              </a>
            </div>
            <div className={`${!menu ? "hidden md:flex" : "flex"} items-center gap-4`}>
              <ul className="flex items-center gap-4 ">
                {navItems.map((item) => (
                  <li key={item.id} onClick={() => setMenu(false)}>
                    <a
                      href={item.path}
                      className="hover:font-semibold hover:text-light-Name dark:hover:text-dark-Name"
                    >
                      {item.pathName}
                    </a>
                  </li>
                ))}
              </ul>
              <button onClick={handleTheme}>
                <MdBrightness6 className="size-6 text-light-foreground dark:text-dark-foreground" />
              </button>
            </div>
            <div className="text-4xl md:hidden" onClick={() => setMenu(!menu)}>
              {!menu ? <LuMenu /> : <LuX />}
            </div>
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

export default HeaderWithBall;

/*
 <div className="hidden md:flex items-center gap-4">
              <ul className="flex items-center gap-4 ">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.path}
                      className="hover:font-semibold hover:text-light-Name dark:hover:text-dark-Name"
                    >
                      {item.pathName}
                    </a>
                  </li>
                ))}
              </ul>
              <button onClick={handleTheme}>
                <MdBrightness6 className="size-6 text-light-foreground dark:text-dark-foreground" />
              </button>
            </div>
*/
