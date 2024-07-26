import { useState, useContext, useEffect, useCallback } from "react";
import Card from "../../component/card";
import Loading from "../../component/loading";
import NavBar from "../../component/navbar";
import SortBar from "../../component/sortBar";
import { ColumnsContext } from "../../context/columsContext";
import usePokemon from "../../hooks/usePokemon";

export interface Pokemon {
  name: string;
}
const Home: React.FC = () => {
  //   const { pokemonList, loading } = usePokemonList();
  const { pokemonList, loading, setSortByField } = usePokemon();
  const [searchText, setSearchText] = useState("");
  const { columnsView } = useContext(ColumnsContext);
  const [columRender, setColumRender] = useState("");

  const [filteredList, setFilteredList] = useState<Pokemon[]>([]);

  const filterPokemon = useCallback(
    (text: string) => {
      setSearchText(text);
      const newList = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredList(newList);
    },
    [pokemonList]
  );

  // const filterPokemon = (text: string) => {
  //   setSearchText(text);
  //   const newList = pokemonList.filter((pokemon) =>
  //     pokemon.name.toLowerCase().includes(text.toLowerCase())
  //   );
  //   setFilteredList(newList);
  // };

  useEffect(() => {
    if (columnsView) setColumRender(columnsView);
  }, [columnsView]);

  return (
    <div className="flex justify-center ">
      <div className="w-[320px] h-[667px] overflow-auto bg-primary-dark">
        {/* <NavBar />
        <div className="grid grid-cols-2 px-5 pt-4 gap-4 pb-4">
          {pokemonList.map((item, index) => (
            <Card name={item.name} key={index} />
          ))} */}
        <div className="">
          <NavBar onSearch={(text) => filterPokemon(text)} />
          <SortBar />
        </div>
        <div className={`grid ${columRender} px-5 pt-4 gap-4 pb-4`}>
          {loading ? (
            <div className="justify-center">
              <Loading />
            </div>
          ) : searchText ? (
            filteredList.map((item, index) => (
              <Card name={item.name} key={index} />
            ))
          ) : (
            pokemonList.map((item, index) => (
              <Card name={item.name} key={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
