import "./index.css";
import { IStyledTextProps } from "../../interfaces/IComponentProps";
import Thumbnail from "../Thumbnail/Thumbnail";

const Icon = ({ url: image, styles }: IStyledTextProps) => {
  return (
    <div style={styles}>
      <Thumbnail url={image} styles={styles} />
    </div>
  );
};

export default Icon;
