import usePokemonDetails from "../hooks/usePokemonDetail";
import { useNavigate } from "react-router-dom";
import Loading from "./loading";
interface CardProps {
  name: string;
}
import { useState } from "react";

const Card: React.FC<CardProps> = ({ name }) => {
  const { pokemonDetails, loading, error } = usePokemonDetails(name);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div
      className="bg-card-bg rounded-lg px-4 pt-10 pb-1 flex flex-col"
      onClick={() => navigate(`/details/${name}`)}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {pokemonDetails?.artworkFront ? (
            <div>
              <img
                className={` ${isLoading ? "hidden" : "block"}`}
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
          <div className="font-DM-Sans text-card-name text-sm font-bold text-center justify-center">
            {name}
          </div>
        </>
      )}
    </div>
  );
};
export default Card;
