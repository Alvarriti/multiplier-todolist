import styled, { css } from 'styled-components';
import { ButtonProps } from './types';

const getSizeStyles = (size: ButtonProps['size']) => {
  const sizes = {
    small: css`
      padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
      font-size: ${({ theme }) => theme.fontSize.sm};
    `,
    medium: css`
      padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
      font-size: ${({ theme }) => theme.fontSize.md};
    `,
    large: css`
      padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
      font-size: ${({ theme }) => theme.fontSize.lg};
    `,
  };
  return sizes[size || 'medium'];
};

const getVariantStyles = (variant: ButtonProps['variant']) => {
  const variants = {
    primary: css`
      background-color: ${({ theme }) => theme.colors.primary};
      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.primaryHover};
      }
    `,
    edit: css`
      background-color: ${({ theme }) => theme.colors.edit};
      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.editHover};
      }
    `,
    delete: css`
      background-color: ${({ theme }) => theme.colors.delete};
      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.deleteHover};
      }
    `,
  };
  return variants[variant || 'primary'];
};

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  transition: background-color 0.2s ease;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  ${({ size }) => getSizeStyles(size)}
  ${({ variant }) => getVariantStyles(variant)}
`;