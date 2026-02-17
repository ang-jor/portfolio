import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "ang-jor",
    title: "ang-jor",
    thumbnail: "/images/ang-jor/cover.png",
    info: "That's the site you are currently on.",
    role: "Designer & Developer",
    timeline: "2025-2026",
    tags: ["Figma", "React", "TypeScript", "Tailwind", "DaisyUI"],
    description: [
      "When looking for visual inspiration, I went back to where everything started for me over 10 years ago - Tumblr. Customizing blog themes and tweaking existing layouts was my first real touchpoint with HTML and CSS. Revisiting those themes sparked the idea for what this portfolio would become. Designed in Figma, built with React TSX and styled with TailwindCSS and DaisyUI. After spending the past few years working on large, established codebases, it felt refreshing to build something entirely from scratch again.",
    ],
    images: ["/images/ang-jor/cover.png"],
    twoColumns: true,
  },
  {
    id: "metalmancy",
    title: "Metalmancy",
    info: "A website built for the Metalmancy community.",
    role: "Designer & Developer",
    timeline: "2024",
    tags: ["Figma", "UX/UI Design", "Vue", "TypeScript", "Frontend"],
    link: "https://metalmancy.tech/",
    description: [
      "Metalmancy is a community-driven website with a bold, distinctive visual identity. The challenge was translating the client's vision into an experience that felt expressive without sacrificing clarity or usability. A strong emphasis was placed on animations and micro-interactions, and every visual decision was balanced against readability and intentional design.",
      "For this project, I had a hand throughout the whole process - from defining the visual direction to the implementation of the frontend. This was also my first hands-on experience with Vue, and the first time I understood what the hype about Tailwind was all about.",
    ],
    // images: ["/assets/projects/logo.svg"],
    twoColumns: true,
  },
  {
    id: "tikvesh",
    title: "Tikvesh",
    info: "Design refresh for a winery events management app.",
    role: "Designer",
    timeline: "2024",
    tags: ["Figma", "UI/UX Design", "Mobile Design"],
    link: "https://apps.apple.com/us/app/tikvesh-events/id6443730868",
    description: [
      "Tikvesh Events is a mobile app designed for end users to browse upcoming events, explore venues and performers, and keep track of event tickets in one place. The goal of the project was to refresh the visual interface, simplify event discovery and ticket management, and create a smoother experience for guests to find events and validate their tickets. Since the app already had a defined visual identity, I started by creating wireframes to establish the new structure and user flow, before moving on to the high-fidelity mockups.",
      "The redesign focused on creating a modern, intuitive interface that makes it easy for users to discover events and manage their tickets seamlessly.",
    ],
    images: ["assets/projects/wireframes.png", "assets/projects/mockups.png"],
  },
  {
    id: "pockety",
    title: "Pockety",
    info: "Mobile banking app for kids and teens.",
    role: "Designer",
    timeline: "2024",
    tags: [
      "Figma",
      "UI/UX Design",
      "User Research",
      "Branding",
      "Competitor Analysis",
      "Mobile Design",
    ],
    withAlert: true,
    description: [
      "This project is a mobile banking app designed for kids and young teens, with a parent interface counterpart that gives parents visibility into their children's spending habits. I began by conducting extensive user research and a detailed competitor analysis before moving on to defining the branding - typography, colors and tone of voice.",
      "Once the foundations were established, I iterated on the designs through multiple rounds of refinement. We finally arrived at a final solution that aligned with our overall vision - an app that promotes financial literacy for younger users, while providing parents with insights, controls, and top-up features.",
    ],
    images: ["assets/projects/kids-cut.gif", "assets/projects/parents-cut.gif"],
    twoColumns: true,
  },
  {
    id: "course-catalog",
    title: "Course Catalog",
    info: "A course catalog application for educational institutions.",
    role: "Designer",
    timeline: "2024",
    tags: ["Figma", "UI/UX Design", "User Research", "Competitor Analysis"],
    withAlert: true,
    description: [
      "Designed a web application for an internal course catalog, created to support employee development and continuous education. The primary challenge was delivering a cohesive experience while accommodating three distinct user roles: employees, team leaders, and administrators.",
      "Each persona had different goals, from managing personal learning paths, to overseeing team education requests, to managing and adding courses. I structured the experience to remain consistent at its core, while layering in role-specific functionality where needed.",
      // add one more photo for this
      "Another key consideration throughout the project was scalability. Internal tools like this naturally evolve over time, so I focused on creating a flexible structure that could accommodate future feature requests and content expansion without disrupting the overall experience.",
    ],
    images: [
      "assets/projects/course-cover.png",
      "assets/projects/admin-requests.png",
    ],
  },
];
