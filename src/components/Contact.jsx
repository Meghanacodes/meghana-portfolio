import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-container">

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="contact-glow"></div>

          <div className="contact-content">

            <p className="section-label">
              GET IN TOUCH
            </p>

            <h2>
              Let's build something
              <span> great.</span>
            </h2>

            <p className="contact-description">
              Have a project in mind, want to collaborate,
              or just want to say hello? I'd love to hear from you.
            </p>

            <a
              href="mailto:gmeghanareddy12@gmail.com"
              className="contact-email"
            >
              <Mail size={20} />
              gmeghanareddy12@gmail.com
              <ArrowUpRight size={20} />
            </a>

          </div>

       <div className="contact-socials">

  <a
    href="#"
    target="_blank"
    rel="noreferrer"
  >
    <span className="social-letter">in</span>
    LinkedIn
  </a>

  <a
    href="#"
    target="_blank"
    rel="noreferrer"
  >
    <span className="social-letter">GH</span>
    GitHub
  </a>

</div>

        </motion.div>


        <footer className="footer">

          <p>
            © {new Date().getFullYear()} Meghana Reddy
          </p>

          <p>
            Designed & built with React
          </p>

          <a href="#hero">
            Back to top ↑
          </a>

        </footer>

      </div>

    </section>
  );
}

export default Contact;