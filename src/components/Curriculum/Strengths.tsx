const strengths = [
  "Technical Skills",
  "Problem Solving",
  "Collaboration",
  "Attention to Details",
  "Comunication",
];

export const Strengths = () => {
  return (
    <div>
      {strengths.map((skill) => (
        <span key={skill}>{skill}</span>
      ))}
    </div>
  );
};
