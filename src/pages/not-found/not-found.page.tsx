import { Stack, Typography } from "@mui/material";

export function NotFoundPage() {
  return (
    <Stack width={"100%"} height={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Typography aria-label={"not-found-message"} variant={"subtitle1"}>
        PAGE NOT FOUND
      </Typography>
    </Stack>
  );
}
