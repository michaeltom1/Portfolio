import { logo } from "../assets/assets";
import { footerLinks } from "../constants/data";
import Button from "./ui/button";
import { LuStar } from "react-icons/lu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-light-background dark:bg-dark-background py-4 border-t-2 border-light-border-color dark:border-dark-border-color">
      <div className={"w-4/5 mx-auto 900:flex justify-between items-center"}>
        <div
          className={
            "flex flex-col text-center gap-4 mb-4 sm:mb-0 items-center text-xs 900:flex-row"
          }
        >
          <a href="#">
            <img src={logo} alt="Logo" className={"size-12"} />
          </a>
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            Designed and Developed by Michael Tom
          </motion.p>
          <Link to={"https://github.com/michaeltom1/portfolio"} target="_blank">
            <LuStar className="text-light-text-color dark:text-dark-text-color" />
          </Link>
        </div>
        <div className={"flex items-center justify-center gap-4"}>
          {footerLinks.map((item) => (
            <Button key={item.id} href={item.url} className={"footerLink"}>
              <item.Icon fontSize={22} />
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
