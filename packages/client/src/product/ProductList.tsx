import React from "react";
import {Image} from "@chakra-ui/image";
import {Heading, Stack, Text} from "@chakra-ui/layout";

import {Vote} from "~/votes/types";
import VotesList from "~/votes/VotesList";

import {Product} from "./types";

interface Props {
  products: Product[];
  votes: Vote[];
}

const ProductList: React.FC<Props> = ({products, votes}) => {
  return (
    <Stack isInline>
      {products.map((product) => {
        const productVotes = votes.filter((votes) => votes.product === product.key);

        return (
          <Stack key={product.key}>
            <Heading>{product.title}</Heading>
            <Image maxH={256} maxW={256} rounded={8} src={product.image} />
            <Text>{product.description}</Text>
            <VotesList votes={productVotes} />
          </Stack>
        );
      })}
    </Stack>
  );
};

export default ProductList;
