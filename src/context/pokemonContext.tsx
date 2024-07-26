// import {
//   createContext,
//   useState,
//   useEffect,
//   ReactNode,
//   useContext,
// } from "react";

// export interface Pokemon {
//   name: string;
//   url: string;
// }

// export interface PokemonContextType {
//   pokemonList: Pokemon[];
//   loading: boolean;
//   error: unknown;
//   setSortByField: (query: string) => void;
// }

// const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

// export default PokemonContext;

// const LIST_LOCAL_STORAGE_NAME = "pokemonListStorage";

// export const PokemonProvider: React.FC<{ children: JSX.Element }> = ({
//   children,
// }) => {
//   const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<unknown>(null);
//   const [sortByField, setSortByField] = useState<string>("");

//   //const MAX_FETCH_DATA = 10000;
//   useEffect(() => {
//     const fetchPokemonList = async () => {
//       setLoading(true);
//       try {
//         setLoading(true);
//         let filteredResults: Pokemon[];
//         const storedDetail = localStorage.getItem(LIST_LOCAL_STORAGE_NAME);
//         if (storedDetail && storedDetail.length > 0) {
//           const parsedData: Pokemon[] = JSON.parse(storedDetail);
//           filteredResults = parsedData;
//         } else {
//           const response = await fetch(
//             `https://pokeapi.co/api/v2/pokemon?limit=20`
//           );
//           if (!response.ok) {
//             throw new Error("Failed to fetch Pokémon.");
//           }
//           const data = (await response.json()) as { results: Pokemon[] };
//           filteredResults = data.results;
//           // Do filtering based on the query string
//           localStorage.setItem(
//             LIST_LOCAL_STORAGE_NAME,
//             JSON.stringify(filteredResults)
//           );
//         }

//         // if (searchQuery) {
//         //   const regex = new RegExp(searchQuery, 'i'); // Case-insensitive regex
//         //   filteredResults = filteredResults.filter(pokemon => regex.test(pokemon.name));
//         // }

//         if (sortByField) {
//           const sorted = filteredResults.sort((a: any, b: any) => {
//             const nameA = a.name.toLowerCase();
//             const nameB = b.name.toLowerCase();
//             if (nameA < nameB) return -1;
//             if (nameA > nameB) return 1;
//             return 0;
//           });
//           const finalList = sorted.map((each: any) => {
//             const data: Pokemon = {
//               name: each?.name || "",
//               url: "",
//             };
//             return data;
//           });
//           filteredResults = finalList;
//         }

//         //const cappedResults = filteredResults.slice(0, 20); // Cap the results to max 20 items
//         setPokemonList(filteredResults);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchPokemonList();
//   }, [sortByField]);

//   const value: PokemonContextType = {
//     pokemonList,
//     loading,
//     error,
//     setSortByField,
//   };

//   return (
//     <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
//   );
// };

// export { PokemonContext };

import { createContext, useState, useEffect } from "react";

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonContextType {
  pokemonList: Pokemon[];
  loading: boolean;
  error: unknown;
  setSortByField: (query: string) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export default PokemonContext;

const LIST_LOCAL_STORAGE_NAME = "pokemonListStorage";

export const PokemonProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);
  const [sortByField, setSortByField] = useState<string>("");

  //const MAX_FETCH_DATA = 10000;
  useEffect(() => {
    const fetchPokemonList = async () => {
      setLoading(true);
      try {
        setLoading(true);
        let filteredResults: Pokemon[];
        const storedDetail = localStorage.getItem(LIST_LOCAL_STORAGE_NAME);
        if (storedDetail && storedDetail.length > 0) {
          const parsedData: Pokemon[] = JSON.parse(storedDetail);
          filteredResults = parsedData;
        } else {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=200&offset=200`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch Pokémon.");
          }
          const data = (await response.json()) as { results: Pokemon[] };
          filteredResults = data.results;
          // Do filtering based on the query string
          localStorage.setItem(
            LIST_LOCAL_STORAGE_NAME,
            JSON.stringify(filteredResults)
          );
        }

        // if (searchQuery) {
        //   const regex = new RegExp(searchQuery, 'i'); // Case-insensitive regex
        //   filteredResults = filteredResults.filter(pokemon => regex.test(pokemon.name));
        // }

        if (sortByField == "asc") {
          const sorted = filteredResults.sort((a: any, b: any) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          });
          const finalList = sorted.map((each: any) => {
            const data: Pokemon = {
              name: each?.name || "",
              url: "",
            };
            return data;
          });
          filteredResults = finalList;
        }
        if (sortByField == "desc") {
          const sorted = filteredResults.sort((a: any, b: any) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA > nameB) return -1;
            if (nameA < nameB) return 1;
            return 0;
          });
          const finalList = sorted.map((each: any) => {
            const data: Pokemon = {
              name: each?.name || "",
              url: "",
            };
            return data;
          });
          filteredResults = finalList;
        }

        //const cappedResults = filteredResults.slice(0, 20); // Cap the results to max 20 items
        setPokemonList(filteredResults);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, [sortByField]);

  const value: PokemonContextType = {
    pokemonList,
    loading,
    error,
    setSortByField,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

export { PokemonContext };
