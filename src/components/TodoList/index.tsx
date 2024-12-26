import  { memo, useState, useCallback } from 'react';
import { TodoItem } from '@/components/TodoList/Item';
import { TodoInput } from '@/components/TodoList/Input';
import { VirtualList } from '@/components/VirtualList';
import { useTodoStore } from '@/store/todoStore';
import { Todo } from '@/types';
import { TodoListContainer, TodoHeader, ErrorMessage } from './styles';

export const TodoList = memo(function TodoList() {
  const { todoMap, todoIds, error, addTodo, updateTodo, deleteTodo } = useTodoStore();
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const handleSubmit = useCallback(
    (text: string) => {
      if (editingTodo) {
        updateTodo(editingTodo.id, text);
        setEditingTodo(null);
      } else {
        addTodo(text);
      }
    },
    [editingTodo, updateTodo, addTodo]
  );

  const handleEdit = useCallback((todo: Todo) => {
    setEditingTodo(todo);
  }, []);

  const handleDelete = useCallback((id: string) => {
    if (editingTodo?.id === id) {
      setEditingTodo(null);
    }
    deleteTodo(id);
  }, [deleteTodo, editingTodo]);

  const todos = todoIds.map((id:string) => todoMap.get(id)!);

  const renderTodoItem = useCallback(
    (todo: Todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    ),
    [handleEdit, handleDelete]
  );

  return (
    <TodoListContainer>
      <TodoHeader>Todo List</TodoHeader>
      <TodoInput
        onSubmit={handleSubmit}
        initialValue={editingTodo?.text}
        buttonText={editingTodo ? 'Save' : 'Add'}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <VirtualList<Todo>
        items={todos}
        renderItem={renderTodoItem}
        itemHeight={48}
      />
    </TodoListContainer>
  );
});
