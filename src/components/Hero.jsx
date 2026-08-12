import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background glow */}
      <div className="hero-glow"></div>
      <div className="hero-glow hero-glow-two"></div>

      {/* Main content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* Small intro */}
        <motion.p
          className="hero-small-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          HEY, I'M MEGHANA 👋
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          FULL STACK
          <br />
          <span>DEVELOPER.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          I build modern, scalable web applications with
          React.js, JavaScript and Node.js — combining
          clean interfaces with powerful backend services.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >

          {/* View projects */}
          <motion.a
            href="#projects"
            className="primary-button"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <ArrowUpRight size={18} />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/Meghanacodes"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
            whileHover={{
              scale: 1.05,
              borderColor: "#8b5cf6"
            }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>

        </motion.div>

        {/* Technologies */}
        <motion.div
          className="hero-tech"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <span>React.js</span>
          <span>Node.js</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 8, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ArrowDown size={18} />
        <span>Scroll to explore</span>
      </motion.div>

    </section>
  );
}

export default Hero;