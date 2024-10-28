import { Link as RouterLink } from "react-router-dom";

interface CustomLinkProps {
  children?: React.ReactNode;
  to: string;
  styles?: React.CSSProperties;
  text?: string;
}

const CustomLink = ({ children, to, styles, text }: CustomLinkProps) => {
  return (
    <RouterLink to={to} style={styles}>
      {text || children}
    </RouterLink>
  );
};

export default CustomLink;
