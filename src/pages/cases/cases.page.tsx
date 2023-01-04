import { Box, FlexRow, GlassedCard, Text } from "../../components";
import { useTheme } from "styled-components";

export function CasesPage() {
  const theme = useTheme();
  return (
    <>
      <Box minHeight={theme.getRemainingScreenHeight()}>
        <Box minHeight={theme.getRemainingScreenHeight()}>
          <FlexRow justifyContent={"space-between"} width={"100vw"}>
            <div>
              <GlassedCard width={"20rem"} height={"15rem"}>
                <FlexRow alignItems={"center"} justifyContent={"space-around"} width={"100%"}>
                  <Text textAlign={"center"} marginBottom={"1rem"} variant={"cardTitle"} color={"light"}>
                    Takaoka Anestesia
                  </Text>
                </FlexRow>
                <Text textAlign={"center"} color={"light"} variant={"cardBody"} lineHeight={"1.5rem"}>
                  Takaoka Anesthesia is a network of anesthesiologists who hire on-demand anesthetists for hospitals or
                  surgeons. The project developed was a system of medical scales, from registration, through patient
                  care to payment.
                </Text>
              </GlassedCard>
            </div>

            <div>
              <GlassedCard width={"20rem"} height={"15rem"}>
                <FlexRow alignItems={"center"} justifyContent={"space-around"} width={"100%"}>
                  <Text textAlign={"center"} marginBottom={"1rem"} variant={"cardTitle"} color={"light"}>
                    Fleury - Escalas Médicas
                  </Text>
                </FlexRow>
                <Text textAlign={"center"} color={"light"} variant={"cardBody"} lineHeight={"1.5rem"}>
                  Fleury - Escalas Médicas was a project that I worked on from the backend to the web and mobile
                  frontend. Using Node.js, React and React Native. The idea of the project was to create a scale
                  application for doctors in the Fleury network. The objective was to facilitate the negotiation of
                  scales between the doctors.
                </Text>
              </GlassedCard>
            </div>

            <div>
              <GlassedCard width={"20rem"} height={"15rem"}>
                <FlexRow alignItems={"center"} justifyContent={"space-around"} width={"100%"}>
                  <Text textAlign={"center"} marginBottom={"1rem"} variant={"cardTitle"} color={"light"}>
                    GoHealth - NPS (Net Promoter Score)
                  </Text>
                </FlexRow>
                <Text textAlign={"center"} color={"light"} variant={"cardBody"} lineHeight={"1.5rem"}>
                  GoHealth is a company that offers a series of products for clinics and hospitals. one of these
                  products are GoHealth-NPS. This product aimed to evaluate the satisfaction and chances of promotion by
                  the patients of our clients.
                </Text>
              </GlassedCard>
            </div>
          </FlexRow>
        </Box>
      </Box>
    </>
  );
}
