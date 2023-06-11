export enum FontFamily {
  SpaceMono,
  WorkSans,
}

export const FontFamilyToString = (fontFamily: FontFamily) => {
  switch (fontFamily) {
    case FontFamily.SpaceMono:
      return 'space-mono';
    case FontFamily.WorkSans:
      return 'work-sans';
    default:
      throw new Error('The TextSize provided doesn\'t exist');
  }
}

