// 👉 Apni details sirf is file me badlo, baaki site apne aap update ho jayegi.

export const profile = {
  name: "Govind Singh",
  title: "React Developer",
  avatar: "https://github.com/Govii1211.png",
  tagline: "Learner, Builder, Problem Solver",
  about: [
    "Main ek aspiring Frontend Developer hoon jo React aur JavaScript seekh raha hai. Mujhe aise web apps banana pasand hai jo simple, fast aur use karne me aasaan hon.",
    "Abhi main roz naye projects bana raha hoon aur GitHub pe share kar raha hoon. Mera goal ek achhi company me Frontend Developer ki role hai.",
  ],
  info: [
    { label: "Location", value: "India" },
    { label: "E-mail", value: "govindsingh925xy@gmail.com" },
    { label: "GitHub", value: "github.com/Govii1211" },
    { label: "Freelance", value: "Available" },
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/Govii1211", icon: "GH" },
    { name: "LinkedIn", url: "https://www.linkedin.com/", icon: "in" },
    { name: "Email", url: "mailto:govindsingh925xy@gmail.com", icon: "@" },
  ],
};

export const services = [
  { icon: "⚛️", title: "React Apps", text: "Components aur hooks se fast, interactive web apps." },
  { icon: "🎨", title: "Responsive UI", text: "Aisi websites jo mobile, tablet aur laptop sab pe achhi dikhein." },
  { icon: "🔌", title: "API Integration", text: "REST APIs se live data laana aur dikhana." },
  { icon: "🐙", title: "Git & GitHub", text: "Branches, Pull Requests aur clean commit history." },
];

export const funFacts = [
  { label: "Projects Built", value: "4+" },
  { label: "GitHub Commits", value: "20+" },
  { label: "Cups of Chai", value: "∞" },
  { label: "Days Learning", value: "1+" },
];

export const education = [
  { period: "2023 - Present", title: "Your Degree / Course", place: "Your College Name", text: "Yahan apni padhai ke baare me 1-2 line likho." },
  { period: "2023", title: "12th", place: "Your School Name", text: "Subjects ya percentage yahan likh sakte ho." },
];

export const experience = [
  { period: "2026 - Present", title: "React Projects", place: "Self Learning", text: "Todo App, GitHub Profile Finder aur Weather App banaye, GitHub pe published." },
  { period: "2026", title: "Git & GitHub", place: "Self Learning", text: "Branches, Pull Requests, merge aur GitHub Pages deploy seekha." },
];

export const skills = [
  { name: "HTML5", level: 80 },
  { name: "CSS3", level: 70 },
  { name: "JavaScript", level: 65 },
  { name: "React", level: 55 },
  { name: "Git & GitHub", level: 60 },
];

export const projects = [
  {
    title: "Weather App",
    category: "API",
    emoji: "🌦️",
    description: "Kisi bhi city ka live weather aur 5 din ka forecast. Open-Meteo API.",
    tech: ["React", "Fetch API", "async/await"],
    github: "https://github.com/Govii1211/weather-app",
  },
  {
    title: "GitHub Profile Finder",
    category: "API",
    emoji: "🔍",
    description: "GitHub username se profile aur latest repos dekho.",
    tech: ["React", "useEffect", "GitHub API"],
    github: "https://github.com/Govii1211/github-profile-finder",
  },
  {
    title: "Todo App",
    category: "React",
    emoji: "📝",
    description: "Todos add, complete aur delete karo.",
    tech: ["React", "useState", "Props"],
    github: "https://github.com/Govii1211/React-Todo",
  },
  {
    title: "Portfolio",
    category: "React",
    emoji: "💼",
    description: "Yahi website! React + Vite, GitHub Pages pe deployed.",
    tech: ["React", "CSS", "GitHub Pages"],
    github: "https://github.com/Govii1211/portfolio",
  },
];
