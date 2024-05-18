import { mockPokemonsData } from "../mock/pokeData";

export default function Data() {
  return (
    <div>
      {mockPokemonsData.map((pikachu, index) => {
        return (
          <div key={index}>
            <h1>{pikachu.name}</h1>
            <img
              alt={pikachu.name}
              src={
                pikachu.sprites.front_default || pikachu.sprites.back_default
              }
            />
          </div>
        );
      })}
    </div>
  );
}
