import logoImg from "../assets/image 29.png";
import searchImg from "../assets/SearchImg.png";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
interface NavbarProps {
  onSearch?: (text: string) => void;
}
const NavBar: React.FC<NavbarProps> = ({ onSearch }) => {
  const navigate = useNavigate();
  const [isSearching, setIsSearching] = useState(false);

  const debounce = (func: Function, delay: number) => {
    let timeoutId: number | undefined;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedSearch = useCallback(
    debounce((text: string) => {
      if (onSearch) {
        onSearch(text);
      }
    }, 1500),
    [onSearch]
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    debouncedSearch(text);
  };

  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const text = event.target.value;
  //   if (onSearch) {
  //     onSearch(text); // Panggil fungsi onSearch yang diterima dari props
  //   }
  // };
  return (
    <div className="flex justify-between pl-[21px] pr-[27px] align-middle sticky">
      <img
        className="mt-1.5 mb-[7px] max-h-9"
        src={logoImg}
        alt=""
        onClick={() => navigate(`/`)}
      />
      {isSearching ? (
        <input
          type="text"
          placeholder="Search..."
          className="my-[11px] w-[144px] py-1.5 pl-3.5 border font-DM-Sans text-sm font-normal border-1 rounded-lg placeholder:text-search-color "
          onChange={handleSearch} // Update searchText on input change
          onBlur={() => setIsSearching(false)} // Close search on blur
        />
      ) : (
        <img
          className="w-5 h-5 mt-4 "
          src={searchImg}
          alt=""
          onClick={() => setIsSearching(true)}
        />
      )}
    </div>
  );
};

export default NavBar;
{
  /* {isSearching ? (
        <input
          type="text"
          placeholder="Search..."
          className="my-[11px] w-[144px] py-1.5 pl-3.5 border font-DM-Sans text-sm font-normal border-1 rounded-lg  placeholder:text-search-color  "
          onBlur={() => setIsSearching(false)} onChange={handleSearch}
        />
      ) : (
        <img
          className="w-5 h-5 mt-4  "
          src={searchImg}
          alt=""
          onClick={handleSearchClick}
        />
      )} */
}
