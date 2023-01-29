import { Stack, Tooltip } from "@mui/material";

interface IconListItemProps {
  src: string;
  name: string;
  onClick?: () => void;
}

export function IconListItem({ src, name, onClick }: IconListItemProps) {
  return (
    <Stack
      onClick={onClick}
      justifyContent={"center"}
      alignItems={"center"}
      mx={1}
      p={1}
      bgcolor={"rgba(10, 10, 10, .65)"}
      sx={{
        cursor: onClick ? "pointer" : undefined,
        userSelect: "none",
        "&:hover": {
          background: "rgba(10, 10, 10, .85)",
        },
      }}
      borderRadius={"50%"}
    >
      <Tooltip title={name}>
        <img width={"30rem"} height={"30rem"} src={src} alt={name} />
      </Tooltip>
    </Stack>
  );
}
