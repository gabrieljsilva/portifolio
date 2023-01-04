import { useTheme } from "styled-components";
import { Box, FlexRow, GlassedCard, Text } from "../../components";

export function SkillsPage() {
  const theme = useTheme();
  return (
    <Box minHeight={theme.getRemainingScreenHeight()}>
      <FlexRow justifyContent={"space-between"} width={"100vw"}>
        <div>
          <GlassedCard width={"20rem"} height={"15rem"}>
            <FlexRow alignItems={"center"} justifyContent={"space-around"} width={"100%"}>
              <Text textAlign={"center"} marginBottom={"1rem"} variant={"cardTitle"} color={"light"}>
                Javascript
              </Text>
            </FlexRow>
            <Text textAlign={"center"} color={"light"} variant={"cardBody"} lineHeight={"1.5rem"}>
              Javascript is my main language since I started my professional career as a programmer. I have extensive
              experience in your ecosystem both front-end and back-end.
            </Text>
          </GlassedCard>
        </div>

        <div>
          <GlassedCard width={"20rem"} height={"15rem"}>
            <FlexRow alignItems={"center"} justifyContent={"space-around"} width={"100%"}>
              <Text textAlign={"center"} marginBottom={"1rem"} variant={"cardTitle"} color={"light"}>
                Node.js
              </Text>
            </FlexRow>
            <Text textAlign={"center"} color={"light"} variant={"cardBody"} lineHeight={"1.5rem"}>
              Node.js is the main technology I use for backend development. I have been working professionally with this
              technology since 2019 for the development of APIs and SSR applications.
            </Text>
          </GlassedCard>
        </div>

        <div>
          <GlassedCard width={"20rem"} height={"15rem"}>
            <FlexRow alignItems={"center"} justifyContent={"space-around"} width={"100%"}>
              <Text textAlign={"center"} marginBottom={"1rem"} variant={"cardTitle"} color={"light"}>
                React.js
              </Text>
            </FlexRow>
            <Text textAlign={"center"} color={"light"} variant={"cardBody"} lineHeight={"1.5rem"}>
              I&apos;ve been using React.js for 2 years now for UI development (like this one). Despite being primarily
              a Backend developer, I still have some experience with React.js.
            </Text>
          </GlassedCard>
        </div>
      </FlexRow>

      <FlexRow justifyContent={"space-between"} width={"100vw"} marginTop={"1rem"}>
        <div>
          <GlassedCard width={"20rem"} height={"15rem"}>
            <FlexRow alignItems={"center"} justifyContent={"space-around"} width={"100%"}>
              <Text textAlign={"center"} marginBottom={"1rem"} variant={"cardTitle"} color={"light"}>
                Typescript
              </Text>
            </FlexRow>
            <Text textAlign={"center"} color={"light"} variant={"cardBody"} lineHeight={"1.5rem"}>
              I adopted Typescript about 3 years ago when I saw some colleagues using it in some projects and I decided
              to test it too. I currently use it professionally in Backend and Frontend projects.
            </Text>
          </GlassedCard>
        </div>

        <div>
          <GlassedCard width={"20rem"} height={"15rem"}>
            <FlexRow alignItems={"center"} justifyContent={"space-around"} width={"100%"}>
              <Text textAlign={"center"} marginBottom={"1rem"} variant={"cardTitle"} color={"light"}>
                Docker
              </Text>
            </FlexRow>
            <Text textAlign={"center"} color={"light"} variant={"cardBody"} lineHeight={"1.5rem"}>
              I&apos;ve been using docker and docker-compose for about 3 years, I had the first contact with some
              colleagues when they showed me the ease of uploading development environments quickly and soon I started
              to study and use it in my own personal and professional projects.
            </Text>
          </GlassedCard>
        </div>

        <div>
          <GlassedCard width={"20rem"} height={"15rem"}>
            <FlexRow alignItems={"center"} justifyContent={"space-around"} width={"100%"}>
              <Text textAlign={"center"} marginBottom={"1rem"} variant={"cardTitle"} color={"light"}>
                GraphQL
              </Text>
            </FlexRow>
            <Text textAlign={"center"} color={"light"} variant={"cardBody"} lineHeight={"1.5rem"}>
              I started using GraphQL about 2 years ago in a project for a client of a company I worked for. We had a
              big project and the characteristics matched the GraphQL proposal and we used it as a pilot project (and it
              was a success) since then I&apos;ve been using it in projects that seem to be convenient.
            </Text>
          </GlassedCard>
        </div>
      </FlexRow>
    </Box>
  );
}
