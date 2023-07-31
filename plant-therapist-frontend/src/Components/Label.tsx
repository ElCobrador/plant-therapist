import { FontFamily, FontFamilyToString } from "./Constants/FontFamily"
import { FontSize, FontSizeToString } from "./Constants/FontSize"
import LabelText from "./styles/Label.styled"

type LabelProps = {
  text: string,
  font?: FontFamily,
  fontSize?: FontSize
}

export const Label = ({ text, font = FontFamily.WorkSans, fontSize = FontSize.Base }: LabelProps): JSX.Element => {
  const fontFamilyString = FontFamilyToString(font);
  const fontSizeString = FontSizeToString(fontSize);

  return <div>
    <LabelText fontFamily={fontFamilyString} fontSize={fontSizeString}>
      {text}
    </LabelText>
  </div>
}