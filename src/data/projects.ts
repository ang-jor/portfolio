import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "ang-jor",
    title: "ang-jor",
    info: "That's the site you are currently on.",
    description:
      "Designed in Figma, built with React TSX and styled with Tailwind CSS and DaisyUI. This site was created because I already needed to upgrade my portfolio, so along the way I thought I could practice my React skills. As a bonus, I got to experiment with some design ideas. I've spent the last couple of years working on much bigger, already established codebases, so it was nice to build something from scratch again.",
    tags: ["Figma", "React", "TypeScript", "Tailwind", "DaisyUI"],
  },
  {
    id: "metalmancy",
    title: "Metalmancy",
    info: "A website built for the Metalmancy community.",
    description: "",
    tags: ["React", "TypeScript", "Frontend"],
    images: ["/images/metalmancy/cover.png"],
    link: "https://metalmancy.tech/",
  },
  {
    id: "tikvesh",
    title: "Tikvesh",
    info: "Design revamp for a winery events management app.",
    description:
      "Redesigned the user interface and improved user experience for a winery events management application, focusing on intuitive navigation and aesthetic appeal.",
    tags: ["Figma", "UI/UX Design"],
  },
  {
    id: "pockety",
    title: "Pockety",
    info: "Mobile banking app for kids and teens.",
    description:
      "Designed a mobile banking application tailored for kids and teens, incorporating parental controls and educational features to promote financial literacy.",
    tags: ["Figma", "UI/UX Design"],
    images: ["/images/pockety/cover.png"],
  },
];
