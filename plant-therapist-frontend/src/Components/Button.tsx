type ButtonProps = {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: ButtonProps): JSX.Element => {
  return <button onClick={onClick}>
    {text}
  </button>
}