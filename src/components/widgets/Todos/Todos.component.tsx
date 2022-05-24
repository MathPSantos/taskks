import { AnimatePresence } from "framer-motion";

import { TodoItem } from "./TodoItem/TodoItem.component";

import { Todo } from "@/pages";

import * as T from "./Todos.styled";

interface TodosProps {
  todos: Todo[];
  onTodoChange: (todo: Todo) => void;
  onTodoDelete: (id: string) => void;
}

export function Todos({ todos, onTodoChange, onTodoDelete }: TodosProps) {
  function handleTodoChange(todo: Todo) {
    onTodoChange(todo);
  }

  function handleTodoDelete(id: string) {
    onTodoDelete(id);
  }

  return (
    <T.List>
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            data={todo}
            onChange={handleTodoChange}
            onDelete={handleTodoDelete}
          />
        ))}
      </AnimatePresence>
    </T.List>
  );
}
