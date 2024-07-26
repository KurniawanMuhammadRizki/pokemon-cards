// import { useState, useEffect } from "react";

// interface Pokemon {
//   name: string;
//   url: string;
// }

// const usePokemonList = () => {
//   const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<unknown>(null);

//   useEffect(() => {
//     const fetchPokemonList = async () => {
//       try {
//         const response = await fetch(
//           "https://pokeapi.co/api/v2/pokemon?limit=20"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch Pokémon.");
//         }
//         const data = await response.json();
//         console.log(data);
//         setPokemonList(data.results);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchPokemonList();
//   }, []);

//   return { pokemonList, loading, error };
// };

// export default usePokemonList;

import { useState, useEffect } from "react";

interface Pokemon {
  name: string;
  url: string;
}

const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        setLoading(true);

        const storedPokemonList = sessionStorage.getItem("pokemonList");
        if (storedPokemonList) {
          setPokemonList(JSON.parse(storedPokemonList));
          setLoading(false);
          return;
        }
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon.");
        }
        const data = await response.json();
        console.log(data);
        setPokemonList(data.results);
        sessionStorage.setItem("pokemonList", JSON.stringify(data.results));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, []);

  return { pokemonList, loading, error };
};

export default usePokemonList;
