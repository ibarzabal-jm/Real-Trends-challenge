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
        const percentage = (productVotes.length * 100) / votes.length;

        return (
          <Stack key={product.key} as="section" padding={4} position="relative">
            <Stack bg="white" borderRadius="20px" position="relative" zIndex={1}>
              <Heading>{product.title}</Heading>
              <Image maxH={256} maxW={256} rounded={8} src={product.image} />
              <Text>{product.description}</Text>
              <VotesList votes={productVotes} />
            </Stack>
            <Stack
              bg={`hsl(${percentage}, 100%, 50%)`}
              borderBottomRadius={8}
              bottom={0}
              height={`${percentage}%`}
              left={0}
              position="absolute"
              transition="1s"
              width="100%"
              zIndex={0}
            />
          </Stack>
        );
      })}
    </Stack>
  );
};

export default ProductList;
