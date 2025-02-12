import React, { useEffect, useRef, useState } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { ThemeHand } from "../context/ThemeContext";
import { HiArrowCircleUp } from "react-icons/hi";
import { IconContext } from "react-icons";
import {
  faker,
  faker as fakerUSA,
  fakerES_MX as fakerMX,
  fakerIT as fakerI,
} from "@faker-js/faker";
import "../styles/PersonGenerator.css";

function PersonGenerator({ region }) {
  const { theme, setTheme } = ThemeHand();
  const [data, setData] = useState([]);
  const dataRef = useRef(null);
  const dTable = document.getElementById("dataTable");
  const tableBody = document.querySelector("#dataTable tbody");
  const [firstRender, setRender] = useState(true);

  useEffect(() => {
    setData([]);
    const clearTable = () => {
      if (!firstRender) {
        while (tableBody.rows.length != 20) {
          tableBody.removeChild(tableBody.firstChild);
        }
      } else {
        setRender(false);
      }
    };
    clearTable();
    regionSwitch(region);
  }, [region]);

  function regionSwitch(r) {
    switch (r) {
      case "MX":
        dataGenMX();
        break;
      case "USA":
        dataGenUSA();
        break;
      case "ITA":
        dataGenITA();
        break;
    }
  }

  function dataGenMX() {
    for (let x = 1; x < 21; x++) {
      let randomID = faker.string.uuid();
      let name = fakerMX.person.firstName() + " " + fakerMX.person.lastName();
      let location =
        fakerMX.location.streetAddress() + ", " + fakerMX.location.city();
      let phone = fakerMX.phone.number({ style: "national" });
      let jsonData = JSON.stringify({
        randomID,
        name,
        location,
        phone,
      });
      setData((current) => [...current, JSON.parse(jsonData)]);
    }
    return data;
  }

  function dataGenUSA() {
    for (let x = 1; x < 21; x++) {
      let randomID = faker.string.uuid();
      let name = fakerUSA.person.firstName() + " " + fakerUSA.person.lastName();
      let location =
        fakerUSA.location.streetAddress() + ", " + fakerUSA.location.city();
      let phone = fakerUSA.phone.number({ style: "national" });
      let jsonData = JSON.stringify({
        randomID,
        name,
        location,
        phone,
      });
      setData((current) => [...current, JSON.parse(jsonData)]);
    }
    return data;
  }

  function dataGenITA() {
    for (let x = 1; x < 21; x++) {
      let randomID = faker.string.uuid();
      let name = fakerI.person.firstName() + " " + fakerI.person.lastName();
      let location =
        fakerI.location.streetAddress() + ", " + fakerI.location.city();
      let phone = fakerI.phone.number({ style: "national" });
      let jsonData = JSON.stringify({
        randomID,
        name,
        location,
        phone,
      });
      setData((current) => [...current, JSON.parse(jsonData)]);
    }
    return data;
  }

  function showData() {
    return data.map((usr) => (
      <tr key={usr.randomID}>
        <td>{usr.randomID}</td>
        <td>{usr.name}</td>
        <td>{usr.location}</td>
        <td>{usr.phone}</td>
      </tr>
    ));
  }

  function loadMore() {
    setData([]);
    regionSwitch(region);
    data.map((e) => {
      var row = dTable.insertRow(-1);
      var rID = row.insertCell(0);
      var name = row.insertCell(1);
      var addr = row.insertCell(2);
      var phone = row.insertCell(3);
      rID.innerHTML = e.randomID;
      name.innerHTML = e.name;
      addr.innerHTML = e.location;
      phone.innerHTML = e.phone;
    });
  }

  return (
    <>
      <DownloadTableExcel
        filename="data"
        sheet="users"
        currentTableRef={dataRef.current}
      >
        <button type="button" className="btn btn-secondary btn-sm">
          Export to Excel
        </button>
      </DownloadTableExcel>
      <br />
      <br />
      <table
        className={
          !theme
            ? "table table-striped table-bordered"
            : "table table-dark table-striped table-bordered"
        }
        ref={dataRef}
        id="dataTable"
      >
        <thead>
          <tr>
            <th scope="col">Random ID</th>
            <th scope="col">Name</th>
            <th scope="col">Address, City</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">{showData()}</tbody>
      </table>
      <div className="bottom-div">
        <button type="button" className="btn btn-link" onClick={loadMore}>
          Add More Data
        </button>
        <a href="#" title="Scroll to Top" className="goUp">
          <IconContext.Provider value={{ size: "3em" }}>
            <HiArrowCircleUp />
          </IconContext.Provider>
        </a>
      </div>
    </>
  );
}

export default PersonGenerator;
