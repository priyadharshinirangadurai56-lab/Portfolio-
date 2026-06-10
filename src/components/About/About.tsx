import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
              <h3 className="text-2xl font-bold mb-4 text-white">My Journey</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                I am a passionate AI & Data Science student and a dedicated Java & Frontend Developer.
                My objective is to leverage my skills in software engineering to create innovative and efficient solutions.
                I thrive in challenging environments and am always eager to learn new technologies and methodologies.
              </p>
              <div className="flex gap-4">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 flex-1 text-center">
                  <h4 className="text-3xl font-bold text-primary mb-1">9.0+</h4>
                  <p className="text-sm text-slate-400">CGPA</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 flex-1 text-center">
                  <h4 className="text-3xl font-bold text-secondary mb-1">5+</h4>
                  <p className="text-sm text-slate-400">Projects</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-6 rounded-2xl border-l-4 border-l-primary hover:bg-slate-800/50 transition-colors">
              <h4 className="text-xl font-bold text-white mb-2">B.Tech in AI & Data Science</h4>
              <p className="text-slate-400 text-sm mb-2">2021 - 2025</p>
              <p className="text-slate-300">Focusing on machine learning, data structures, and advanced algorithms to solve complex real-world problems.</p>
            </div>
            
            <div className="glass p-6 rounded-2xl border-l-4 border-l-secondary hover:bg-slate-800/50 transition-colors">
              <h4 className="text-xl font-bold text-white mb-2">Higher Secondary Education</h4>
              <p className="text-slate-400 text-sm mb-2">Graduated 2021</p>
              <p className="text-slate-300">Completed with distinction, building a strong foundation in mathematics and computer science.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
