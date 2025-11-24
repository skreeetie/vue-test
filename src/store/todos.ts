import { defineStore } from "pinia";

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface TodoStore {
  todoList: Todo[];
}

export const useTodos = defineStore("todos", {
  state: (): TodoStore => ({
    todoList: [
      { id: 0, title: "Make a sandwich", isCompleted: false },
      { id: 1, title: "Wash dishes", isCompleted: true },
    ],
  }),
  getters: {
    completedTodos: (state) => state.todoList.filter((todo) => todo.isCompleted),
  },
  actions: {
    addTodo(todo: Todo) {
      this.todoList.push(todo);
    },
    toggleTodo(id: number) {
      const todo = this.todoList.find((todo) => todo.id === id);
      if (todo) todo.isCompleted = !todo.isCompleted;
    },
  },
});
