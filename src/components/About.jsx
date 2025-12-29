import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "var(--color-primary)" }}
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Hi! I'm Ajith, a passionate Java Full Stack Developer. I build scalable
          web applications using Java, Spring Boot, and React. My focus is on
          creating clean, maintainable code and user-friendly interfaces.
          I enjoy working on real-world projects like MTBS, LMS, and Smart Spend,
          bringing ideas to life from design to deployment.
        </motion.p>
      </div>
    </section>
  );
}
