import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight, Download, Code, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-700" />

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-8 border border-blue-500/20"
        >
          <Sparkles size={14} /> Available for Internships
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight"
        >
          Hi, I'm <span className="gradient-text">Harsh Kumar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl font-medium text-zinc-600 dark:text-zinc-400 mb-8 h-12"
        >
          <Typewriter
            words={[
              "BTech CSE Student",
              "DSA Enthusiast",
              "Java Developer",
              "Full Stack Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-zinc-500 dark:text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Passionate about building scalable software and solving complex problems with efficient algorithms. 
          Currently focused on Java Development, Full Stack technologies, and competitive programming.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
          >
            View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-white border border-zinc-200 dark:border-zinc-800 rounded-full font-semibold transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:scale-105 active:scale-95"
            >
              Contact Me
            </a>
            <button className="p-4 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-white border border-zinc-200 dark:border-zinc-800 rounded-full transition-all hover:scale-110 active:scale-90 shadow-sm">
              <Download size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Icons Background */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-[10%] hidden lg:block opacity-20 dark:opacity-30"
      >
        <Code size={120} className="text-blue-500" />
      </motion.div>
    </section>
  );
};

export default Hero;
