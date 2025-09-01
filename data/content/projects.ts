import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Dotrack",
    desc: "A customer request management platform that streamlines support workflows and enhances service experience.",
    img: "/static/projects/DoTrack/Dotrack.png",
    github: "https://github.com/mcuongisme/TodoVNPT",
    tags: ["React", "Nodejs", "GraphQL", "AntDesign", "MongoDB"],
  },
  {
    id: 1,
    title: "STOCKB",
    desc: "An intelligent inventory management solution designed to track and control construction materials efficiently and accurately.",
    img: "/static/projects/StockB/StockB.png",
    github: "https://github.com/mcuongisme/prj-stock-management",
    link: "https://hmc28042004.pythonanywhere.com/",
    tags: ["HTML", "CSS", "Django", "SQLite", "AJAX"],
  },
  {
    id: 2,
    title: "Watching Movies Clone",
    desc: "A modern online movie streaming application inspired by leading platforms, offering a smooth and engaging experience.",
    img: "/static/projects/Movie/movie.png",
    github: "https://github.com/mcuongisme/watching-movies",
    tags: ["React", "Nodejs", "MongoDB"],
  },
  {
    id: 3,
    title: "FASHION",
    desc: "An e-commerce website for clothing shops with a minimalist design, elegant interface, and user-friendly experience.",
    img: "/static/projects/Ecommerce/ecom.png",
    github: "https://github.com/mcuongisme/eCommerce",
    link: "https://e-commerce-omega-lemon.vercel.app",
    tags: ["React", "SCSS", "AntDesign"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
