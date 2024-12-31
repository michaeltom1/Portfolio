import { LuLinkedin, LuGithub, LuMail } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { logo } from "../assets/assets";
export const navItems = [
  {
    id: 1,
    pathName: "About",
    path: "#about",
  },
  {
    id: 2,
    pathName: "Projects",
    path: "#projects",
  },
  {
    id: 3,
    pathName: "Contact",
    path: "#contact",
  },
];

export const footerLinks = [
  {
    id: 1,
    Icon: LuMail,
    url: "mailto:mic81070@gmail.com",
  },
  {
    id: 2,
    Icon: LuGithub,
    url: "https://github.com/michaeltom1",
  },
  {
    id: 3,
    Icon: FaXTwitter,
    url: "https://x.com/mic81070",
  },
  {
    id: 4,
    Icon: LuLinkedin,
    url: "https://www.linkedin.com/in/michael-tom-7924a6333/",
  },
];

export const projectItems = [
  {
    id: 1,
    title: "Note App",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 2,
    title: "Todo App",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 3,
    title: "Blog Site",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];
