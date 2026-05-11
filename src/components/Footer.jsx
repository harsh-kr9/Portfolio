import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <a href="#" className="text-2xl font-bold tracking-tighter gradient-text">
            HK.
          </a>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            &copy; {currentYear} Harsh Kumar
          </p>
        </div>

        <div className="flex items-center gap-6">
          {[
            { icon: <Github size={20} />, href: "https://github.com/harsh-kr9" },
            { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/harsh-kumar-0368a5274?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
            { icon: <Mail size={20} />, href: "mailto:kumarharsh7360@gmail.com" },
            { icon: <Code size={20} />, href: "https://leetcode.com/u/harshkr_9/" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-950 dark:hover:bg-white hover:text-white dark:hover:text-zinc-950 transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <a href="#about" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-blue-500 transition-colors">About</a>
          <a href="#projects" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-blue-500 transition-colors">Projects</a>
          <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-blue-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
