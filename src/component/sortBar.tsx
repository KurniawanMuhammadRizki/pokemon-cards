import singleImg from "../assets/Group 27.png";
import doubleImg from "../assets/Rectangle 54.png";
import lineImg from "../assets/Vector 21.png";
import { useContext, useState } from "react";
import { ColumnsContext } from "../context/columsContext";
import usePokemon from "../hooks/usePokemon";

const SortBar: React.FC = () => {
  const { setSortByField } = usePokemon();
  const { setColumnsView } = useContext(ColumnsContext);
  const handleButtonClick1 = () => setColumnsView("grid-cols-1");
  const handleButtonClick2 = () => setColumnsView("grid-cols-2");
  const [selectedSort, setSelectedSort] = useState(""); // Internal state for selected sort option

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSort(event.target.value);
    setSortByField(event.target.value); // Update external state based on selection
  };
  return (
    <div className="mx-5 my-4 flex flex-row justify-between ">
      <select
        className="rounded h-[32px] w-[186px] bg-sort-color font-normal text-base text-search-color font-DM-Sans"
        name=""
        id=""
        value={selectedSort}
        onChange={handleChange}>
        <option value="">Sort by</option>
        <option value="asc">Name A-Z</option>
        <option value="desc">Name Z-A</option>
      </select>
      <div className="flex justify-between">
        <button
          type="button"
          className=" w-9 h-8 bg-sort-color text-search-color rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md focus:outline-none focus:bg-toogle-active"
          data-layout="1"
          onClick={handleButtonClick1}>
          <img className="ml-3.5" src={doubleImg} alt="" />
        </button>
        <div className=" ">
          <img src={lineImg} alt="" />
        </div>
        <button
          type="button"
          className="w-9 h-8 bg-sort-color text-search-color rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md focus:outline-none focus:bg-toogle-active"
          data-layout="2"
          onClick={handleButtonClick2}>
          <img className="ml-3" src={singleImg} alt="" />
        </button>
      </div>
    </div>
  );
};
export default SortBar;
