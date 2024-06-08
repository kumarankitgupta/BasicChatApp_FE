import { Route, Routes } from "react-router-dom";
import Home from "../homepage/home";
function index() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="home" element={<div>Home Route</div>} />
        <Route path="chat" element={<div>Chat Route</div>} />
      </Route>
    </Routes>
  );
}

export default index;
