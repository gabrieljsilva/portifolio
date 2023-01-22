import { Stack, Tooltip } from "@mui/material";

interface CasesCardTechnologyIconProps {
  src: string;
  name: string;
}

export function CasesCardTechnologyIcon({ src, name }: CasesCardTechnologyIconProps) {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      mt={1}
      bgcolor={"rgba(10, 10, 10, .50)"}
      sx={{
        "&:hover": {
          background: "rgba(10, 10, 10, .85)",
        },
      }}
      p={1}
      borderRadius={"50%"}
    >
      <Tooltip title={name}>
        <img width={"30rem"} height={"30rem"} src={src} alt={name} />
      </Tooltip>
    </Stack>
  );
}
