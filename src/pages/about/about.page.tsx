import { useTheme } from "styled-components";
import { Box, Text } from "../../components";

export function AboutPage() {
  const theme = useTheme();

  return (
    <Box minHeight={theme.getRemainingScreenHeight()}>
      <Text variant={"title"}>About</Text>
    </Box>
  );
}
