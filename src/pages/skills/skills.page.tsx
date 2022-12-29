import { useTheme } from "styled-components";
import { Box, Text } from "../../components";

export function SkillsPage() {
  const theme = useTheme();
  return (
    <>
      <Box minHeight={theme.getRemainingScreenHeight()}>
        <Text variant={"title"}>Skills</Text>
      </Box>
    </>
  );
}
