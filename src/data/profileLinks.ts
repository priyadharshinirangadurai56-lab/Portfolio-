export interface ProfileLink {
  platform: string;
  url: string;
  username: string;
  icon: string; // We'll map this string to an actual icon in the component
}

export const profileLinksData: ProfileLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com",
    username: "PriyadharshiniR",
    icon: "FaGithub"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com",
    username: "Priyadharshini R",
    icon: "FaLinkedin"
  },
  {
    platform: "LeetCode",
    url: "https://leetcode.com",
    username: "Priyadharshini_R",
    icon: "SiLeetcode"
  },
  {
    platform: "HackerRank",
    url: "https://hackerrank.com",
    username: "priya_r",
    icon: "FaHackerrank"
  }
];
