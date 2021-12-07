import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Blog from "./pages/blog"
import Main from "./pages/main"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
