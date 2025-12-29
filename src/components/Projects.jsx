import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="py-14 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "var(--color-primary)" }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-black/20 rounded-2xl p-6 border"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "var(--color-primary)" }}
              >
                {project.title}
              </h3>

              <p
                className="text-sm mb-4"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.3)",
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                <ul
                  className="text-sm list-disc list-inside space-y-1"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
