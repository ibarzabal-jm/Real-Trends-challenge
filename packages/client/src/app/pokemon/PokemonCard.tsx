import React from "react";
import {Heading, Text, Stack} from "@chakra-ui/layout";
import {Image} from "@chakra-ui/image";

import {Pokemon} from "./types";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({pokemon}) => {
  return (
    <Stack
      background={pokemon.types[0]}
      border="15px solid #e7c30d"
      className="pokemon-card"
      fontFamily="arial, sans-serif"
      fontWeight="bold"
      justify="center"
      padding={4}
      rounded={15}
      textTransform="capitalize"
    >
      <Stack isInline align="center" fontSize="xl" justify="space-between">
        <Text>{pokemon.name}</Text>
        <Text>Vote: !{pokemon.id}</Text>
      </Stack>
      <Stack
        background={pokemon.types[0]}
        backgroundBlendMode="overlay"
        backgroundImage="url(src/assets/backgroundCard.jpg)"
        backgroundSize="cover"
        border="4px solid #e7c30d"
      >
        <Image alignSelf="center" alt={pokemon.name} maxH={256} maxW={256} src={pokemon.image} />
      </Stack>
      <Stack isInline justify="center">
        {pokemon.types.map((type) => (
          <Text key={type}>{type}</Text>
        ))}
      </Stack>
    </Stack>
  );
};

export default PokemonCard;
