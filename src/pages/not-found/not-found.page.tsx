import { Flex, Text } from "../../components";

export function NotFoundPage() {
  return (
    <Flex width={"100%"} height={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Text aria-label={"not-found-message"} variant={"thinTitle"}>
        PAGE NOT FOUND
      </Text>
    </Flex>
  );
}
