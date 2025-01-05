import { LuLinkedin, LuGithub, LuMail } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

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
    link: "https://takenotes1.vercel.app/",
    title: "Note App",
    description:
      "A Note App built with React and Tailwind CSS. Can be used to add, delete and edit notes.",
  },
  {
    id: 2,
    link: "https://miketodos.vercel.app/",
    title: "Todo App",
    description:
      "A Todo App built with React and Tailwind CSS. Can be used to add, delete and edit tasks. minimalistic design. simple to use and easy to understand.",
  },
  {
    id: 3,
    link: "https://kinatechbrainz.com/",
    title: "Blog Site",
    description:
      "A Blog Site built with React and Tailwind CSS. Can be used to add, delete and edit blogs.",
  },
];

export const appstyle = `font-inter bg-grid-bg dark:bg-grid-bg-dark bg-grid-size bg-light-background dark:bg-dark-background text-light-foreground dark:text-dark-foreground selection:bg-dark-job dark:selection:bg-light-job`;

export const css = `
* {scroll-behavior: smooth;}

@font-face {
  font-family: Inter;
  src: url("/fonts/InterVariable.woff2") format("woff2");
  font-display: swap; font-weight: 100 900;
}

img,
footer,
nav {
  user-select: none;
}
html {
  scrollbar-width: thin;
  scrollbar-color: #cccccc #ffffff;
}
html.dark {
  scrollbar-color: #333333 #0d0f12;
}
`;
