import  { memo } from 'react';
import { ButtonProps } from './types';
import { StyledButton } from './styles';

export const Button = memo(function Button({
  children,
  variant = 'primary',
  size = 'medium',
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </StyledButton>
  );
});