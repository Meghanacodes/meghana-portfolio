import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  GitBranch,
  Layers
} from "lucide-react";


const skillGroups = [
  {
    title: "Frontend",
    icon: <Code2 />,
    skills: [
      "React.js",
      "Angular",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
      "Bootstrap"
    ]
  },
  {
    title: "Backend & APIs",
    icon: <Server />,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Next.js Route Handlers",
      "LoopBack 4",
      "JWT"
    ]
  },
  {
    title: "Database",
    icon: <Database />,
    skills: [
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "MySQL",
      "SQL"
    ]
  },
  {
    title: "Tools & Libraries",
    icon: <Wrench />,
    skills: [
      "Git",
      "GitHub",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "RxJS",
      "NgRx",
      "Zustand",
      "Angular Material",
      "Shopify",
      "Vercel"
    ]
  }
];


function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="section-container">

        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          SKILLS
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Things I <span>build with.</span>
        </motion.h2>

        <div className="skills-grid">

          {skillGroups.map((group, index) => (

            <motion.div
              className="skill-card"
              key={group.title}
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5
              }}
              whileHover={{
                y: -8
              }}
            >

              <div className="skill-card-header">

                <div className="skill-icon">
                  {group.icon}
                </div>

                <h3>
                  {group.title}
                </h3>

              </div>

              <div className="skill-list">

                {group.skills.map((skill) => (

                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.05
                    }}
                  >
                    {skill}
                  </motion.span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;