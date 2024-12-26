import { render, screen, fireEvent } from '@/utils/tests'; 
import { TodoItem } from './index';

describe('TodoItem Component', () => {
  const mokedTodo = {
    id: '1',
    text: 'Test Todo',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('render a todo Item', () => {
    render(
      <TodoItem
        todo={mokedTodo}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    const todoText = screen.getByText(/test todo/i);
    expect(todoText).toBeInTheDocument();
  });

  test('calls onEdit with the correct todo when "Edit" button is clicked', () => {
    render(
      <TodoItem
        todo={mokedTodo}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    const editButton = screen.getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);

    expect(mockOnEdit).toHaveBeenCalledTimes(1);
    expect(mockOnEdit).toHaveBeenCalledWith(mokedTodo);
  });

  test('calls onDelete with the correct id when "Delete" button is clicked', () => {
    render(
      <TodoItem
        todo={mokedTodo}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(mokedTodo.id);
  });
});
