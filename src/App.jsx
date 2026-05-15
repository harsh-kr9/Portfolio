import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  const [theme, setTheme] = useState("dark");
  const [isLoading, setIsLoading] = useState(true);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative min-h-screen text-zinc-950 dark:text-white transition-colors duration-500">
      {/* Persistent Background Layer */}
      <div className="fixed inset-0 bg-white dark:bg-zinc-950 -z-20 transition-colors duration-500" />
      
      <AnimatedBackground theme={theme} />
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="w-20 h-20 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
              <div className="text-2xl font-bold tracking-tighter text-white">
                HK<span className="text-blue-500">.</span>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            
            <main>
              <Hero />
              <About />
              <Skills />
              <CodingProfiles />
              <Projects />
              <Education />
              <Achievements />
              <Contact />
            </main>

            <Footer />

            {/* Scroll Progress Indicator */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[60]"
              style={{ scaleX: scrollProgress }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Simple custom hook for scroll progress
function useScrollProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)));
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
}

export default App;
