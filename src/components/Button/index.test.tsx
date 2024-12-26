import userEvent from '@testing-library/user-event';
import { Button } from '@/components/Button';
import { render, screen } from '@/utils/tests'; 
import { theme } from '@/styles/theme'; // Importa el tema actual

describe('Button Component', () => {
  test('renders with default props', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
    expect(button).not.toBeDisabled();
  });

  test('displays loading text when isLoading is true', () => {
    render(<Button isLoading>Click Me</Button>);
    const button = screen.getByRole('button', { name: /loading/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Loading...');
    expect(button).toBeDisabled();
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click Me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toBeDisabled();
  });

  test('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies correct styles based on variant and size props', () => {
    render(<Button variant="edit" size="medium">Styled Button</Button>);
    const button = screen.getByRole('button', { name: /styled button/i });

    expect(button).toHaveAttribute('variant', 'edit');
    expect(button).toHaveStyle(`
      font-size: ${theme.fontSize.md};
      padding: ${theme.spacing.sm} ${theme.spacing.md};
    `);
  });
});
