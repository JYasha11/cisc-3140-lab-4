import { BrowserRouter, Routes, Router, Route, Link, NavLink } from "react-router-dom";
import PostPage from "./pages/PostPage";
import CustomBtn from "./components/CustomBtn";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/post" element={<CustomBtn/>} />
    </Routes>
  </BrowserRouter>
);
}

export default App;
