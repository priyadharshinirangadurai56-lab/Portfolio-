export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Secure Login System",
    description: "A robust and secure authentication system with encrypted passwords and session management.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Campus Canteen System",
    description: "An automated food ordering system for the university canteen, reducing queue times and improving order tracking.",
    techStack: ["Java", "Spring Boot", "MySQL", "React"],
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Phishing Simulation",
    description: "An educational tool to simulate phishing attacks and train users to identify malicious emails.",
    techStack: ["Python", "Flask", "HTML", "CSS"],
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    title: "TinDog",
    description: "A fun dating app clone designed specifically for dogs, demonstrating responsive web design principles.",
    techStack: ["HTML", "CSS", "Bootstrap"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=600"
  }
];
