import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Zap,
  Users
} from "lucide-react";

function About() {
  return (
    <section className="about" id="about">

      <div className="section-container">

        {/* Section label */}
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ABOUT ME
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          I build things that
          <span> actually work.</span>
        </motion.h2>

        <div className="about-grid">

          {/* About text */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="about-intro">
              I'm a Full Stack Developer with 3 years of
              experience building modern and scalable web
              applications.
            </p>

            <p>
              I work across the frontend and backend, building
              reusable UI components, integrating APIs and
              developing robust backend services.
            </p>

            <p>
              I enjoy solving technical problems, working with
              Agile teams and continuously improving application
              performance and user experience.
            </p>

            {/* Code card */}
            <div className="about-code">

              <div className="code-dot-container">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
              </div>

              <div className="code-content">

                <span className="code-purple">const</span>{" "}
                <span className="code-white">meghana</span> = {"{"}

                <br />

                &nbsp;&nbsp;
                <span className="code-blue">role</span>:{" "}
                <span className="code-orange">
                  "Full Stack Developer"
                </span>,

                <br />

                &nbsp;&nbsp;
                <span className="code-blue">experience</span>:{" "}
                <span className="code-number">
                  3
                </span>,

                <br />

                &nbsp;&nbsp;
                <span className="code-blue">curious</span>:{" "}
                <span className="code-purple">
                  true
                </span>,

                <br />

                &nbsp;&nbsp;
                <span className="code-blue">alwaysLearning</span>:{" "}
                <span className="code-purple">
                  true
                </span>

                <br />

                {"};"}

              </div>

            </div>

          </motion.div>

          {/* About cards */}
          <div className="about-cards">

            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="about-card-icon">
                <Code2 size={22} />
              </div>

              <strong>3+</strong>

              <span>
                Years Experience
              </span>
            </motion.div>


            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="about-card-icon">
                <Layers size={22} />
              </div>

              <strong>Full Stack</strong>

              <span>
                Frontend + Backend
              </span>
            </motion.div>


            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -8 }}
            >
              <div className="about-card-icon">
                <Zap size={22} />
              </div>

              <strong>API</strong>

              <span>
                Integration & Services
              </span>
            </motion.div>


            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -8 }}
            >
              <div className="about-card-icon">
                <Users size={22} />
              </div>

              <strong>Agile</strong>

              <span>
                Collaboration & Teamwork
              </span>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;