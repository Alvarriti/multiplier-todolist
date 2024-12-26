import  { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { render, RenderOptions, fireEvent, within } from '@testing-library/react';
import { theme } from '@/styles/theme';

const renderWithTheme = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);
};

export * from '@testing-library/react'; 
export { renderWithTheme as render, fireEvent , within}; 
