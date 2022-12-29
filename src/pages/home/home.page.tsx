import Lottie from "react-lottie-player";
import programmingLottieAnimation from "../../assets/programming_computer.json";
import { Box, Flex, Text } from "../../components";

export function HomePage() {
  return (
    <Box>
      <Flex>
        <Box>
          <Text variant={"title"} color={"light"}>
            Hello, I&apos;m Gabriel Silva
          </Text>
          <Text variant={"thinTitle"} color={"light"}>
            And I&apos;m a Backend Software Developer
          </Text>
        </Box>
        <div>
          <img
            src={
              "https://chefbob.com.br/wp-content/uploads/2021/05/2021-05-12-como-deixar-os-gatos-mais-tranquilos.jpg"
            }
            width={"400px"}
            height={"300px"}
          />
          <Lottie
            animationData={programmingLottieAnimation}
            style={{
              width: "800px",
              height: "500px",
            }}
          />
        </div>
      </Flex>
    </Box>
  );
}
