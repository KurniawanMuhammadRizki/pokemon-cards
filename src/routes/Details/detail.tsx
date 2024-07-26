import CardDetail from "../../component/cardDetail";
import NavBar from "../../component/navbar";
import pokeImg from "../../assets/image 11.png";
import { useParams } from "react-router-dom";
// import usePokemonDetails from "../hooks/usePokemonDetail";
import usePokemonDetails from "../../hooks/usePokemonDetail";
import { useState } from "react";
import { Pokemon } from "../Home/home";
import Loading from "../../component/loading";

interface DetailProps {
  name: string;
}
const Detail: React.FC = () => {
  const isSearch: boolean = true;
  const { name } = useParams();
  const { pokemonDetails, loading, error } = usePokemonDetails(name || "");
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center">
      {loading ? (
        <div className="w-[320px] h-[667px] bg-primary-dark flex align-middle justify-center">
          <Loading />
        </div>
      ) : (
        <div className="w-[320px] h-[667px] bg-primary-dark">
          <NavBar />
          <div className="pl-[26px] pt-[26px] text-search-color font-normal text-xl">
            #{pokemonDetails?.id}
          </div>
          <div className="flex justify-center">
            {pokemonDetails?.artworkFront ? (
              <div>
                <img
                  className={`w-52 h-52 ${isLoading ? "hidden" : "block"}`}
                  src={pokemonDetails?.artworkFront}
                  alt=""
                  onLoad={handleImageLoad}
                />
                {isLoading && <Loading />}
              </div>
            ) : (
              // Render fallback content if no image URL is available
              <p>No image available</p>
            )}
          </div>
          <div className="text-font-white font-DM-sans font-bold text-4xl pl-6 mb-1">
            {name}
          </div>
          <CardDetail
            health={pokemonDetails?.health || 0}
            attack={pokemonDetails?.attack || 0}
            defence={pokemonDetails?.defense || 0}
          />
        </div>
      )}
    </div>
  );
};

export default Detail;
