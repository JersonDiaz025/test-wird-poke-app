import "./index.css";
import { IStyledTextProps } from "../../interfaces/IComponentProps";

const Title = ({ text, styles }: IStyledTextProps) => {
  return (
    <div className="title" style={styles}>
      {text}
    </div>
  );
};

export default Title;
