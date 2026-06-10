import { motion } from 'framer-motion';
import { experienceData } from '../../data/experience';

export const Timeline = () => {
  return (
    <section id="timeline" className="py-20 relative bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & <span className="text-gradient">Training</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-slate-700 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${
                idx % 2 === 0 ? 'md:pr-12 md:left-0 text-left' : 'md:pl-12 md:left-1/2 text-left'
              } pl-8 md:pl-${idx % 2 === 0 ? '0' : '12'}`}
            >
              <div className="absolute top-0 w-4 h-4 rounded-full bg-primary -left-[9px] md:-left-[9px] border-4 border-slate-900 z-10"></div>
              
              <div className="glass-card p-6 relative group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-3">
                  {exp.duration}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-lg text-slate-400 font-medium mb-4">{exp.company}</h4>
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-start">
                      <span className="text-primary mr-2 mt-1">▹</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
