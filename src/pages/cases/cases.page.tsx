import { Box, Text } from "../../components";
import { useTheme } from "styled-components";

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
