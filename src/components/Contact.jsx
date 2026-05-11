import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">Contact Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Let's build something <br />
              <span className="text-zinc-500">amazing together.</span>
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-12 max-w-md leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out through the form or my social links.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail className="text-blue-500" />, label: "Email", value: "kumarharsh7360@gmail.com", href: "mailto:kumarharsh7360@gmail.com" },
                { icon: <Linkedin className="text-blue-600" />, label: "LinkedIn", value: "harsh-kumar", href: "https://www.linkedin.com/in/harsh-kumar-0368a5274?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                { icon: <Github className="text-zinc-800 dark:text-zinc-200" />, label: "GitHub", value: "@harsh-kr9", href: "https://github.com/harsh-kr9" },
              ].map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/10 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-blue-500 transition-colors">
                      {item.label}
                    </div>
                    <div className="text-lg font-bold">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="p-8 md:p-12 rounded-[40px] glass-card border-none bg-white dark:bg-zinc-900 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-500 ml-1">Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-zinc-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-500 ml-1">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-zinc-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 ml-1">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-zinc-400 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-zinc-950/20"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
