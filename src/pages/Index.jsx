// Complete the Index page component for WizForBiz T-Shirt Store
import { Box, Button, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Cool Cat T-Shirt",
      price: "$19.99",
      imageUrl: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb29sJTIwY2F0JTIwdC1zaGlydHxlbnwwfHx8fDE3MTQxMDk4OTN8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "Vintage Rock Band T-Shirt",
      price: "$29.99",
      imageUrl: "https://images.unsplash.com/photo-1509281373149-e957c6296406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcm9jayUyMGJhbmQlMjB0LXNoaXJ0fGVufDB8fHx8MTcxNDEwOTg5M3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "Funny Quote T-Shirt",
      price: "$15.99",
      imageUrl: "https://images.unsplash.com/photo-1507120410856-1f35574c3b45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdW5ueSUyMHF1b3RlJTIwdC1zaGlydHxlbnwwfHx8fDE3MTQxMDk4OTN8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box p={5}>
      <Heading mb={6} textAlign="center">
        WizForBiz T-Shirt Store
      </Heading>
      <Flex wrap="wrap" justifyContent="center" alignItems="center">
        {products.map((product) => (
          <Box key={product.id} p={5} bg={useColorModeValue("gray.100", "gray.700")} borderRadius="lg" m={3} maxW="sm">
            <Image borderRadius="md" src={product.imageUrl} alt={product.name} />
            <Stack>
              <Text fontWeight="bold" fontSize="xl">
                {product.name}
              </Text>
              <Text fontSize="lg">{product.price}</Text>
              <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
                Add to Cart
              </Button>
            </Stack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Index;
