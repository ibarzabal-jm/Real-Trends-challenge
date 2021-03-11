import {Pokemon} from "~/pokemons/types";

export interface Vote {
  user: string;
  pokemon: Pokemon["id"];
  review?: string;
}
