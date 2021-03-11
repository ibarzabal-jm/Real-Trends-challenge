import React from "react";
import {Stack} from "@chakra-ui/layout";
import {Image} from "@chakra-ui/image";
import {Button} from "@chakra-ui/button";

import logo from "~/assets/logo.svg";
import {useInformation, useResetVotes} from "~/hooks/useServerContext";
import PokemonList from "~/pokemons/PokemonsList";

const Home: React.FC = () => {
  const [pokemons, votes] = useInformation();
  const resetVotes = useResetVotes();

  return (
    <Stack align="center">
      <Image src={logo} width={180} />
      <PokemonList pokemons={pokemons} votes={votes} />
      <Button colorScheme="teal" onClick={resetVotes}>
        Reset Votation
      </Button>
    </Stack>
  );
};

export default Home;
