import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Thankyoupage from "./components/Card/Thankyoupage.js";

import Footer from "./components/Footer";
import MbNav from "./components/MbNav";
import NavbarXl from "./components/NavbarXl";
import { loadProgressBar } from "axios-progress-bar";
import "axios-progress-bar/dist/nprogress.css";
import "react-toastify/dist/ReactToastify.css";

loadProgressBar();

function App() {
  return (
    <>
      <NavbarXl />
      <MbNav />

      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          {/* <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="add" element={<Add />} />
          <Route path="edit" element={<Edit />} /> */}
          <Route path="/tkpage" element={<Thankyoupage />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Page in Deveploment!</p>
              </main>
            }
          />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
