import Text from "./pages/Text";

import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Atoz from "./pages/Atoz";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Text />} />
          <Route path="ATOZ" element={<Atoz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
