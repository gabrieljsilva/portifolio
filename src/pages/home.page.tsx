import { Text } from "../components";
import { useEffect, useState } from "react";

interface Todo {
  title: string;
}

export function HomePage() {
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(async (response) => await response.json())
      .then((json) => setTodo(json))
      .catch((e) => console.error(e));
  }, []);

  if (!todo) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <Text variant={"title"}>Hello World</Text>
      <Text variant={"subtitle"}>Hello World</Text>
      <Text variant={"body"}>Hello World</Text>
      <Text>{todo.title}</Text>
    </>
  );
}
