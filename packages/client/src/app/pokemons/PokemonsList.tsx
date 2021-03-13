import React from "react";
import {Image} from "@chakra-ui/image";
import {Heading, Stack, Text} from "@chakra-ui/layout";

import {Vote} from "~/app/votes/types";
import VotesList from "~/app/votes/VotesList";

import {Pokemon} from "./types";

interface Props {
  pokemons: Pokemon[];
  votes: Vote[];
}

const PokemonList: React.FC<Props> = ({pokemons, votes}) => {
  return (
    <Stack isInline>
      {pokemons.map((pokemon) => {
        const pokemonVotes = votes.filter((votes) => votes.pokemon === pokemon.id);
        const percentage = (pokemonVotes.length * 100) / votes.length;

        return (
          <Stack key={pokemon.id} as="section" padding={4} position="relative">
            <Stack bg="white" borderRadius="20px" position="relative" zIndex={1}>
              <Heading>{pokemon.name}</Heading>
              <Stack isInline justify="center">
                <Text>Vote:</Text>
                <Text fontWeight="bold">!{pokemon.id}</Text>
              </Stack>
              <Image alignSelf="center" maxH={256} maxW={256} rounded={8} src={pokemon.image} />
              <Stack isInline justify="center">
                {pokemon.types.map((type) => (
                  <Text key={type} textTransform="capitalize">
                    {type}
                  </Text>
                ))}
              </Stack>
              <VotesList votes={pokemonVotes} />
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

export default PokemonList;
