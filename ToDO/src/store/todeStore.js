import { create } from "zustand";

export const useTODOStore = create((set) => ({
  todos: [{ id: 1, item: "Nagendra" }],
  addTodo: (Object) => {
    set((state) => ({
      todos: [...state.todos, Object],
    }));
  },
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  // clearTodo: () => set((state) => (todos = [])),
}));
