import { Text } from "../../components";
import { Container } from "../../components/flex/container.component";
import { useTheme } from "styled-components";

export function AboutPage() {
  const theme = useTheme();

  return (
    <Container minHeight={theme.getRemainingScreenHeight()}>
      <Text variant={"title"}>About</Text>
    </Container>
  );
}
