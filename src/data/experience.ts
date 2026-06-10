export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export const experienceData: Experience[] = [
  {
    id: 1,
    role: "Frontend Development Training",
    company: "QSpiders",
    duration: "2023 - Present",
    description: [
      "Acquired hands-on experience with modern frontend web technologies including HTML, CSS, JavaScript, and React.",
      "Developed responsive and interactive web applications.",
      "Learned best practices for UI/UX design and accessibility."
    ]
  },
  {
    id: 2,
    role: "Java Development Training",
    company: "QSpiders",
    duration: "2023 - Present",
    description: [
      "Mastered core Java concepts, object-oriented programming, and backend development.",
      "Built robust applications using Spring Boot and connected to MySQL databases.",
      "Participated in mock interviews and coding challenges to refine problem-solving skills."
    ]
  }
];
