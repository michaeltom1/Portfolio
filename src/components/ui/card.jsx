import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";
const Card = ({ title = "", description = "", linkUrl }) => {
  return (
    <>
      <div
        className={
          "rounded-xl p-8 bg-light-card-bg dark:bg-dark-card-bg grid gap-4 text-center shadow-card-shadow shadow-light-card-shadow dark:shadow-dark-card-shadow h-full"
        }
      >
        <h3 className={"font-bold text-4xl"}>{title}</h3>
        <p className={"text-xl font-medium"}>{description}</p>
        <Link to={linkUrl} target="_blank" className={"w-full flex justify-center"}>
          <LuArrowUpRight
            className={"text-4xl rounded-full p-1 border-2 border-border-color"}
          />
        </Link>
      </div>
    </>
  );
};

export default Card;
