import { ReactElement } from "react";

interface Skill {
  name: string;
  type?: string;
  skillSvg: ReactElement;
}

export const codingSkills: Skill[] = [
  {
    name: "Html5",
    type: "language",
    skillSvg: (
      <svg className="skill__svg" viewBox="0 0 128 128">
        <path
          fill="#E44D26"
          d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
        ></path>
        <path
          fill="#F16529"
          d="M64 116.8l36.378-10.086 8.559-95.878H64z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
        ></path>
        <path
          fill="#fff"
          d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
        ></path>
      </svg>
    ),
  },
  {
    name: "Css3",
    type: "language",
    skillSvg: (
      <svg className="skill__svg" viewBox="0 0 128 128">
        <path
          fill="#1572B6"
          d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
        ></path>
        <path
          fill="#33A9DC"
          d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
        ></path>
        <path
          fill="#fff"
          d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
        ></path>
        <path
          fill="#fff"
          d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
        ></path>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    type: "language",
    skillSvg: (
      <svg className="skill__svg" viewBox="0 0 128 128">
        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
        <path
          fill="#323330"
          d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
        ></path>
      </svg>
    ),
  },
  {
    name: "React",
    type: "library/framework",
    skillSvg: (
      <svg className="skill__svg" viewBox="0 0 128 128">
        <g fill="#61DAFB">
          <circle cx="64" cy="64" r="11.4"></circle>
          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
        </g>
      </svg>
    ),
  },
  {
    name: "Material-UI",
    type: "library/framework",
    skillSvg: (
      <svg viewBox="0 0 128 128">
        <path
          fill="#1FA6CA"
          d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6zM48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"
        ></path>
        <path
          fill="#1FA6CA"
          d="M48 77.8v18.4l32 18.4V96.2L48 77.8zM80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"
        ></path>
      </svg>
    ),
  },
];

export const designSkills: Skill[] = [
  {
    name: "Adb Photoshop",
    skillSvg: (
      <svg
        className="skill__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 157.14 157.14"
        fill="CurrentColor"
      >
        <path d="M51.24,47.37H40.6v31.8h9.51q9.39,0,14.34-4.3t4.94-12.14Q69.39,47.37,51.24,47.37Z" />
        <path d="M140.27,0H16.88A16.88,16.88,0,0,0,0,16.88V140.27a16.87,16.87,0,0,0,16.88,16.87H140.27a16.87,16.87,0,0,0,16.87-16.87V16.88A16.87,16.87,0,0,0,140.27,0Zm-69,80.36q-7.59,7-20.5,7H40.6v29.3H31.53V39.15H52.81q12.42,0,19.25,6.06T78.9,62.3Q78.9,73.33,71.31,80.36ZM123.81,109a15.49,15.49,0,0,1-4.84,5,22.05,22.05,0,0,1-7,3,34.23,34.23,0,0,1-8.26,1,31.35,31.35,0,0,1-14.8-3.3v-9.51a26.26,26.26,0,0,0,15.93,5.35q11.67,0,11.67-7.79a6.74,6.74,0,0,0-1-3.76,10,10,0,0,0-2.7-2.73,20.81,20.81,0,0,0-4-2.13c-1.53-.63-3.17-1.29-4.94-2a62.56,62.56,0,0,1-6.45-2.94,19.38,19.38,0,0,1-4.65-3.36A12.42,12.42,0,0,1,90,81.6,15,15,0,0,1,89.05,76a13.2,13.2,0,0,1,1.78-6.89,15.64,15.64,0,0,1,4.76-5,21.91,21.91,0,0,1,6.77-3.06,30.27,30.27,0,0,1,7.86-1,31.69,31.69,0,0,1,12.86,2.49v9a25,25,0,0,0-14-4,16.74,16.74,0,0,0-4.48.56,10.88,10.88,0,0,0-3.43,1.6,7.28,7.28,0,0,0-2.21,2.46,6.42,6.42,0,0,0-.79,3.16,7.53,7.53,0,0,0,.79,3.63,8,8,0,0,0,2.29,2.59,17.76,17.76,0,0,0,3.67,2.06q2.16.92,4.92,2a67.4,67.4,0,0,1,6.59,2.89,22.83,22.83,0,0,1,5,3.35,13.2,13.2,0,0,1,3.16,4.3,13.85,13.85,0,0,1,1.1,5.79A13.66,13.66,0,0,1,123.81,109Z" />
      </svg>
    ),
  },
  {
    name: "Adb Illustrator",
    skillSvg: (
      <svg
        className="skill__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 157.14 157.14"
        fill="CurrentColor"
      >
        <path d="M68.35,46.75h-.19a25,25,0,0,1-1.09,4.57L56.48,80.37H80.09L69.4,51.32A27.6,27.6,0,0,1,68.35,46.75Z" />
        <path d="M140.27,0H16.88A16.88,16.88,0,0,0,0,16.88V140.27a16.87,16.87,0,0,0,16.88,16.87H140.27a16.87,16.87,0,0,0,16.87-16.87V16.88A16.87,16.87,0,0,0,140.27,0ZM89.92,106.67,82.7,87.55H53.82L47,106.67H38.15L64.27,38.48h8.26l26.22,68.19Zm25.6,0h-7.79V58h7.79Zm-.31-55a5,5,0,0,1-3.63,1.47A4.9,4.9,0,0,1,108,51.73a4.81,4.81,0,0,1-1.47-3.61,5,5,0,0,1,5-5.09,5.06,5.06,0,0,1,3.63,1.45,5.08,5.08,0,0,1,0,7.21Z" />
      </svg>
    ),
  },
  {
    name: "Adb XD",
    skillSvg: (
      <svg
        className="skill__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 157.14 157.14"
      >
        <path
          fill="CurrentColor"
          d="M140.27 0H16.88A16.88 16.88 0 000 16.88v123.39a16.87 16.87 0 0016.88 16.87h123.39a16.87 16.87 0 0016.87-16.87V16.88A16.87 16.87 0 00140.27 0zM67.38 114.8L51.71 88.69a23.79 23.79 0 01-1.57-3.38H50c-.31.73-.85 1.86-1.61 3.38l-16.2 26.11h-9.78L45.2 80.51l-21-33.9H34l13.91 24a46.39 46.39 0 012.42 4.76h.19a55.36 55.36 0 012.66-5l14.49-23.76h9.17L55.42 80.42l21.7 34.38zm60.56 0h-7.79v-8.28H120q-5.42 9.42-16.72 9.42-9.17 0-14.65-6.54t-5.52-17.81q0-12.07 6.08-19.35T105.38 65q10 0 14.58 7.89h.19V42.71h7.79z"
        />
        <path
          fill="CurrentColor"
          d="M106.38 71.52a13.46 13.46 0 00-11.21 5.23Q91.09 82 91.09 91.21q0 8.42 3.91 13.29a12.81 12.81 0 0010.52 4.87 13.32 13.32 0 0010.57-4.7 17.54 17.54 0 004.06-11.89V85.6a14 14 0 00-3.89-10 13.09 13.09 0 00-9.88-4.08z"
        />
      </svg>
    ),
  },
  {
    name: "Adb After Effects",
    skillSvg: (
      <svg
        className="skill__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 157.14 157.14"
        fill="CurrentColor"
      >
        <path d="M52.26,48.42h-.19A25,25,0,0,1,51,53L40.39,82H64L53.31,53A27.6,27.6,0,0,1,52.26,48.42Z" />
        <path d="M110.59,65.07A12.56,12.56,0,0,0,101.23,69a17.93,17.93,0,0,0-4.75,10.32h26.27q-.06-6.75-3.26-10.51A11.07,11.07,0,0,0,110.59,65.07Z" />
        <path d="M140.27,0H16.88A16.88,16.88,0,0,0,0,16.88V140.27a16.87,16.87,0,0,0,16.88,16.87H140.27a16.87,16.87,0,0,0,16.87-16.87V16.88A16.87,16.87,0,0,0,140.27,0ZM73.83,108.34,66.61,89.22H37.73l-6.79,19.12H22.06L48.18,40.15h8.26l26.22,68.19Zm56.9-22.4H96.39q.18,8.13,4.37,12.55t11.49,4.43a23.84,23.84,0,0,0,15.1-5.43v7.33q-6.41,4.67-16.95,4.66-10.31,0-16.2-6.64T88.31,84.18q0-11.36,6.44-18.52a20.63,20.63,0,0,1,16-7.16q9.54,0,14.77,6.19t5.23,17.16Z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    skillSvg: (
      <svg className="skill__svg" viewBox="0 0 128 128">
        <path
          fill="#0acf83"
          d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
        ></path>
        <path
          fill="#a259ff"
          d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
        ></path>
        <path
          fill="#f24e1e"
          d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
        ></path>
        <path
          fill="#ff7262"
          d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
        ></path>
        <path
          fill="#1abcfe"
          d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
        ></path>
      </svg>
    ),
  },
];

export const learningSkills: Skill[] = [
  {
    name: "TypeScript",
    skillSvg: (
      <svg className="skill__svg" viewBox="0 0 128 128">
        <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
        <path
          data-name="original"
          fill="#007acc"
          d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
        ></path>
      </svg>
    ),
  },
  {
    name: "NodeJs",
    skillSvg: (
      <svg className="skill__svg" viewBox="0 0 128 128">
        <path
          fill="#83CD29"
          d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
        ></path>
      </svg>
    ),
  },
];
