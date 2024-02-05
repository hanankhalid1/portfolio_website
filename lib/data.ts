
import expenseTrackerImg from "@/public/expenseTacker.png";
import blogWebsiteImg from "@/public/blogWebsite.png";
import amazonImg from "@/public/amazonClone.png";
import todoImg from "@/public/todoList.png";
import stopWatchImg from "@/public/stopWatch.png";
import wordCounterImg from "@/public/wordsCounter.png"


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
 
  {
    title: "Full-Stack Developer",
    location: "Faisalabad, Pakistan",
    description:
      "I am actively gaining hands-on experience in web development by working on real projects. This practical approach allows me to apply my skills and build a solid understanding of creating websites and applications.",
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Expense Tracker",
    description:
      "An expense tracker designed for hands-on experience and logic-building, fostering practical skills in financial management.",
    tags: ["Next.Js", "Typescript", "Tailwind CSS" , "React Graphs"],
    imageUrl: expenseTrackerImg,
  },
  {
    title: "Blog Website",
    description:
      "A blog website crafted for hands-on experience, featuring seamless integration with the Contentful API for dynamic and efficient content management.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Contentful Api"],
    imageUrl: blogWebsiteImg
  },
  {
    title: "Amazon Clone",
    description:
      "An Amazon clone project, meticulously crafted with HTML, CSS, and JavaScript, providing a hands-on experience in web development and dynamic functionality.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: amazonImg ,
  },
  {
    title: "To Do List",
    description:
      "A task management project, created using HTML, CSS, and JavaScript, provides a practical hands-on experience in exploring frontend technologies.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: todoImg,
  },
  {
    title: "Stop Watch",
    description:
      "A beginner-friendly stopwatch project designed with HTML, CSS, and JavaScript for hands-on learning and practical coding experience.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: stopWatchImg,
  },
  {
    title: "Words Counter",
    description:
      "A beginner-friendly  project crafted with HTML, CSS, and JavaScript for hands-on learning and practical coding experience.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: wordCounterImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "C++",
  "MySql",
  "Firebase",
  "Framer Motion",
] as const;
