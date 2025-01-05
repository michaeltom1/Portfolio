import { motion } from "framer-motion";

export default function Section({ id, title, children, style, sectionStyle, description }) {
  return (
    <motion.section
      id={id}
      className={sectionStyle}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: "", duration: 1 }}
      viewport={{ once: true }}
    >
      <div className={`w-4/5 mx-auto py-16 ${style}`}>
        <motion.h2
          className={"text-[2rem] md:text-[4rem] text-center font-bold"}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {title}
        </motion.h2>
        {description && (
          <p className="font-bold mb-4 text-light-text-color dark:text-dark-text-color md:text-[2rem] text-center">
            {description}
          </p>
        )}
        {children}
      </div>
    </motion.section>
  );
}
