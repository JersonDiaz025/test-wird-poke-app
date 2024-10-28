import "./index.css";
import { IThumbnail } from "./interface";
// Render image
const Thumbnail = ({ url, styles }: IThumbnail) => {
  return <img src={url} className="image" style={styles} />;
};

export default Thumbnail;
