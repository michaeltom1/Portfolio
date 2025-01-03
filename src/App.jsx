import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import OfflineIndicator from "./components/OfflineIndicator";
export default function App() {
  return (
    <>
      <OfflineIndicator />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
