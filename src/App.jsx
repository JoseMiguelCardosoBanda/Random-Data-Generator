import React, { useState } from "react";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa6";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { ThemeHand } from "./context/ThemeContext";
import { createPortal } from "react-dom";
import PersonGenerator from "./components/PersonGenerator";
import Help from "./components/Help";

function App() {
  const [region, setRegion] = useState("MX");
  const [openModal, setOpenModal] = useState(false);
  const { theme, setTheme } = ThemeHand();

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <div
      className={
        !theme
          ? "min-vh-100 bg-light text-dark"
          : "min-vh-100 bg-dark text-white"
      }
    >
      <nav className="navbar bg-success border border-secondary-subtle rounded-3">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <h2>Random Data Generator</h2>
            </div>
            <div className="col-auto">
              <select
                className="form-select"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value="MX">Mexico</option>
                <option value="USA">United States</option>
                <option value="ITA">Italy</option>
              </select>
            </div>
            <div className="col-auto">
              <button
                className={!theme ? "btn btn-dark" : "btn btn-light"}
                onClick={changeTheme}
                title="Change Theme"
              >
                {!theme ? <FaLightbulb /> : <FaRegLightbulb />}
              </button>
            </div>
            <div className="col-auto">
              <button
                className="btn btn-primary"
                title="Help"
                onClick={() => setOpenModal(true)}
              >
                <BsFillQuestionCircleFill />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <br />
      {createPortal(
        <Help open={openModal} onClose={() => setOpenModal(false)} />,
        document.body
      )}
      <PersonGenerator region={region} />
      <br />
    </div>
  );
}

export default App;
