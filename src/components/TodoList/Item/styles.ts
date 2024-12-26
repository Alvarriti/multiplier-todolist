import styled from 'styled-components';

export const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TodoText = styled.span`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.md};
`;