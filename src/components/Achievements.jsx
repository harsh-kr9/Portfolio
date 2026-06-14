import { motion } from "framer-motion";
import { Trophy, Star, Lightbulb, TrendingUp, Users } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="text-yellow-500" />,
      title: "DSA Excellence",
      description: "Consistent practice and solving complex problems on LeetCode and HackerRank.",
    },
    {
      icon: <Trophy className="text-yellow-500" />,
      title: "Hult Prize Finalist",
      description: "Finalist in the prestigious Hult Prize competition, conducted by IIC TMSL.",
    },
    {
      icon: <Lightbulb className="text-purple-500" />,
      title: "AI/ML Enthusiast",
      description: "Exploring and building projects in Computer Vision and Machine Learning.",
    },
    {
      icon: <TrendingUp className="text-green-500" />,
      title: "Academic Performance",
      description: "Maintaining strong GPA and consistent learning throughout the semesters.",
    },
    {
      icon: <Star className="text-pink-500" />,
      title: "Fast Learner",
      description: "Quickly grasping and implementing new tech stacks and methodologies.",
    },
  ];

  return (
    <section id="achievements" className="section-padding bg-zinc-50/30 dark:bg-zinc-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-4"
            >
              Milestones
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold mb-8 leading-tight"
            >
              Key Achievements & <span className="text-zinc-500">Highlights</span>
            </motion.h3>
            <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
              Throughout my academic journey, I've focused on practical application of knowledge, 
              competitive programming, and building impactful projects.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl glass-card border-none bg-white dark:bg-zinc-900 group transition-all duration-500 hover:bg-zinc-950 dark:hover:bg-white"
              >
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-transparent transition-all">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-white dark:group-hover:text-zinc-950">
                  {item.title}
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed group-hover:text-white/70 dark:group-hover:text-zinc-950/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
