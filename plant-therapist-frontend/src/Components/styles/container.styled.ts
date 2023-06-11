import styled from 'styled-components';

type FlexContainerProps = {
  direction?: 'row' | 'column',
  justifyContent?: string,
  alignItems?: string,
  padding?: string,
  gap?: string,
  flexWrap?: string
}
export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};
`;

type GridContainerProps = {
  gridTemplateColumns?: string,
  gridTemplateRows?: string,
  gridGap?: string
}
export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows};
  grid-gap: ${({ gridGap }) => gridGap};
`

export default FlexContainer;