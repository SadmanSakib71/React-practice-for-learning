import { LevelContext } from "../context/LevelContext";

const Section = ({ children, level }) => {
  return (
    <div className="section">
      <LevelContext value={level}>{children}</LevelContext>
    </div>
  );
};

export default Section;
