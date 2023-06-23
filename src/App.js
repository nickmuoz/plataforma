// App.js
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReverseCounter from "./pages/ReverseCounter";
import Signup from "./pages/Signup";

const App = () => {
  const targetDate = new Date("2023-06-30T08:00:00");
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ReverseCounter
              targetDate={targetDate}
              handleShowModal={handleShowModal}
            />
          }
          path="/"
          exact
        />
        <Route
          element={
            <Signup
              showModal={showModal}
              handleShowModal={handleShowModal}
              handleCloseModal={handleCloseModal}
            />
          }
          path="/inscribete"
          exact
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
