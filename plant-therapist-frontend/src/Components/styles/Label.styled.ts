import styled from 'styled-components';

type LabelTextProps = {
  fontFamily: string,
  fontSize: string,
  color?: string
}

const LabelText = styled.div<LabelTextProps>`
    font-family: ${({ fontFamily }) => fontFamily};
    font-size: ${({ fontSize }) => fontSize};
    color: ${({ color }) => color ?? "#000000"};
`;

export default LabelText;