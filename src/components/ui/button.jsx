import { LuSendHorizontal } from "react-icons/lu";
import { Link } from "react-router-dom";

const Button = ({ children, noLink, href = "#", Icon, className }) => {
  return (
    <>
      {!noLink ? (
        <Link
          to={href}
          className={`${"bg-white text-[#0a0a0a] w-fit p-4 rounded-lg text-4 font-bold select-none"} ${className} ${
            Icon && "flex items-center justify-center gap-4"
          }`}
          target="_blank"
        >
          {children} {Icon && <LuSendHorizontal />}
        </Link>
      ) : (
        <button className={`${"btn"} ${className}`}>{children}</button>
      )}
    </>
  );
};

export default Button;
