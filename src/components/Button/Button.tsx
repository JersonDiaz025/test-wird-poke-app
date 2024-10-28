interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
  text?: string;
  styles?: React.CSSProperties;
}

const Button = ({ onClick, text, styles, children }: ButtonProps) => {
  return (
    <button onClick={onClick} style={styles}>
      {text || children}
    </button>
  );
};

export default Button;
