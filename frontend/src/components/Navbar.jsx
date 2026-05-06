import { Card, Flex } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Card maxW={"100%"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text></Text>
      </Flex>
    </Card>
  );
};

export default Navbar;
