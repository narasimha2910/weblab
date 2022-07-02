import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";
import { lazy, Suspense } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "../components/loader";

const Home = lazy(() => import("../pages/home"));
const Game = lazy(() => import("../pages/game"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <div className="font-mono bg-[#CED89E]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:gameId" element={<Game />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

// Join Server
// Game Page:
//  Answer Question
//  Choose Answer
//  Get Results
