import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "var(--color-primary)" }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p style={{ color: "var(--color-text-secondary)" }} className="text-lg">
            Feel free to reach out to me via email or connect on LinkedIn:
          </p>

          <p
            className="font-medium"
            style={{ color: "var(--color-primary)" }}
          >
            Email: ajith@example.com
          </p>

          <p
            className="font-medium"
            style={{ color: "var(--color-primary)" }}
          >
            LinkedIn: linkedin.com/in/ajith
          </p>

          <p
            className="text-sm mt-4"
            style={{ color: "var(--color-text-muted)" }}
          >
            I usually reply within 24 hours!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
