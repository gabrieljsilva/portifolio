import { useTheme } from "styled-components";
import { Box, Text } from "../../components";

export function CasesPage() {
  const theme = useTheme();
  return (
    <>
      <Box minHeight={theme.getRemainingScreenHeight()}>
        <Text variant={"title"}>Cases</Text>
      </Box>
    </>
  );
}
