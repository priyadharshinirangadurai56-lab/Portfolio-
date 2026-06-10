import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">PR.</h3>
            <p className="text-slate-400 max-w-sm">
              Building beautiful, interactive, and functional digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-slate-400 hover:text-primary cursor-pointer transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/PriyadharshiniR" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-primary transition-all duration-300">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/priyadharshini-r" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-[#0A66C2] transition-all duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:hello@example.com" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-emerald-500 transition-all duration-300">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Priyadharshini R. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
