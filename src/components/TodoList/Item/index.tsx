import { memo } from 'react';
import { Todo } from '@/types';
import { Button } from '@/components/Button';
import { TodoItemContainer, TodoText } from './styles';

interface TodoItemProps {
  todo: Todo;
  onEdit: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = memo(function TodoItem({
  todo,
  onEdit,
  onDelete,
}: TodoItemProps) {
  return (
    <TodoItemContainer>
      <TodoText>{todo.text}</TodoText>
      <Button
        variant="edit"
        size="small"
        onClick={() => onEdit(todo)}
      >
        Edit
      </Button>
      <Button
        variant="delete"
        size="small"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </Button>
    </TodoItemContainer>
  );
});