import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import profile from "../assets/NewProfile.jpg";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 px-6"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT – Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative w-60 h-60 md:w-72 md:h-72">

            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-80"
              style={{
                background:
                  "radial-gradient(circle, var(--color-primary), transparent 70%)",
              }}
            />

            {/* Image */}
            <div
              className="relative w-full h-full rounded-full p-1 backdrop-blur-xl bg-white/10 border shadow-xl"
              style={{ borderColor: "var(--color-primary)" }}
            >
              <img
                src={profile}
                alt="Ajith Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT – Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span style={{ color: "var(--color-primary)" }}>
              Ajith
            </span>
          </h1>

          {/* Role */}
          <h2
            className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Java Full Stack Developer
          </h2>

          {/* About */}
          <p
            className="mt-5 max-w-xl mx-auto md:mx-0"
            style={{ color: "var(--color-text-muted)" }}
          >
            Java Full Stack Developer with hands-on experience in building
            secure, scalable web applications using Spring Boot and modern
            frontend technologies. Developed real-world projects including
            Movie Ticket Booking System, Learning Management System, and
            Smart Spend Expense Tracker.
          </p>

          {/* Icons + Resume */}
          <div className="mt-8 flex items-center gap-6 justify-center md:justify-start">

            <a
              href="https://linkedin.com/in/ajith-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:scale-110 transition"
              style={{ color: "var(--color-primary)" }}
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Ajith19-fsd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:scale-110 transition"
              style={{ color: "var(--color-primary)" }}
            >
              <FaGithub />
            </a>

            <a
              href="mailto:ajithraja1904@gmail.com"
              className="text-2xl hover:scale-110 transition"
              style={{ color: "var(--color-primary)" }}
            >
              <FaEnvelope />
            </a>

            <span className="h-6 w-px bg-white/30" />

            {/* ✅ Resume Download */}
            <a
              href="/Ajith_Resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition hover:scale-105"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "#000",
                fontSize: "1.05rem",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "var(--color-primary-hover)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "var(--color-primary)")
              }
            >
              <FaDownload className="text-lg" />
              Resume
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
