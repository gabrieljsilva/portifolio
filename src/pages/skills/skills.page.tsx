import { useTheme } from "styled-components";
import { Box, Text } from "../../components";

export function SkillsPage() {
  const theme = useTheme();
  return (
    <>
      <Box width={"100vw"} minHeight={theme.getRemainingScreenHeight()}>
        <Text variant={"title"}>Skills</Text>
        <img
          src={"https://chefbob.com.br/wp-content/uploads/2021/05/2021-05-12-como-deixar-os-gatos-mais-tranquilos.jpg"}
        />
      </Box>
    </>
  );
}
