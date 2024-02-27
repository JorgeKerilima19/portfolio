import { ReactElement } from "react";

//screenshots array
import {
  SocialUnknownImages,
  gameImages,
  techSshots,
  JustMemories,
  socialTravelSS,
} from "./screenshoots";

//svg's
import {
  htmlSvg,
  cssSvg,
  javascriptSvg,
  reactSvg,
  typeScriptSvg,
  tailWindSvg,
  materialSvg,
} from "./svgList";

//banners

import {
  puzzleBanner,
  memoriesBanner,
  socialBanner,
  techWorldBanner,
  travelBanner,
} from "./screenshoots/banners";

type ToolLinks = { [key: string]: string };

export interface Project {
  id: number;
  name: string;
  logo?: ReactElement;
  banner?: string;
  overview: string;
  description?: string;
  screenShoots?: string[];
  link?: string;
  codeSource?: string;
  tools?: ReactElement[];
  extraResources?: ToolLinks[];
  reason?: string;
  lesson?: string;
  installation?: string;
  features?: string[];
  status?: "In progress" | "Constantly updating" | "Finished";
}

export const projectList: Project[] = [
  {
    id: 1,
    name: "Social Media",
    logo: (
      <svg
        className="project-presentation__logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 55.67 78.36"
        fill="#f60"
      >
        <path
          fill="#f60"
          d="M49.77 1.5v21h-3.84q-4.32-18.28-21-18.28A18.86 18.86 0 0012.89 8q-4.83 3.81-4.83 8.67a7.53 7.53 0 003.42 6.52q3.42 2.39 16.17 4.08 28 3.46 28 25.49a24.91 24.91 0 01-7.26 18.28 24.43 24.43 0 01-18 7.31q-10.59 0-20.53-8.72l-6.58 5.64H0V47.62h3.28q8.06 26.52 27.09 26.52a20.87 20.87 0 0013.12-4.59Q49.4 65 49.4 58.77c0-3.43-1.17-6-3.52-7.78s-8.67-3.37-19-4.87Q.56 42.27.56 22.68A21.07 21.07 0 017.64 6.52 24.57 24.57 0 0124.93 0 24.9 24.9 0 0143 7.13a26.44 26.44 0 003.86-5.63z"
        />
      </svg>
    ),
    banner: socialBanner,
    overview:
      "A facebook copy that I created to learn the basics of HTML, CSS and Javascript. Along the way I incorporate new stuff I learn",
    description:
      "This Project helped me to have a better understanding of Html5 tags and good practices; Css3 selectors; and vanilla JavaScript fetching as well as creating HTML tags within it",
    link: "https://jorgekerilima19.github.io/Social-Smth/",
    reason:
      "I want to build this project because I believe that I can clone mostly any relevant functionality that Facebook has, such as saving or deleting data/post fetch comentaries, open chats and open modal for images/videos",
    lesson:
      "Building this project, I increase my knowledge of javascript components and using arguments to change its behavior regarding css styles. ",
    codeSource: "https://github.com/JorgeKerilima19/Social-Smth",
    screenShoots: SocialUnknownImages,
    tools: [htmlSvg, cssSvg, javascriptSvg],
    extraResources: [
      { JSONPlaceholder: "https://jsonplaceholder.typicode.com/" },
      { freepik: "" },
      { GithubPages: "https://pages.github.com/" },
      { Pexels: "https://www.pexels.com/" },
    ],
    status: "Finished",
    installation:
      "You can direclty clone the repository and open it with your code editor or visit the site hosted on github",
    features: [
      "Dark mode",
      "Fetching Post/comments",
      "Saving Post",
      "Open Modals",
      "View friend's profile",
    ],
  },
  {
    id: 2,
    name: "Guess game",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="project-presentation__logo"
        viewBox="0 0 512 512"
      >
        <path d="M398.325 0h-284.65c-19.23 0-34.834 15.596-34.834 34.833v442.334c0 19.237 15.604 34.832 34.833 34.832h284.651c19.229 0 34.833-15.595 34.833-34.832V34.833C433.159 15.596 417.555 0 398.325 0zM258.74 320.726c-1.055 1.012-.8.987-.8.987-.494.596-1.208.953-1.94.953h-.016c-.715 0-1.43-.357-1.924-.953 0 0 .221.025-.799-.987-29.864-28.834-73.528-46.667-73.528-85.27 0-30.068 17.732-46.549 39.138-46.122 23.228.442 34.611 16.88 37.13 31.838 2.519-14.958 13.886-31.395 37.13-31.838 21.424-.426 39.121 16.054 39.121 46.122-.001 38.603-43.649 56.437-73.512 85.27z" />
      </svg>
    ),
    banner: puzzleBanner,
    overview:
      "This project was design and inspired by my curiosity of developing web games and its responsiveness to mobile devices",
    description:
      "I learned more about object oriented programming by creating this simple guess game, I try as much as I can to avoid bugs and also helped me to practice more responsive design",
    lesson:
      "With this project I learn how to properly use JavaScript event listeners, states management and routing with hash",
    reason:
      "I was curious about making web games and how they can be develop using functions and objects to control media, etc",
    features: [
      "Sound/music",
      "Responsiveness",
      "Records per level",
      "7 levels",
      "No time limit",
    ],
    installation:
      "You can clone the site via Github or visit the site directly",
    link: "https://jorgekerilima19.github.io/JsVanilla-game/",
    codeSource: "https://github.com/JorgeKerilima19/JsVanilla-game",
    screenShoots: gameImages,
    tools: [htmlSvg, cssSvg, javascriptSvg],
    extraResources: [
      { Svgrepo: "https://www.svgrepo.com/" },
      { GithubPages: "https://pages.github.com/" },
      { Pixabay: "https://pixabay.com/" },
    ],
    status: "Finished",
  },
  {
    id: 3,
    name: "Techworld",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        className="project-presentation__logo"
        fill="#be123c"
      >
        <path d="M10.05 18a20.46 20.46 0 00.62 4.93h6.48v-9.48h-6.57a20.55 20.55 0 00-.53 4.55z" />
        <path d="M18.85 13.45v9.48h6.48A20.46 20.46 0 0026 18a20.55 20.55 0 00-.52-4.55z" />
        <path d="M18 2a16 16 0 1016 16A16 16 0 0018 2zm12.22 22.71H26.6a21.8 21.8 0 01-3 6 13.86 13.86 0 01-3 .92 20.21 20.21 0 004.18-6.94h-5.92v7.15h-1.69v-7.13h-5.95a20.21 20.21 0 004.18 6.95 13.86 13.86 0 01-2.94-.9 21.8 21.8 0 01-3-6.05H5.78a13.94 13.94 0 01-.83-1.81h4a22.2 22.2 0 01-.58-4.9 21.88 21.88 0 01.48-4.55H4.76a13.88 13.88 0 01.76-1.81h3.81A22.26 22.26 0 0112.61 5a13.86 13.86 0 012.87-.84 20.13 20.13 0 00-4.4 7.45h6.09V4h1.69v7.64h6.09a20.13 20.13 0 00-4.39-7.44 13.89 13.89 0 012.87.8 22.26 22.26 0 013.27 6.59h3.77a13.89 13.89 0 01.76 1.81h-4.06a21.88 21.88 0 01.49 4.6 22.2 22.2 0 01-.57 4.93h4a13.94 13.94 0 01-.87 1.78z" />
      </svg>
    ),
    banner: techWorldBanner,
    overview: "A website for a design company inspired by fireart Studio",
    description:
      "With this project I reenforced my react basic knowledge and I have also learned in more depth tailwind and its applications for responsive design and more",
    screenShoots: techSshots,
    link: "https://jorgekerilima19.github.io/TWorld/",
    codeSource: "https://github.com/JorgeKerilima19/TWorld",
    tools: [reactSvg, typeScriptSvg, tailWindSvg, cssSvg],
    extraResources: [
      { Fireart: "https://fireart.studio/" },
      { Svgrepo: "https://www.svgrepo.com/" },
      { GithubPages: "https://pages.github.com/" },
      { Pixabay: "https://pixabay.com/" },
    ],
    lesson:
      "Building this project helped me a lot understanding the correct usage of tailwind and solidifying my knowledge of react and typescript",
    installation:
      "Clone the repository and install the dependencies using npm or yarn. Then just start the server. Or alternatively, you can visit the site hosted on GithubPages",
    status: "Finished",
    reason:
      "I liked how the web of Firestudio look and I thought to myself, I think I can do this.",
    features: ["Responsive", "Blog Page", "Components reuse"],
  },
  {
    id: 4,
    name: "JustMemories",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="project-presentation__logo"
      >
        <path
          fill="#7ED957"
          fill-rule="evenodd"
          d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm-.834-6l2.322 3.87A8.996 8.996 0 0019.477 17h-8.31zm-4.29-3.262l4.333 7.22a8.987 8.987 0 01-6.595-3.826l2.263-3.394zM7.632 9H3.52a8.979 8.979 0 00-.512 3c0 1.093.195 2.14.552 3.11L7.63 9zm12.85 6h-4.167l4.025-6.373A8.967 8.967 0 0120.993 12c0 1.052-.18 2.062-.512 3zm-7.647-8h-8.31a8.996 8.996 0 015.987-3.87L12.835 7zm-.043-3.959l4.244 7.073 2.19-3.47a8.983 8.983 0 00-6.434-3.603zM8.179 12l1.875-3h3.892l1.875 3-1.875 3h-3.892L8.18 12z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    banner: memoriesBanner,
    overview: "A instagram copy made with Material UI, typescript and React",
    description:
      "With this project, I understand how Material UI works and in general how styled frameworks work. I also learned a bit more about javascript to be more specific about accessing the user's camera, recording and taking photos, and being able to download them or create posts.",
    screenShoots: JustMemories,
    link: "https://jorgekerilima19.github.io/photogallery/",
    codeSource: "https://github.com/JorgeKerilima19/photogallery/",
    tools: [materialSvg, reactSvg, javascriptSvg, typeScriptSvg],
    extraResources: [
      { Svgrepo: "https://www.svgrepo.com/" },
      { GithubPages: "https://pages.github.com/" },
      { Pixabay: "https://pixabay.com/" },
      { JsonPlaceholder: "https://jsonplaceholder.typicode.com/" },
    ],
    reason:
      "I like Instagram's website design, it is simple but unique in its style and I believe that I can implement most of the things it has and I did. It was really fun going through the whole design/code process (especially the grid design for photos in profiles) and Material UI is my favorite CSS framework so far.",
    lesson:
      "The most important thing I can recall from this experience was the ability to be able to take screenshots and display them on the website, and also able to record, and more importantly, the application of margins to keep the image growth constant.",
    installation:
      "Clone the repository and install the dependencies using npm or yarn. Then just start the server. Or alternatively, you can visit the site hosted on GithubPages",
    features: [
      "User fetching",
      "Dark mode",
      "Screenshoots",
      "Video recording",
      "Image Grid",
      "Stories Scroll buttons",
    ],
    status: "Constantly updating",
  },
  {
    id: 5,
    name: "Sky Travel",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="project-presentation__logo"
        viewBox="0 0 132.29 132.29"
      >
        <circle
          cx="66.14"
          cy="66.14"
          r="61.64"
          fill="#f60"
          stroke="#fff"
          stroke-width="8"
        />
        <path
          fill="#fff"
          d="M88.08 28.46v21h-3.85q-4.31-18.28-21-18.28A18.91 18.91 0 0051.19 35q-4.83 3.8-4.82 8.67a7.5 7.5 0 003.42 6.51q3.42 2.37 16.21 4.06 28 3.46 28 25.49A24.87 24.87 0 0186.72 98a24.4 24.4 0 01-18 7.31q-10.59 0-20.52-8.71l-6.56 5.62h-3.33V74.58h3.28q8.05 26.52 27.08 26.53a20.85 20.85 0 0013.13-4.6q5.9-4.59 5.9-10.78c0-3.43-1.17-6-3.51-7.78s-8.67-3.37-19-4.87q-26.33-3.84-26.32-23.43a21.1 21.1 0 017.07-16.17A24.58 24.58 0 0163.24 27a24.93 24.93 0 0118.09 7.13 26.44 26.44 0 003.84-5.63z"
        />
      </svg>
    ),
    banner: travelBanner,
    overview:
      "My first react project, where I studied the basics of React and single page applications (SPA)",
    description:
      "I wanted to test React and also to have a better understanding of SPA, with React and React-router-dom. My experience with these two technologies was amazing and it encouraged me to create my own data to display, which was fun.",
    screenShoots: socialTravelSS,
    link: "https://jorgekerilima19.github.io/socialtravel/",
    codeSource: "https://github.com/JorgeKerilima19/socialtravel",
    tools: [reactSvg, cssSvg, javascriptSvg],
    extraResources: [
      { Svgrepo: "https://www.svgrepo.com/" },
      { GithubPages: "https://pages.github.com/" },
      { Unsplash: "https://unsplash.com/" },
    ],
    reason:
      "This project was designed to study the basics of React JS, and also to create my first database to store my data which will be fetched inside the application",
    lesson:
      "Better understanding of React and how it is different to React class components",
    installation:
      "Clone the repository, install the dependencies or alternatively, you can visit the site hosted with GitHub pages",
    features: [
      "Sliders",
      "Multipage",
      "Reviews",
      "Database",
      "Responsive",
      "Fetch destinations",
    ],
    status: "Finished",
  },
];
