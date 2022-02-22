import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import RepositoryDetail from "./components/RepositoryDetail";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/noxtton" element={<Landing />} />
        <Route
          path="/noxtton/repository/:user/:repository"
          element={<RepositoryDetail />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
