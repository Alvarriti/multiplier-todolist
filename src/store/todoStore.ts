import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TodoState, Todo } from '../types';
import { generateId } from '@/utils/helpers/generateId';

interface TodoStore extends TodoState {
  addTodo: (text: string) => void;
  updateTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
  setError: (error: string | null) => void;
}

const initialState: TodoState = {
  todoMap: new Map(),
  todoIds: [],
  loading: false,
  error: null,
};

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      ...initialState,

      addTodo: (text: string) => {
        if (!text.trim()) {
          set({ error: 'Todo text cannot be empty' });
          return;
        }

        set((state) => {
          const id = generateId();
          const newTodo: Todo = {
            id,
            text: text.trim(),
            createdAt: new Date(),
            updatedAt: new Date(),
          };

          const newMap = new Map(state.todoMap);
          newMap.set(id, newTodo);

          return {
            todoMap: newMap,
            todoIds: [id, ...state.todoIds],
            error: null,
          };
        });
      },

      updateTodo: (id: string, text: string) => {
        if (!text.trim()) {
          set({ error: 'Todo text cannot be empty' });
          return;
        }

        set((state) => {
          const todo = state.todoMap.get(id);
          if (!todo) return state;

          const newMap = new Map(state.todoMap);
          newMap.set(id, { ...todo, text: text.trim(), updatedAt: new Date() });

          return {
            todoMap: newMap,
            error: null,
          };
        });
      },

      deleteTodo: (id: string) => {
        set((state) => {
          const newMap = new Map(state.todoMap);
          newMap.delete(id);

          return {
            todoMap: newMap,
            todoIds: state.todoIds.filter(todoId => todoId !== id),
          };
        });
      },

      setError: (error: string | null) => set({ error }),
    }),
    {
      name: 'todo-storage',
      partialize: (state) => ({
        todoIds: state.todoIds,
        todoMap: Array.from(state.todoMap.entries()),
      }),
      onRehydrateStorage: () => (state) => {
        if (state && Array.isArray(state.todoMap)) {
          state.todoMap = new Map(state.todoMap);
        }
      },
    }
  )
);