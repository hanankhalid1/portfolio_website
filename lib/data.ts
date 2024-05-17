
import expenseTrackerImg from "@/public/expenseTacker.png";
import blogWebsiteImg from "@/public/blogWebsite.png";
import amazonImg from "@/public/amazonClone.png";
import todoImg from "@/public/todoList.png";
import docFinderPro from "@/public/docfinderpro.png";
import swiftNews from "@/public/swiftNews.png";




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
    title: "DocFinderPro",
    description:
      "DocFinderPro is a user-friendly doctor appointment booking website crafted with Next.js, TypeScript, Tailwind CSS, and Shadcn UI for a seamless experience, powered by Strapi for a robust backend.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript" , "Strapi", "Shadcn ui"],
    imageUrl: docFinderPro,
  },
  {
    title: "SwiftNews",
    description:
      "A news platform leveraging NewsAPI for content, with integrated web development APIs for easy news sharing, ensuring users access up-to-date information effortlessly.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript" , "News API"],
    imageUrl: swiftNews ,
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
      "A detailed to-do list website made with HTML, CSS, and JavaScript. It is a great hands-on project to learn web development and manage tasks dynamically.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: todoImg ,
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
