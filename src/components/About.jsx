import { motion } from "framer-motion";
import { User, Target, Zap, Brain } from "lucide-react";
import profileImg from "../assets/harsh.jpg";

const About = () => {
  const features = [
    {
      icon: <Target className="text-blue-500" />,
      title: "Problem Solver",
      text: "Passionate about competitive programming and optimizing algorithms.",
    },
    {
      icon: <Brain className="text-purple-500" />,
      title: "Fast Learner",
      text: "Quickly adapting to new technologies and building impactful solutions.",
    },
    {
      icon: <Zap className="text-yellow-500" />,
      title: "Java Developer",
      text: "Strong foundation in OOPs and building robust backend applications.",
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square rounded-3xl bg-zinc-100 dark:bg-zinc-800 border-4 border-white dark:border-zinc-900 shadow-2xl relative overflow-hidden group">
              <img 
                src={profileImg} 
                alt="Harsh Kumar" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold gradient-text">DSA</div>
              <div className="text-xs uppercase tracking-widest font-bold opacity-60">Practitioner</div>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Crafting Digital Excellence Through <span className="text-zinc-500">Logic and Code.</span>
              </h3>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-10 leading-relaxed">
                I am a BTech Computer Science student at Techno Main Salt Lake with a deep-seated passion for solving real-world problems. 
                My journey evolved into a dedicated practice of Data Structures and Algorithms (DSA). 
                I thrive on creating scalable, efficient, and user-centric technologies that make a difference.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-6 rounded-2xl glass-card"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold mb-2">{feature.title}</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">{feature.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
