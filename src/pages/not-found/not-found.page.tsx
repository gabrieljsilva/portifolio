import { Row, Text } from "../../components";

export function NotFoundPage() {
  return (
    <Row width={"100%"} height={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Text aria-label={"not-found-message"} variant={"thinTitle"}>
        PAGE NOT FOUND
      </Text>
    </Row>
  );
}
