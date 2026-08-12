import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    number: "01",
    company: "CloudRight Pvt Ltd",
    role: "Full Stack Developer",
    type: "E-COMMERCE",

    description:
      "Developed and maintained full-stack e-commerce solutions using React.js, Node.js and Shopify, translating UI/UX designs into responsive, production-ready interfaces.",

    highlights: [
      "Built responsive production-ready interfaces",
      "Integrated backend services",
      "Built RESTful APIs using Node.js",
      "Integrated third-party services including BIK",
      "Worked across the development lifecycle"
    ],

    technologies: [
      "React.js",
      "Node.js",
      "Shopify",
      "REST APIs",
      "BIK"
    ]
  },

  {
    number: "02",
    company: "Ashwa Health Tech Pvt Ltd",
    role: "Full Stack Developer",
    type: "HEALTH TECH",

    description:
      "Developed and integrated an Auto Technician Assignment System and improved the Doctor Visit Workflow using React and backend services.",

    highlights: [
      "Developed Auto Technician Assignment System",
      "Improved Doctor Visit Workflow",
      "Built and optimized REST APIs",
      "Improved backend query handling",
      "Reduced AWS load through backend restructuring"
    ],

    technologies: [
      "React.js",
      "Node.js",
      "REST APIs",
      "AWS"
    ]
  },

  {
    number: "03",
    company: "Agiledgesolutions Pvt Ltd",
    role: "Full Stack Developer",
    type: "REAL-TIME SYSTEMS",

    description:
      "Developed an Admin Dashboard with real-time metrics and complex business logic, enabling better operational and financial insights.",

    highlights: [
      "Developed Admin Dashboard",
      "Implemented real-time metrics",
      "Worked with complex business logic",
      "Integrated WebSocket",
      "Improved live data synchronization"
    ],

    technologies: [
      "React.js",
      "Node.js",
      "WebSocket",
      "REST APIs"
    ]
  }
];

function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="section-container">

        {/* Section label */}
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          EXPERIENCE
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Where I've <span>worked.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="experience-timeline">

          <div className="experience-line"></div>

          {experiences.map((experience, index) => (

            <motion.article
              className="experience-item"
              key={experience.company}
              initial={{
                opacity: 0,
                y: 60
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                amount: 0.2
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1
              }}
            >

              {/* Timeline dot */}
              <div className="experience-dot">
                <Briefcase size={17} />
              </div>

              {/* Card */}
              <div className="experience-card">

                <div className="experience-card-top">

                  <span className="experience-number">
                    {experience.number}
                  </span>

                  <span className="experience-type">
                    {experience.type}
                  </span>

                </div>

                <div className="experience-main">

                  <h3>
                    {experience.company}
                  </h3>

                  <h4>
                    {experience.role}
                  </h4>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <ul className="experience-highlights">

                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>
                        {highlight}
                      </li>
                    ))}

                  </ul>

                  {/* Technologies */}
                  <div className="experience-tech">

                    {experience.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

                <div className="experience-arrow">
                  <ArrowUpRight size={20} />
                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;