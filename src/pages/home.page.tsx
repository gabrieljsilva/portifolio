import { Title } from "../components/typography/title.component";

export function HomePage() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(async (response) => await response.json())
    .then((json) => console.log(json))
    .catch((e) => console.error(e));

  return (
    <>
      <Title variant={"title"}>Hello World</Title>
      <Title variant={"subtitle"}>Hello World</Title>
      <Title variant={"body"}>Hello World</Title>
    </>
  );
}
