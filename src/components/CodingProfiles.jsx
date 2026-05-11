import { motion } from "framer-motion";
import { Github, Code, Linkedin } from "lucide-react";

const CodingProfiles = () => {
  const profiles = [
    {
      name: "GitHub",
      icon: <Github />,
      url: "https://github.com/harsh-kr9",
      color: "hover:bg-zinc-800 dark:hover:bg-white dark:hover:text-zinc-950",
      count: "Check Repositories",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      url: "https://www.linkedin.com/in/harsh-kumar-0368a5274?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      color: "hover:bg-blue-600 hover:text-white",
      count: "Professional Network",
    },
    {
      name: "LeetCode",
      icon: <Code />,
      url: "https://leetcode.com/u/harshkr_9/",
      color: "hover:bg-orange-500 hover:text-white",
      count: "DSA Solutions",
    },
  ];

  return (
    <section id="profiles" className="section-padding bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-4"
          >
            Coding Ecosystem
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold mb-4"
          >
            My <span className="text-zinc-500">Profiles</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {profiles.map((profile, i) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group p-8 rounded-3xl glass-card flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 active:scale-95 ${profile.color}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-transparent group-hover:scale-110 transition-all text-zinc-900 dark:text-white group-hover:text-inherit">
                {profile.icon}
              </div>
              <h4 className="font-bold text-lg mb-1">{profile.name}</h4>
              <p className="text-xs font-bold text-zinc-500 group-hover:text-inherit uppercase tracking-widest transition-colors opacity-60 group-hover:opacity-100">
                {profile.count}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
