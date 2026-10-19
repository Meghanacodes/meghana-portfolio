import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01",
    category: "E-COMMERCE",
    title: "LEGO",
    subtitle: "E-Commerce Platform",
    description:
      "Built and maintained a full-stack e-commerce solution with responsive, production-ready interfaces and seamless backend integration.",
    details:
      "Worked across UI implementation, backend integration, REST APIs, Shopify, testing, deployment and ongoing feature enhancements.",
    technologies: [
      "React.js",
      "Node.js",
      "Shopify",
      "REST APIs",
      "BIK"
    ],
    color: "purple"
  },

  {
    number: "02",
    category: "REAL-TIME SYSTEM",
    title: "Admin Dashboard",
    subtitle: "Real-Time Business Dashboard",
    description:
      "Developed an Admin Dashboard with real-time metrics and complex business logic for better operational and financial insights.",
    details:
      "Integrated WebSocket for real-time communication, improving live data synchronization and user engagement.",
    technologies: [
      "React.js",
      "Node.js",
      "WebSocket",
      "REST APIs"
    ],
    color: "blue"
  },

  {
    number: "03",
    category: "HEALTH TECH",
    title: "Technician Assignment",
    subtitle: "Auto Technician Assignment System",
    description:
      "Developed and integrated an Auto Technician Assignment System and improved the Doctor Visit Workflow.",
    details:
      "Built and optimized REST APIs, improving query handling and restructuring backend logic for better performance.",
    technologies: [
      "React.js",
      "Node.js",
      "REST APIs"
    ],
    color: "pink"
  }, 
  {
    number: "05",
    category: "FULL-STACK SAAS",
    title: "TechFlow",
    subtitle: "Technician Assignment Dashboard",
    description:
      "Built a full-stack dashboard to manage technician assignments, track job statuses, and streamline service operations with persistent database storage.",
    details:
      "Implemented GET, POST, and PATCH REST API endpoints using Next.js Route Handlers and Supabase PostgreSQL. Added job search and filtering, form validation with React Hook Form and Zod, loading skeletons, error handling, and optimistic status updates with rollback using TanStack Query.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "TanStack Query"
    ],
    color: "blue"
  }
];

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);

const flipCard = () => {
  console.log("Before:", flipped);

  setFlipped((prev) => {
    console.log("Previous:", prev);
    console.log("New:", !prev);

    return !prev;
  });
};

  return (
    <motion.div
      className={`project-flip-card project-${project.color}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div
        className={`project-flip-inner ${
          flipped ? "is-flipped" : ""
        }`}
      >

        {/* FRONT */}
        <div className="project-face project-front">

          <div className="project-glow"></div>

          <div className="project-top">
            <span className="project-number">
              {project.number}
            </span>

            <span className="project-category">
              {project.category}
            </span>
          </div>

          <div className="project-front-content">

            <p className="project-eyebrow">
              SELECTED WORK
            </p>

            <h3>{project.title}</h3>

            <h4>{project.subtitle}</h4>

          </div>

          <div className="project-front-bottom">

            <div className="project-tech">
              {project.technologies
                .slice(0, 3)
                .map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
            </div>

            <button
              type="button"
              className="flip-button"
              onClick={flipCard}
            >
              <span>CLICK TO EXPLORE</span>
              <ArrowUpRight size={18} />
            </button>

          </div>

        </div>


        {/* BACK */}
        <div className="project-face project-back">

          <div className="project-back-top">

            <span className="project-number">
              {project.number}
            </span>

            <span className="project-category">
              {project.category}
            </span>

          </div>

          <div className="project-back-content">

            <p className="project-eyebrow">
              WHAT I WORKED ON
            </p>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <p className="project-details">
              {project.details}
            </p>

          </div>

          <div className="project-back-bottom">

            <div className="project-tech">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <button
            type="button"
            className="flip-back-button"
            onClick={() => {
                console.log("BACK BUTTON CLICKED");
                flipCard();
            }}
            >
            ← FLIP BACK
            </button>

          </div>

        </div>

      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="section-container">

        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          SELECTED WORK
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Things I've <span>built.</span>
        </motion.h2>

        <p className="projects-hint">
          Click a project to flip the card and explore.
        </p>

        <div className="projects-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;