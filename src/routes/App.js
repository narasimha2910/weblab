import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";
import { lazy, Suspense } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "../components/loader";

const Home = lazy(() => import("../pages/home"));
const Game = lazy(() => import("../pages/game"));
const Join = lazy(() => import("../pages/join"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <div className="font-mono bg-bgTheme max-w-screen-2xl">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/game/:gameId" element={<Game />} />
            <Route path="/join/:gameId" element={<Join />} />
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
