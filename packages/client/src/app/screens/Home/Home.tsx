import React from "react";
import {Stack} from "@chakra-ui/layout";
import {Image} from "@chakra-ui/image";

import logo from "~/assets/logo.svg";
import {useInformation} from "~/hooks/useServerContext";
import ProductList from "~/product/ProductList";

const Home: React.FC = () => {
  const [products, votes] = useInformation();

  return (
    <Stack align="center">
      <Image src={logo} width={180} />
      <ProductList products={products} votes={votes} />
    </Stack>
  );
};

export default Home;
