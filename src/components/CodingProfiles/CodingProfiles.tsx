import { motion } from 'framer-motion';
import { profileLinksData } from '../../data/profileLinks';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import type { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  SiLeetcode: SiLeetcode,
  FaHackerrank: FaHackerrank,
};

export const CodingProfiles = () => {
  return (
    <section id="profiles" className="py-20 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Coding <span className="text-gradient">Profiles</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileLinksData.map((profile, idx) => {
            const Icon = iconMap[profile.icon];
            return (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{profile.platform}</h3>
                <p className="text-slate-400 mb-4">{profile.username}</p>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-slate-800 hover:bg-slate-700 text-sm font-medium rounded-full text-white transition-colors"
                >
                  View Profile
                </a>
              </motion.div>
            );
          })}
        </div>
        
        {/* GitHub Contribution Graph Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 glass-card p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">GitHub Contributions</h3>
          <div className="w-full h-40 bg-slate-800/50 rounded-xl border border-slate-700 flex items-center justify-center">
            <p className="text-slate-400">
              <span className="text-primary font-medium">Integration Ready:</span> Use GitHub Graph API here.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
