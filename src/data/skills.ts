export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "Java", level: 90 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 75 },
      { name: "Three.js", level: 60 }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "NumPy", level: 80 },
      { name: "Pandas", level: 80 },
      { name: "Google Colab", level: 90 }
    ]
  }
];
