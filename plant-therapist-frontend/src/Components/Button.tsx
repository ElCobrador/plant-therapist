type ButtonProps = {
  text: string;
}

export const Button = ({ text }: ButtonProps): JSX.Element => {
  return <div>
    {text}
  </div>
}