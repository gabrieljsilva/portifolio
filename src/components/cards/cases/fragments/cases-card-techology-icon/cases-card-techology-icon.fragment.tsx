import { Stack, Tooltip } from "@mui/material";

interface CasesCardTechnologyIconProps {
  src: string;
  name: string;
  onClick?: () => void;
}

export function CasesCardTechnologyIcon({ src, name, onClick }: CasesCardTechnologyIconProps) {
  return (
    <Stack
      onClick={onClick}
      justifyContent={"center"}
      alignItems={"center"}
      mt={1}
      bgcolor={"rgba(10, 10, 10, .50)"}
      sx={{
        cursor: onClick ? "pointer" : undefined,
        userSelect: "none",
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
