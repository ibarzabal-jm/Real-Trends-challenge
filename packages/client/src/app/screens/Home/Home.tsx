import React from "react";
import {Stack} from "@chakra-ui/layout";
import {Image} from "@chakra-ui/image";
import {Button} from "@chakra-ui/button";

import logo from "~/assets/logo.svg";
import {useInformation, useResetVotes} from "~/hooks/useServerContext";
import VotesList from "~/app/votes/VotesList";
import PokemonCard from "~/app/pokemon/PokemonCard";
import VoteBar from "~/app/votes/VoteBar";

const Home: React.FC = () => {
  const [pokemons, votes] = useInformation();
  const resetVotes = useResetVotes();

  return (
    <Stack align="center">
      <Image src={logo} width={180} />

      {pokemons.map((pokemon) => {
        const pokemonVotes = votes.filter((votes) => votes.pokemon === pokemon.id);
        const percentage = (pokemonVotes.length * 100) / votes.length;

        return (
          <Stack key={pokemon.id}>
            <Stack isInline>
              <PokemonCard pokemon={pokemon} />
              <VoteBar percentage={percentage} />
            </Stack>
            <VotesList votes={pokemonVotes} />
          </Stack>
        );
      })}

      <Button colorScheme="teal" onClick={resetVotes}>
        Reset Votation
      </Button>
    </Stack>
  );
};

export default Home;
