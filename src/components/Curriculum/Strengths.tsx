const strengths = [
  "Technical Skills",
  "Problem Solving",
  "Collaboration",
  "Attention to Details",
  "Comunication",
];

export const Strengths = () => {
  return (
    <div className="flex-col gap-2">
      <h3 className="text-400">Strengths</h3>
      <div className="flex gap-2 flex-wrap">
        {strengths.map((skill) => (
          <span className="cv-strengths" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
