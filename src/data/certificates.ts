export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  verifyLink?: string;
}

export const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "2023",
    verifyLink: "#"
  },
  {
    id: 2,
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2024",
    verifyLink: "#"
  }
];
