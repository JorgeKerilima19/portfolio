import { ReactElement } from "react";

import { SocialUnknownImages, gameImages, techSshots } from "./screenshoots";

import {
  htmlSvg,
  cssSvg,
  javascriptSvg,
  reactSvg,
  typeScriptSvg,
  tailWindSvg,
} from "./svgList";

type ToolLinks = { [key: string]: string };

export interface Project {
  id: number;
  name: string;
  image: ReactElement;
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
    name: "Social Rot",
    image: (
      <svg
        className="project-card__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 55.67 78.36"
      >
        <path
          fill="#f60"
          d="M49.77 1.5v21h-3.84q-4.32-18.28-21-18.28A18.86 18.86 0 0012.89 8q-4.83 3.81-4.83 8.67a7.53 7.53 0 003.42 6.52q3.42 2.39 16.17 4.08 28 3.46 28 25.49a24.91 24.91 0 01-7.26 18.28 24.43 24.43 0 01-18 7.31q-10.59 0-20.53-8.72l-6.58 5.64H0V47.62h3.28q8.06 26.52 27.09 26.52a20.87 20.87 0 0013.12-4.59Q49.4 65 49.4 58.77c0-3.43-1.17-6-3.52-7.78s-8.67-3.37-19-4.87Q.56 42.27.56 22.68A21.07 21.07 0 017.64 6.52 24.57 24.57 0 0124.93 0 24.9 24.9 0 0143 7.13a26.44 26.44 0 003.86-5.63z"
        />
      </svg>
    ),
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
    banner:
      "https://img.freepik.com/free-vector/work-office-computer-man-woman-business-character-marketing-online-employee-technology-business-man-cartoon-co-working-flat-design-freelance_1150-41790.jpg?w=826&t=st=1681354430~exp=1681355030~hmac=fefa8613276b62679b7600bcbc8857c1b511587bc38beeeb8733e17c10cf222f",
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
    image: (
      <svg
        fill="currentColor"
        viewBox="0 0 100 100"
        id="Layer_1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="project-card__svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path d="M93.998,45.312c0-3.676-1.659-7.121-4.486-9.414c0.123-0.587,0.184-1.151,0.184-1.706c0-4.579-3.386-8.382-7.785-9.037 c0.101-0.526,0.149-1.042,0.149-1.556c0-4.875-3.842-8.858-8.655-9.111c-0.079-0.013-0.159-0.024-0.242-0.024 c-0.04,0-0.079,0.005-0.12,0.006c-0.04-0.001-0.079-0.006-0.12-0.006c-0.458,0-0.919,0.041-1.406,0.126 c-0.846-4.485-4.753-7.825-9.437-7.825c-5.311,0-9.632,4.321-9.632,9.633v65.918c0,6.723,5.469,12.191,12.191,12.191 c4.46,0,8.508-2.413,10.646-6.246c0.479,0.104,0.939,0.168,1.401,0.198c2.903,0.185,5.73-0.766,7.926-2.693 c2.196-1.927,3.51-4.594,3.7-7.51c0.079-1.215-0.057-2.434-0.403-3.638c3.796-2.691,6.027-6.952,6.027-11.621 c0-3.385-1.219-6.635-3.445-9.224C92.731,51.505,93.998,48.471,93.998,45.312z M90.938,62.999c0,3.484-1.582,6.68-4.295,8.819 c-2.008-3.196-5.57-5.237-9.427-5.237c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5c3.341,0,6.384,2.093,7.582,5.208 c0.41,1.088,0.592,2.189,0.521,3.274c-0.138,2.116-1.091,4.051-2.685,5.449c-1.594,1.399-3.641,2.094-5.752,1.954 c-0.594-0.039-1.208-0.167-1.933-0.402c-0.74-0.242-1.541,0.124-1.846,0.84c-1.445,3.404-4.768,5.604-8.465,5.604 c-5.068,0-9.191-4.123-9.191-9.191V16.399c0-3.657,2.975-6.633,6.632-6.633c3.398,0,6.194,2.562,6.558,5.908 c-2.751,1.576-4.612,4.535-4.612,7.926c0,0.829,0.672,1.5,1.5,1.5s1.5-0.671,1.5-1.5c0-3.343,2.689-6.065,6.016-6.13 c3.327,0.065,6.016,2.787,6.016,6.129c0,0.622-0.117,1.266-0.359,1.971c-0.057,0.166-0.084,0.34-0.081,0.515 c0.001,0.041,0.003,0.079,0.007,0.115c-0.006,0.021-0.01,0.035-0.01,0.035c-0.118,0.465-0.006,0.959,0.301,1.328 c0.307,0.369,0.765,0.569,1.251,0.538c0.104-0.007,0.208-0.02,0.392-0.046c3.383,0,6.136,2.753,6.136,6.136 c0,0.572-0.103,1.159-0.322,1.849c-0.203,0.635,0.038,1.328,0.591,1.7c2.434,1.639,3.909,4.329,4.014,7.242 c0,0.004-0.001,0.008-0.001,0.012c0,5.03-4.092,9.123-9.122,9.123s-9.123-4.093-9.123-9.123c0-0.829-0.672-1.5-1.5-1.5 s-1.5,0.671-1.5,1.5c0,6.685,5.438,12.123,12.123,12.123c2.228,0,4.31-0.615,6.106-1.668C89.88,57.539,90.938,60.212,90.938,62.999 z"></path>
            <path d="M38.179,6.766c-4.684,0-8.59,3.34-9.435,7.825c-0.488-0.085-0.949-0.126-1.407-0.126c-0.04,0-0.079,0.005-0.12,0.006 c-0.04-0.001-0.079-0.006-0.12-0.006c-0.083,0-0.163,0.011-0.242,0.024c-4.813,0.253-8.654,4.236-8.654,9.111 c0,0.514,0.049,1.03,0.149,1.556c-4.399,0.655-7.785,4.458-7.785,9.037c0,0.554,0.061,1.118,0.184,1.706 c-2.827,2.293-4.486,5.738-4.486,9.414c0,3.159,1.266,6.193,3.505,8.463c-2.227,2.589-3.446,5.839-3.446,9.224 c0,4.669,2.231,8.929,6.027,11.621c-0.347,1.204-0.482,2.423-0.402,3.639c0.19,2.915,1.503,5.582,3.699,7.509 c2.196,1.928,5.015,2.879,7.926,2.693c0.455-0.03,0.919-0.096,1.4-0.199c2.138,3.834,6.186,6.247,10.646,6.247 c6.722,0,12.191-5.469,12.191-12.191V16.399C47.811,11.087,43.49,6.766,38.179,6.766z M44.811,82.317 c0,5.068-4.123,9.191-9.191,9.191c-3.697,0-7.02-2.2-8.464-5.604c-0.241-0.567-0.793-0.914-1.381-0.914 c-0.154,0-0.311,0.023-0.465,0.074c-0.724,0.235-1.338,0.363-1.933,0.402c-2.119,0.139-4.158-0.556-5.751-1.954 c-1.594-1.398-2.547-3.333-2.685-5.449c-0.076-1.16,0.125-2.336,0.598-3.495c0.007-0.017,0.005-0.036,0.011-0.053 c1.342-3.056,4.225-4.953,7.597-4.953c0.829,0,1.5-0.672,1.5-1.5s-0.671-1.5-1.5-1.5c-3.938,0-7.501,2.007-9.548,5.239 c-2.701-2.139-4.277-5.327-4.277-8.802c0-2.787,1.06-5.46,2.978-7.549c1.796,1.053,3.879,1.668,6.107,1.668 c6.685,0,12.123-5.438,12.123-12.123c0-0.829-0.671-1.5-1.5-1.5s-1.5,0.671-1.5,1.5c0,5.03-4.092,9.123-9.123,9.123 s-9.123-4.093-9.123-9.123c0-0.002-0.001-0.004-0.001-0.006c0.103-2.915,1.578-5.607,4.013-7.248 c0.553-0.372,0.793-1.064,0.591-1.699c-0.22-0.691-0.322-1.278-0.322-1.85c0-3.376,2.741-6.125,6.195-6.125 c0.007,0,0.015,0,0.022,0c0.103,0.014,0.206,0.027,0.311,0.034c0.485,0.03,0.948-0.171,1.254-0.542 c0.307-0.372,0.417-0.868,0.294-1.334c0-0.001-0.003-0.014-0.008-0.031c0.003-0.035,0.006-0.067,0.007-0.095 c0.005-0.18-0.022-0.359-0.081-0.529c-0.242-0.707-0.359-1.352-0.359-1.972c0-3.342,2.688-6.065,6.016-6.129 c3.328,0.065,6.016,2.787,6.016,6.13c0,0.829,0.671,1.5,1.5,1.5s1.5-0.671,1.5-1.5c0-3.391-1.861-6.35-4.612-7.926 c0.364-3.346,3.16-5.908,6.558-5.908c3.657,0,6.632,2.976,6.632,6.633V82.317z"></path>
          </g>
        </g>
      </svg>
    ),
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="project-presentation__logo"
        viewBox="0 0 512 512"
      >
        <path d="M398.325 0h-284.65c-19.23 0-34.834 15.596-34.834 34.833v442.334c0 19.237 15.604 34.832 34.833 34.832h284.651c19.229 0 34.833-15.595 34.833-34.832V34.833C433.159 15.596 417.555 0 398.325 0zM258.74 320.726c-1.055 1.012-.8.987-.8.987-.494.596-1.208.953-1.94.953h-.016c-.715 0-1.43-.357-1.924-.953 0 0 .221.025-.799-.987-29.864-28.834-73.528-46.667-73.528-85.27 0-30.068 17.732-46.549 39.138-46.122 23.228.442 34.611 16.88 37.13 31.838 2.519-14.958 13.886-31.395 37.13-31.838 21.424-.426 39.121 16.054 39.121 46.122-.001 38.603-43.649 56.437-73.512 85.27z" />
      </svg>
    ),
    banner:
      "https://img.freepik.com/free-vector/connecting-teams-concept-landing-page_52683-27129.jpg?w=740&t=st=1681355165~exp=1681355765~hmac=18db220a6a3dd4fed01411b1a1370a6bf2923a8256637d467eff85683e26c33f",
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
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        className="project-card__svg"
        fill="#be123c"
      >
        <path d="M10.05 18a20.46 20.46 0 00.62 4.93h6.48v-9.48h-6.57a20.55 20.55 0 00-.53 4.55z" />
        <path
          d="M18.85 13.45v9.48h6.48A20.46 20.46 0 0026 18a20.55 20.55 0 00-.52-4.55z"
          fill="red"
        />

        <path d="M18 2a16 16 0 1016 16A16 16 0 0018 2zm12.22 22.71H26.6a21.8 21.8 0 01-3 6 13.86 13.86 0 01-3 .92 20.21 20.21 0 004.18-6.94h-5.92v7.15h-1.69v-7.13h-5.95a20.21 20.21 0 004.18 6.95 13.86 13.86 0 01-2.94-.9 21.8 21.8 0 01-3-6.05H5.78a13.94 13.94 0 01-.83-1.81h4a22.2 22.2 0 01-.58-4.9 21.88 21.88 0 01.48-4.55H4.76a13.88 13.88 0 01.76-1.81h3.81A22.26 22.26 0 0112.61 5a13.86 13.86 0 012.87-.84 20.13 20.13 0 00-4.4 7.45h6.09V4h1.69v7.64h6.09a20.13 20.13 0 00-4.39-7.44 13.89 13.89 0 012.87.8 22.26 22.26 0 013.27 6.59h3.77a13.89 13.89 0 01.76 1.81h-4.06a21.88 21.88 0 01.49 4.6 22.2 22.2 0 01-.57 4.93h4a13.94 13.94 0 01-.87 1.78z" />
      </svg>
    ),
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
    banner:
      "https://img.freepik.com/free-vector/programming-languages-learning-software-coding-courses-website-development-class-script-writing-it-programmers-cartoon-characters_335657-3454.jpg?w=740&t=st=1705165157~exp=1705165757~hmac=f309ca69e9b0be2c7b34f224248c756f67bcdeb5edf5a83a9ad5c274bc01e40f",
    overview: "A website for a design company inspired by fireart Studio",
    description:
      "With this project I reenforced my react basic knowledge and I have also learned in more depth tailwind and its applications for responsive design and more",
    screenShoots: techSshots,
    link: "",
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
];
