import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiPostman, SiJavascript } from "react-icons/si";

const tools = [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring", icon: <SiSpringboot /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman /> },
];

export default function Skills() {
  return (
    <section className="py-14 bg-transparent min-h-screen flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        style={{ color: "var(--color-primary)" }}
      >
        Skills & Tools
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-black/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center"
          >
            <div
              className="text-4xl mb-2 font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              {tool.icon}
            </div>
            <p
              className="text-sm font-medium"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {tool.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
