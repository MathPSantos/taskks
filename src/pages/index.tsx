import { useState } from "react";
import { NextPage } from "next";

import { Head, Layout } from "@/components/layout";
import { Button } from "@/components/elements/form";
import { Todos } from "@/components/widgets/Todos/Todos.component";

import { styled } from "@/core/config/stitches.config";

import { uuid } from "@/core/utils/helpers/uuid";

export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
  isSelected: boolean;
};

const INITIAL_TODO_ITEM_DATA: Todo = {
  id: "",
  text: "",
  isCompleted: false,
  isSelected: false,
};

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleNewTodo() {
    const newTodo: Todo = {
      ...INITIAL_TODO_ITEM_DATA,
      id: uuid(),
    };

    setTodos([newTodo, ...todos]);
  }

  function handleTodoChange(todo: Todo) {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return todo;
        }

        return t;
      })
    );
  }

  function handleTodoDelete(id: string) {
    const newTodos = todos.filter((t) => t.id !== id);

    setTodos(newTodos);
  }

  return (
    <>
      <Head />
      <Layout>
        <Header>
          <h1>Your tasks</h1>

          <Button onClick={handleNewTodo}>Add task</Button>
        </Header>

        {/* TODO: Action bar */}
        <ActionsBar></ActionsBar>

        <Todos
          todos={todos}
          onTodoChange={handleTodoChange}
          onTodoDelete={handleTodoDelete}
        />

        {todos.some((todo) => todo.isSelected) && (
          <BottomActions key="bulk-actions">Test</BottomActions>
        )}
      </Layout>
    </>
  );
};

const Header = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  mt: "$6",

  h1: {
    color: "$gray900",
  },
});

const ActionsBar = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const BottomActions = styled("div", {
  width: "100%",
  maxWidth: "$container",

  position: "fixed",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",

  height: 60,
  backgroundColor: "$white",
});

export default Home;
