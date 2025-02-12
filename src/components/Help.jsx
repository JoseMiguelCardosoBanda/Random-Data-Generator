import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { ThemeHand } from "../context/ThemeContext";
import "../styles/Help.css";

function Help({ open, onClose }) {
  const { theme, setTheme } = ThemeHand();

  if (!open) return null;

  return (
    <>
      <div className="overlay">
        <div onClick={(e) => e.stopPropagation()} className="modalContainer">
          <div className="title-container">
            <h1>Help Menu</h1>
          </div>
          <IconContext.Provider value={{ size: "2em" }}>
            <div className="modalClose">
              <p onClick={onClose} className="closeBtn">
                <AiFillCloseCircle />
              </p>
            </div>
          </IconContext.Provider>
          <div className="content">
            <h4>Selecting Region</h4>
            <p>
              To change the region of the generated data, click on the selector
              to see the options. It will reset the table length.
            </p>
            <br />
            <h4>Switch to Light and Dark Mode</h4>
            <p>
              To switch between the two theme options, click on the{" "}
              <button className={!theme ? "btn btn-dark" : "btn btn-light"}>
                {!theme ? <FaLightbulb /> : <FaRegLightbulb />}
              </button>{" "}
              button.
            </p>
            <br />
            <h4>Export Data</h4>
            <p>
              To export all the table data to an Excel file, just click on the{" "}
              <button type="button" className="btn btn-secondary btn-sm">
                Export to Excel
              </button>{" "}
              button, and the Excel file will be automatically downloaded.
            </p>
            <br />
            <h4>Add More Data</h4>
            <p>
              The{" "}
              <button type="button" className="btn btn-link">
                Add More Data
              </button>{" "}
              button, will add 20 more rows to the table.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
