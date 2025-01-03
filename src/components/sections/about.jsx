import { useState } from "react";
import Section from "../ui/section";
import { michael, michaelc } from "../../assets/assets";
import { motion } from "framer-motion";

export default function About() {
  const [colored, setColored] = useState(false);
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
            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl w-fit"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              viewport={{ once: true }}
            >
              {colored ? (
                <img
                  src={michaelc}
                  alt="michael tom"
                  className="object-cover size-64 md:size-80"
                  onMouseLeave={() => setColored(false)}
                />
              ) : (
                <img
                  src={michael}
                  alt="michael tom"
                  className="object-cover size-64 md:size-80"
                  onMouseOver={() => setColored(true)}
                />
              )}
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
