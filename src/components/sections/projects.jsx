import Section from "../ui/section"
import Card from "../ui/card"
import { projectItems } from "../../constants/data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Section id={"projects"} title={"Projects"}>
      <div
        className={"grid gap-8 my-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"}
      >
        {projectItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            viewport={{once: true}}
          >
            <Card description={item.description} title={item.title} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

