import { GlassedContainer } from "../../glassed-container";
import { Box, Stack, Typography } from "@mui/material";
import { differenceInYears } from "date-fns";

export interface SkillCardProps {
  name: string;
  icon: string;
  description: string;
  startUsing: Date;
}

export function SkillCard({ name, icon, description, startUsing }: SkillCardProps) {
  const yearsOfExperience = differenceInYears(new Date(), startUsing);

  return (
    <GlassedContainer position={"relative"} height={"100%"}>
      <Box position={"absolute"} top={-15} right={-15}>
        <img src={icon} width={"60rem"} alt={`${name} icon`} />
      </Box>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"}>
        <Stack>
          <Typography textAlign={"center"} variant={"h1"} fontSize={"2rem"} fontWeight={"600"} color={"white"}>
            {name}
          </Typography>
          <Typography textAlign={"center"} variant={"subtitle1"} color={"white"} fontSize={"1.25rem"}>
            {yearsOfExperience} years of experience
          </Typography>
        </Stack>
      </Stack>
      <Typography mt={2} textAlign={"center"} color={"white"} variant={"body2"} lineHeight={"1.5rem"}>
        {description}
      </Typography>
    </GlassedContainer>
  );
}
