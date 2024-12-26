import { render, screen, fireEvent} from '@/utils/tests';
import { TodoList } from '@/components/TodoList';
import { Todo } from '@/types';
import { useTodoStore } from '@/store/todoStore';
import { act,  } from 'react';

jest.mock('@/components/VirtualList', () => ({
  VirtualList: ({ items, renderItem }: { items: Todo[], renderItem: (item: Todo) => React.ReactNode }) => (
    <div data-testid="virtual-list">
      {items.length === 0 ? (
        <div>Add your first Todo</div>
      ) : (
        items.map(item => renderItem(item))
      )}
    </div>
  ),
}));

describe('TodoList Component', () => {
  beforeEach(() => {
    act(() => {
      useTodoStore.setState({
        todoMap: new Map<string, Todo>(),
        todoIds: [] as string[],
        error: null,
      });
    });
  });

  test('renders the TodoList component with no todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Add your first Todo')).toBeInTheDocument();
  });

  test('adds a new todo when the form is submitted', async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Enter a new todo...');
    const button = screen.getByRole('button', { name: /add/i });

    await act(async () => {
      fireEvent.change(input, { target: { value: 'New Todo' } });
      fireEvent.click(button);
    });

    expect(screen.getByText('New Todo')).toBeInTheDocument();

    const state = useTodoStore.getState();
    expect(state.todoIds).toHaveLength(1);
    expect(state.todoMap.size).toBe(1);
  });


  test('deletes a todo', async () => {
    await act(async () => {
      useTodoStore.getState().addTodo('Todo to Delete');
    });

    render(<TodoList />);
    
    expect(screen.queryByText('Todo to Delete')).toBeInTheDocument();
    const deleteButton = screen.getByRole('button', { name: /delete/i });

    await act(async () => {
      fireEvent.click(deleteButton);
    });

    expect(screen.queryByText('Todo to Delete')).not.toBeInTheDocument();

    const state = useTodoStore.getState();
    expect(state.todoIds).toHaveLength(0);
    expect(state.todoMap.size).toBe(0);
  });

  test('displays an error message when todo text is empty', async () => {
    render(<TodoList />);
    const button = screen.getByRole('button', { name: /add/i });

    await act(async () => {
      fireEvent.click(button);
    });

    expect(screen.getByText('Todo text cannot be empty')).toBeInTheDocument();
  });
});