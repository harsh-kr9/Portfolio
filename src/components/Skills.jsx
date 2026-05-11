import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Database, Github, Terminal, Layers, FileCode } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Programming",
      skills: [
        { name: "Java", level: 90, icon: <FileCode className="text-orange-500" /> },
        { name: "DSA", level: 95, icon: <Terminal className="text-blue-500" /> },
        { name: "OOPs", level: 85, icon: <Cpu className="text-purple-500" /> },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", level: 90, icon: <Globe className="text-red-500" /> },
        { name: "CSS", level: 80, icon: <Layers className="text-blue-400" /> },
        { name: "JavaScript", level: 85, icon: <Code2 className="text-yellow-500" /> },
      ],
    },
    {
      title: "Other Tools & Tech",
      skills: [
        { name: "SQL", level: 75, icon: <Database className="text-indigo-500" /> },
        { name: "Git & GitHub", level: 85, icon: <Github className="text-zinc-800 dark:text-zinc-200" /> },
        { name: "AI/ML Basics", level: 70, icon: <BrainIcon className="text-pink-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-4"
          >
            My Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold mb-4"
          >
            Skills & <span className="text-zinc-500">Technologies</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-card"
            >
              <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-500 rounded-full" />
                {category.title}
              </h4>
              <div className="space-y-8">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                          {skill.icon}
                        </div>
                        <span className="font-semibold text-sm">{skill.name}</span>
                      </div>
                      <span className="text-xs font-bold text-zinc-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BrainIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.74-3.67A2.5 2.5 0 0 1 2 13.5V12a2.5 2.5 0 0 1 2.5-2.5H5" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.74-3.67A2.5 2.5 0 0 0 22 13.5V12a2.5 2.5 0 0 0-2.5-2.5H19" />
  </svg>
);

export default Skills;
