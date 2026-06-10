import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import { ParticleBackground } from './ParticleBackground';

export const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl text-slate-300 mb-4 font-medium tracking-wide">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Priyadharshini R
          </h1>
          
          <div className="text-2xl md:text-4xl font-semibold mb-8 h-12 text-gradient">
            <Typewriter
              words={['AI & Data Science Student', 'Java Developer', 'Frontend Developer']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a
              href="/resume/resume.pdf"
              download
              className="px-8 py-3 rounded-full bg-primary hover:bg-sky-400 text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(14,165,233,0.4)]"
            >
              Download Resume
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer px-8 py-3 rounded-full border border-slate-600 hover:border-primary text-slate-300 hover:text-white font-medium transition-all duration-300 transform hover:scale-105 glass"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Link to="about" smooth={true} duration={500} className="cursor-pointer text-slate-400 hover:text-white transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
};
