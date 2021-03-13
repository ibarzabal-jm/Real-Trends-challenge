import {Pokemon} from "~/app/pokemons/types";

export interface Vote {
  user: string;
  pokemon: Pokemon["id"];
  review?: string;
}
