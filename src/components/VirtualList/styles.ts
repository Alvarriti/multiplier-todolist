import styled, { css } from 'styled-components';

const virtualContainerStyles = css`
  height: 40vh;
  overflow: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const VirtualContainer = styled.div`
  ${virtualContainerStyles}
`;


export const Placeholder = styled.div`
  ${virtualContainerStyles}
  text-align:center;
  padding:10px;
  height: 50px;
`;

export const PlaceholderText = styled.p`
  color:${({ theme }) => theme.colors.text};
  font-size:${({ theme }) => theme.fontSize.md};
`

export const VirtualInner = styled.div`
  position: relative;
  width: 100%;
`;