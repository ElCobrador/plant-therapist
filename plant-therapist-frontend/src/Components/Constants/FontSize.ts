export enum FontSize {
  H1,
  H2,
  H3,
  H4,
  H5,
  Base,
  Caption,
}

export const FontSizeToString = (textSize: FontSize) => {
  switch (textSize) {
    case FontSize.H1:
      return '67px';
    case FontSize.H2:
      return '51px';
    case FontSize.H3:
      return '38px';
    case FontSize.H4:
      return '28px';
    case FontSize.H5:
      return '22px';
    case FontSize.Base:
      return '16px';
    case FontSize.Caption:
      return '12px';
    default:
      throw new Error('The FontSize provided doesn\'t exist');
  }
}

