import {
  Route,
  Router,
  Routes,
} from "../node_modules/react-router-dom/dist/index";
import "./App.css";
import Detail from "./routes/Details/detail";
import Home from "./routes/Home/home";

// import usePokemonList from './hooks/usePokemonList'
// import usePokemonDetails from './hooks/usePokemonDetail'

function App() {
  // Use the custom hook to fetch pokemon list
  // Example below
  // const list = usePokemonList();
  // const detail = usePokemonDetails("bulbasaur");

  return (
    //   {/* Start the development here */}
    //   {/* Use react-router-dom Expected routes:  */}
    //   {/* 1. Home path: "/" */}
    //   {/* 1. Details path: "/details:" */}
    //   {/* <Routes>
    //     <Route path="/" element={<Home />} />
    //   </Routes> */}

    // {/* </div> */}
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/details" element={<Detail name="" />} /> */}
        <Route
          path="/details/:name" // Menyertakan parameter ":name"
          element={<Detail />}
        />
      </Routes>
    </>
  );
}

export default App;
