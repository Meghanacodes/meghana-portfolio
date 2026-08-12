import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <a href="#hero" className="nav-logo" onClick={closeMenu}>
        M<span>.</span>
      </a>

      {/* Desktop Menu */}
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#tictactoe">Tic-Tac-Toe</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Let's Talk */}
      <a href="#contact" className="nav-contact">
        Let's Talk
      </a>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#tictactoe" onClick={closeMenu}>Tic-Tac-Toe</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;