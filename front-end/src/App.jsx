import { BrowserRouter, Routes, Router, Route, Link, NavLink } from "react-router-dom";
import PostPage from "./pages/PostPage";
import './App.css';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/post" element={<PostPage/>} />
    </Routes>
  </BrowserRouter>
);
}

export default App;
