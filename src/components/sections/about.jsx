import { michael } from "../../assets/assets";
import Section from "../ui/section";
export default function About() {
  return (
    <>
      <Section
        id={"about"}
        title={"About Me"}
        sectionStyle={"bg-light-background dark:bg-dark-background"}
      >
        <div
          className={
            "flex flex-col gap-4 py-8 md:grid grid-cols-2 text-lg justify-between"
          }
        >
          <div>
            <p
              className={
                "text-light-text-color text-opacity-100 dark:text-dark-text-color md:text-lg"
              }
            >
              Hi I&#39;m Michael, a passionate web developer. I have always been
              interested in technology and computers. My journey began in 2023
              when I discovered Python, which sparked my transition into web
              development. Ever since then, I have been deeply involved in
              building websites.
              <br />
              <br />I combine technical expertise with creative problem-solving
              to build responsive, user-centric websites that make an impact.
              Currently focused on expanding my skills in modern web
              technologies while delivering high-quality solutions for clients.
            </p>
          </div>
          <div>
            <img
              src={michael}
              alt="michael tom"
              className={"rounded-2xl object-cover size-64 md:size-80"}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
