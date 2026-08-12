import { motion } from "framer-motion";
import { GraduationCap, MessageCircle, Lightbulb, Users, Brain } from "lucide-react";

const softSkills = [
  {
    icon: <Users size={20} />,
    title: "Collaboration"
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Creative"
  },
  {
    icon: <MessageCircle size={20} />,
    title: "Communication"
  },
  {
    icon: <Brain size={20} />,
    title: "Critical Thinking"
  }
];

const languages = [
  "English",
  "Hindi",
  "Telugu",
  "Kannada"
];

function Education() {
  return (
    <section className="education" id="education">

      <div className="section-container">

        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          BEYOND CODE
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          A little more <span>about me.</span>
        </motion.h2>

        <div className="education-grid">

          {/* Education */}
          <motion.div
            className="education-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="education-icon">
              <GraduationCap size={26} />
            </div>

            <p className="education-label">
              EDUCATION
            </p>

            <h3>
              Master of Computer Application
            </h3>

            <h4>
              PES University
            </h4>

            <span className="education-location">
              Bangalore
            </span>

            <div className="education-line"></div>

            <span className="education-year">
              2020 — 2022
            </span>

          </motion.div>


          {/* Soft Skills */}
          <motion.div
            className="soft-skills-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="education-label">
              HOW I WORK
            </p>

            <h3>
              Beyond the code.
            </h3>

            <div className="soft-skills-grid">

              {softSkills.map((skill) => (

                <div
                  className="soft-skill"
                  key={skill.title}
                >
                  <div className="soft-skill-icon">
                    {skill.icon}
                  </div>

                  <span>
                    {skill.title}
                  </span>
                </div>

              ))}

            </div>

          </motion.div>

        </div>


        {/* Languages */}

        <motion.div
          className="languages-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="education-label">
            LANGUAGES
          </p>

          <div className="languages-list">

            {languages.map((language, index) => (

              <motion.div
                className="language-pill"
                key={language}
                whileHover={{
                  y: -4,
                  scale: 1.03
                }}
              >
                <span className="language-number">
                  0{index + 1}
                </span>

                {language}
              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Education;