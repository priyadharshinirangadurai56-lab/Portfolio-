import { MainLayout } from '../layouts/MainLayout';
import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { Skills } from '../components/Skills/Skills';
import { Projects } from '../components/Projects/Projects';
import { Timeline } from '../components/Timeline/Timeline';
import { Certifications } from '../components/Certifications/Certifications';
import { CodingProfiles } from '../components/CodingProfiles/CodingProfiles';
import { Contact } from '../components/Contact/Contact';

export const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Certifications />
      <CodingProfiles />
      <Contact />
    </MainLayout>
  );
};
