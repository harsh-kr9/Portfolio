import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, Star } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "BTech in Computer Science Engineering",
      college: "Techno Main Salt Lake",
      duration: "2023 - 2027",
      department: "Computer Science",
      gpa: "8.1 GPA",
      courses: [
        "Data Structures",
        "Algorithms",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "OOPs",
      ],
    },
  ];

  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-4"
          >
            Academic Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold mb-4"
          >
            My <span className="text-zinc-500">Education</span>
          </motion.h3>
        </div>

        <div className="max-w-3xl mx-auto">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-[40px] glass-card relative overflow-hidden group border-none bg-zinc-50/50 dark:bg-zinc-900/50"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <GraduationCap size={120} />
              </div>
              
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-3 text-blue-500 font-bold text-sm bg-blue-500/10 px-4 py-2 rounded-full">
                  <Calendar size={16} />
                  {item.duration}
                </div>
                <div className="flex items-center gap-3 text-emerald-500 font-bold text-sm bg-emerald-500/10 px-4 py-2 rounded-full">
                  <Star size={16} />
                  {item.gpa}
                </div>
              </div>
              
              <h4 className="text-3xl font-bold mb-3 leading-tight">{item.degree}</h4>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium mb-4">{item.college}</p>
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-10 bg-zinc-200 dark:bg-zinc-800 px-4 py-1.5 rounded-full w-fit">
                {item.department}
              </div>

              <div className="space-y-6">
                <h5 className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-zinc-500">
                  <BookOpen size={16} className="text-purple-500" /> Key Coursework:
                </h5>
                <div className="flex flex-wrap gap-3">
                  {item.courses.map((course) => (
                    <span
                      key={course}
                      className="text-sm font-semibold px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-zinc-700 dark:text-zinc-300 shadow-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
