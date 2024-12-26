import styled from 'styled-components';

export const TodoListContainer = styled.div`
  width: 30vw;
  min-width:300px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const TodoHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  font-weight: 600;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  margin: ${({ theme }) => theme.spacing.sm} 0;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => `${theme.colors.error}10`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => `${theme.colors.text}80`};
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const TodoListContent = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const TodoControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const TodoCount = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => `${theme.colors.text}80`};
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};
  
  &:after {
    content: "";
    width: 24px;
    height: 24px;
    border: 4px solid ${({ theme }) => `${theme.colors.primary}20`};
    border-top-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const EditingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const EditingPanel = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  width: 90%;
  max-width: 500px;
`;

export const TodoActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
  justify-content: flex-end;
`;

export const DragHandle = styled.div`
  cursor: grab;
  padding: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => `${theme.colors.text}40`};
  
  &:active {
    cursor: grabbing;
  }
  
  &:hover {
    color: ${({ theme }) => `${theme.colors.text}60`};
  }
`;

export const TodoItemWrapper = styled.div<{ isDragging?: boolean }>`
  opacity: ${({ isDragging }) => isDragging ? 0.5 : 1};
  transition: opacity 0.2s ease;
`;