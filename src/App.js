import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import NavMenu from "./component/NavMenu";
import axios from "axios";
import { useEffect, useState } from "react";
import lazyLoader from "./lazyload/Lazyload";

const History = lazyLoader(() => import("./lazyload/HistoryPage"));
const Rocket = lazyLoader(() => import("./lazyload/RocketPage"));
const Launch = lazyLoader(() => import("./lazyload/LaunchPage"));
function App() {
  const [rocket, setRocket] = useState([]);
  const [launch, setLaunch] = useState([]);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://api.spacexdata.com/v4/rockets");
        setRocket(result.data);
        console.log("rocket",result.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://api.spacexdata.com/v5/launches"
        );
        console.log("launches",result.data);
        setLaunch(result.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://api.spacexdata.com/v4/history");
        setHistory(result.data);
        console.log("history",result.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavMenu />}>
            <Route index element={<Home />} />
            <Route path="history" element={<History history={history} />} />
            <Route path="rocket" element={<Rocket rocket={rocket} />} />
            <Route path="launch" element={<Launch launch={launch} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
