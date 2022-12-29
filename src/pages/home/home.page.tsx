import Lottie from "react-lottie-player";
import rocketLottieAnimation from "../../assets/rocket-animation.json";

export function HomePage() {
  return (
    <div>
      <Lottie
        animationData={rocketLottieAnimation}
        style={{
          width: "200px",
        }}
      />
    </div>
    // <Box>
    //   <Flex>
    //     <Box maxWidth={"600px"}>
    //       {/*<Lottie animationData={rocketLottieAnimation} width={100} height={100} />*/}
    //     </Box>
    //     {/* <Box> */}
    //     {/*  <Text variant={"title"} color={"light"}> */}
    //     {/*    Hello, I&apos;m Gabriel Silva */}
    //     {/*  </Text> */}
    //     {/*  <Text variant={"thinTitle"} color={"light"}> */}
    //     {/*    And I&apos;m a Backend Software Developer */}
    //     {/*  </Text> */}
    //     {/* </Box> */}
    //   </Flex>
    // </Box>
  );
}
