import { create } from "zustand";

export const useTODOStore = create((set) => ({
  todos: [{ id: "1", content: "Item 1" }],
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
  //   clearTodo: () => set((state) => (todos = [])),
}));
