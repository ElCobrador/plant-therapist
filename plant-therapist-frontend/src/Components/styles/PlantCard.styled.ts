import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 200px;
  height: 200px;
`


type CardImageProps = {
  src: any;
  alt: string;
}
export const CardImage = styled.img<CardImageProps>`
  src: ${({ src }) => src};
  alt: ${({ alt }) => alt};
  width: 100%;
  height: 100%;
`