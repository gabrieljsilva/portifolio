import { Title } from "../components/typography/title.component";
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
    return <Title>Loading...</Title>;
  }

  return (
    <>
      <Title variant={"title"}>Hello World</Title>
      <Title variant={"subtitle"}>Hello World</Title>
      <Title variant={"body"}>Hello World</Title>
      <Title>{todo.title}</Title>
    </>
  );
}
