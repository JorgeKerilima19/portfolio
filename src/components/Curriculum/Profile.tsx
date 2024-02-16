import { ReactElement } from "react";

interface ProfileValue {
  name: string;
  svg: ReactElement;
  value: string;
}

const items: ProfileValue[] = [
  {
    name: "Birthdate",
    svg: (
      <svg
        className="cv__icon"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 21a7 7 0 1114 0M16 7a4 4 0 11-8 0 4 4 0 018 0z"
          stroke="#000"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    ),
    value: "09/29/2001",
  },
  {
    name: "Location",
    svg: (
      <svg
        className="cv__icon"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21c3.5-3.6 7-6.824 7-10.8C19 6.224 15.866 3 12 3s-7 3.224-7 7.2 3.5 7.2 7 10.8z"
          stroke="#000"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    ),
    value: "Cusco-Peru",
  },
  {
    name: "Email",
    svg: (
      <svg
        className="cv__icon"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#000" strokeLinecap="round" strokeWidth="2">
          <path d="M4 7l6.2 4.65a3 3 0 003.6 0L20 7" />
          <rect height="14" width="18" rx="2" x="3" y="5" />
        </g>
      </svg>
    ),
    value: "quispechilojorge@gmail.com",
  },
  {
    name: "Phone",
    svg: (
      <svg
        className="cv__icon"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61.09 1.587.808 5 4.812 8.982 4.247 4.222 8.232 4.39 9.861 4.238.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.438-1.787-.309-2.417.317z"
          fill="#1C274C"
        />
      </svg>
    ),
    value: "+51949316792",
  },
  {
    name: "Web",
    svg: (
      <svg
        className="cv__icon"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.636 5.636a4 4 0 015.657 0l2.828 2.828a4 4 0 010 5.657 1 1 0 11-1.414-1.414 2 2 0 000-2.828L9.88 7.05A2 2 0 007.05 9.88l.707.707A1 1 0 116.343 12l-.707-.707a4 4 0 010-5.657zm5.657 4.243a1 1 0 010 1.414 2 2 0 000 2.828l2.828 2.829a2 2 0 002.829-2.829l-.707-.707A1 1 0 1117.657 12l.707.707a4 4 0 01-5.657 5.657L9.88 15.536a4 4 0 010-5.657 1 1 0 011.414 0z"
          fill="#000"
          fillRule="evenodd"
        />
      </svg>
    ),
    value: "https://jorgekerilima19.github.io/portfolio/",
  },
];

export const Profile = () => {
  return (
    <article className="cv-profile">
      <header className="text-title">Jorge Quispe Chilo</header>
      <div className="flex flex-wrap gap-2 py-8">
        {items.map((item) => (
          <div key={item.name} className="flex gap-1 items-center">
            {item.svg}
            <span className="flex items-center">{item.value}</span>
          </div>
        ))}
      </div>
      <img src="" alt="imageProfile" />
    </article>
  );
};
