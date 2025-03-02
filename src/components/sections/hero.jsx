import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="h-[70vh] md:h-screen flex justify-center flex-col items-start w-4/5 mx-auto">
      <motion.p
        className="text-base font-medium md:text-2xl text-light-job dark:text-dark-job mb-4"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Hello, my name is
      </motion.p>
      <motion.h1
        className="font-extrabold text-light-Name dark:text-dark-Name text-responsive-text leading-[1] mb-4"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        Michael Tom
      </motion.h1>
      <motion.p
        className={
          "text-light-job dark:text-dark-job font-extrabold text-3xl sm:text-responsive-text leading-[1] mb-4"
        }
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        I am a Frontend Web Developer
      </motion.p>
      <motion.p
        className={
          "text-light-text-color dark:text-dark-text-color md:w-4/5 lg:w-3/5 md:font-medium md:text-2xl"
        }
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        I specialize in creating responsive and user-friendly websites.
      </motion.p>
    </main>
  );
}
