import { Text } from "../../components";
import { Container } from "../../components/flex/container.component";
import { useTheme } from "styled-components";

export function CasesPage() {
  const theme = useTheme();
  return (
    <>
      <Container minHeight={theme.getRemainingScreenHeight()}>
        <Text variant={"title"}>Cases</Text>
      </Container>
    </>
  );
}
