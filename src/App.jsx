import { Route, Routes } from "react-router-dom";
import Trending from "./components/Trending";
import Home from "./components/Home";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import TvShow from "./components/TvShow";
export default function App() {
  return (
    <div className=" w-screen  flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TvShow />} />
      </Routes>

    </div>
  )
}