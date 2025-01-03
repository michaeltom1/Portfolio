import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { teamOfficers } from "../constants/data/data";
import Buttons from "../components/Buttons";
import MissionAndVision from "../components/MissionAndVision";

// Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function About() {
  return (
    <section className="relative bg-gradient-to-br from-[#1a1a2e] via-[#030a1d] to-[#71221b] text-white overflow-hidden">
      {/* Hero Banner with Operational Excellence Theme */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/50 to-[#black/30]/70 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.div
          className="relative z-20 text-center max-w-4xl px-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-[#fdbe33] tracking-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Operational Excellence in Security
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Combining Military Precision with Advanced Intelligence Strategies
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <Buttons
              text="Our Capabilities"
              width="w-48"
              className="mx-auto"
              to="/services"
            />
          </motion.div>
        </motion.div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.1, 0.05, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#fdbe33]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#71121b]/30 rounded-full blur-3xl animate-pulse"></div>
        </motion.div>
      </div>

      {/* Main Content Section */}
      <SectionScaffold
        redText="Who We Are"
        whiteText="Professional Security Solutions"
        introText="A elite security firm combining military-grade training with cutting-edge intelligence strategies."
        className="bg-transparent py-16"
      >
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <motion.h2
                className="text-3xl font-bold text-[#fdbe33]"
                variants={itemVariants}
              >
                Specialized Security Expertise
              </motion.h2>
              <motion.p
                className="text-lg leading-relaxed text-white/90"
                variants={itemVariants}
              >
                Our team comprises highly trained military and police
                intelligence professionals, equipped with advanced surveillance,
                communication, and tactical skills to provide comprehensive
                security solutions across Nigeria.
              </motion.p>
            </div>
            <motion.div
              className="bg-gradient-to-br from-[#16213e] to-[#03080e] p-8 rounded-xl shadow-2xl"
              variants={itemVariants}
            >
              <ul className="space-y-4 text-white/90">
                {[
                  "Advanced Intelligence Gathering",
                  "Strategic Communication Monitoring",
                  "Tactical Logistics Management",
                  "Rapid Response Capabilities",
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{
                      opacity: 0,
                      x: -50,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.5,
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-[#fdbe33]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Team Gallery */}
          <motion.div className="mt-16" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center mb-12 text-[#fdbe33]">
              Our Elite Team
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {teamOfficers.map((officer, index) => (
                <motion.div
                  key={officer.id}
                  className="bg-[#16213e] rounded-xl overflow-hidden shadow-2xl"
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <img
                    src={officer.imgUrl}
                    alt={officer.name || "Team Member"}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="font-semibold text-[#fdbe33]">
                      {officer.name}
                    </h4>
                    <p className="text-sm text-white/70">
                      {officer.role || "Security Professional"}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <MissionAndVision />
        </motion.div>
      </SectionScaffold>
    </section>
  );
}

export default About;
