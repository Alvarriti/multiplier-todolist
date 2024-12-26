import { render, screen, fireEvent } from '@/utils/tests'; // render usa ThemeProvider
import { TodoInput } from './index';

describe('TodoInput Component', () => {
  const mockOnSubmit = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default props', () => {
    render(<TodoInput onSubmit={mockOnSubmit} />);

    expect(screen.getByPlaceholderText('Enter a new todo...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
  });

  it('updates input value when typing', () => {
    render(<TodoInput onSubmit={mockOnSubmit} />);
    const input = screen.getByPlaceholderText('Enter a new todo...');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    expect(input).toHaveValue('New Todo');
  });

  it('calls `onSubmit` with the correct value on form submission', () => {
    render(<TodoInput onSubmit={mockOnSubmit} />);
    const input = screen.getByPlaceholderText('Enter a new todo...');
    const button = screen.getByRole('button', { name: /add/i });

    fireEvent.change(input, { target: { value: 'Submit Todo' } });
    fireEvent.click(button);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith('Submit Todo');
  });

  it('clears input after submission when buttonText is "Add"', () => {
    render(<TodoInput onSubmit={mockOnSubmit} />);
    const input = screen.getByPlaceholderText('Enter a new todo...');
    const button = screen.getByRole('button', { name: /add/i });

    fireEvent.change(input, { target: { value: 'Clear Me' } });
    fireEvent.click(button);

    expect(input).toHaveValue('');
  });

  it('does not clear input after submission when buttonText is not "Add"', () => {
    render(<TodoInput onSubmit={mockOnSubmit} buttonText="Save" />);
    const input = screen.getByPlaceholderText('Enter a new todo...');
    const button = screen.getByRole('button', { name: /save/i });

    fireEvent.change(input, { target: { value: 'Do Not Clear' } });
    fireEvent.click(button);

    expect(input).toHaveValue('Do Not Clear');
  });

});
