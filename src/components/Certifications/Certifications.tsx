import { motion } from 'framer-motion';
import { certificatesData } from '../../data/certificates';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Certifications</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6 group hover:border-primary/50 transition-colors"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-700 group-hover:border-primary transition-colors overflow-hidden">
                <span className="text-4xl">🏆</span>
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                <p className="text-slate-400 text-sm mb-4">Issued: {cert.date}</p>
                {cert.verifyLink && (
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm font-medium"
                  >
                    Verify Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
