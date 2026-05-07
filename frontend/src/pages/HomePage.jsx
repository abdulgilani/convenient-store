import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { useConvenientStore } from "../store/product";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { fetchProducts, products } = useConvenientStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("Products: ", products);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r,blue.400, pink.400)"}
          bgClip="text"
          textAlign={"center"}
        >
          Current Products 🚀
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text fontSize={"xl"} color={"gray.500"} fontWeight={"bold"}>
            No products available.{" "}
            <Link to={"/create"}>
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                Create Product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
