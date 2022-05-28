import axios from "axios";
import React, { useState } from "react";
import List from "./list";

const BaseUrl = "https://api.postalpincode.in/pincode/";
// const BaseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
// {city name}&appid={}";
const Home = () => {
  // const [CityName, setCityName] = useState();
  const [PinCode, setPinCode] = useState();
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        "".concat(BaseUrl).concat(PinCode)
        // .concat("&appid=55b0d989d530fb1ffb7307c3dae8a838")
      )
      .then((response) => {
        setData(response.data[0].PostOffice);
        // console.log(response.data[0].PostOffice);
      });
  };

  return (
    <div>
      {/* <form>
        <label> CityName: </label>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => setCityName(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form> */}
      {/* ------------------------------pincode------------------------------- */}
      <div className="pincodeform">
        <form>
          <label> Pincode: </label>
          <input
            type="number"
            placeholder="PinCode"
            name="PinCode"
            onChange={(e) => setPinCode(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </form>
      </div>

      <div>
        <List item={data} />
      </div>
    </div>
  );
};

export default Home;
