import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
  return (
    <div className=" w-screen h-screen overflow-hidden bg-[#1f1e24] flex">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  )
}