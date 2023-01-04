import { useTheme } from "styled-components";
import { ButtonOutline, Flex, FlexRow, GlassedCard, Text } from "../../components";
import { Link } from "react-router-dom";

export function AboutPage() {
  const theme = useTheme();

  return (
    <FlexRow
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"0 2rem"}
      gap={"1rem"}
      minHeight={theme.getRemainingScreenHeight()}
    >
      <div>
        <GlassedCard width={"20rem"} height={"20rem"}>
          <Text textAlign={"center"} marginBottom={"1rem"} variant={"cardTitle"} color={"light"}>
            Who am I?
          </Text>
          <Text textAlign={"center"} color={"light"} variant={"cardBody"} lineHeight={"1.5rem"}>
            Hello, my name is Gabriel de Jesus Silva, I&apos;m 22 years old and I&apos;m from Salvador, Bahia, Brazil, I
            currently live in the interior of the state of Bahia, in the city of Senhor do Bonfim.
          </Text>
        </GlassedCard>
      </div>

      <div>
        <GlassedCard width={"20rem"} height={"20rem"}>
          <Text textAlign={"center"} marginBottom={"1rem"} variant={"cardTitle"} color={"light"}>
            When did I start programming?
          </Text>
          <Text textAlign={"center"} color={"light"} variant={"cardBody"} lineHeight={"1.5rem"}>
            I&apos;ve been a developer since 2018, when I joined a technical course in computer science at the Instituto
            Federal de Educação, Ciência e Tecnologia, which I graduated in 2019. In the same year I also joined the
            higher course in Computer Science in the same institute and completed 4 semesters.
          </Text>
        </GlassedCard>
      </div>

      <div>
        <GlassedCard width={"20rem"} height={"20rem"}>
          <Text textAlign={"center"} marginBottom={"1rem"} variant={"cardTitle"} color={"light"}>
            My first professional experiences
          </Text>
          <Text textAlign={"center"} color={"light"} variant={"cardBody"} lineHeight={"1.5rem"}>
            My first professional experience was at the end of 2018, when I did an internship at a company called
            Newtic. During this period I learned to create APIs with Node.js.
          </Text>
          <Text textAlign={"center"} color={"light"} variant={"cardBody"} lineHeight={"1.5rem"}>
            Since then I have been providing services to other companies using technologies from the Javascript
            Ecosystem
          </Text>

          <Flex flexDirection={"column-reverse"} flex={1}>
            <Link to={"/cases"}>
              <ButtonOutline>See more cases</ButtonOutline>
            </Link>
          </Flex>
        </GlassedCard>
      </div>
    </FlexRow>
  );
}
