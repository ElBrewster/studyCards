// import { useEffect } from "react";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Add from "./pages/Add";
import Flash from "./pages/Flash";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/home" element={<Home />}></Route>
          <Route path="/browse" element={<Browse />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/flash" element={<Flash />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

// ! important
// TODO: THIS is a TODO comment
// ? This is a question comment
// * This is a highlighted comment