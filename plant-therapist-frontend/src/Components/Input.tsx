import { useState } from "react"

type InputProps = {
  onInputChange: (newText: string) => void;
  DefaultText?: string;
}

export const Input = ({ DefaultText = "", onInputChange}: InputProps): JSX.Element => {

  return <input type="text" value={DefaultText} onChange={e => onInputChange(e.target.value)} />
}