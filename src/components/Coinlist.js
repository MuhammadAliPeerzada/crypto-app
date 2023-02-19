import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Coinstable() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/")
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-lg container-fluid">
      <table className="table-container table mt-3">
        <thead className="bg-light">
          <tr key="tr">
            <th key="coin" scope="col">
              Coin Logo
            </th>
            <th key="coin" scope="col">
              Coin Name
            </th>
            <th key="coin" scope="col">
              Coin Symbol
            </th>
            <th key="coin" scope="col">
              Current Graph
            </th>
          </tr>
        </thead>
        <tbody>
          {coins.map((item, index) => {
            return (
              <>
                <tr key={item.id}>
                  <td>
                    <img src={item.image.small} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.symbol}</td>
                  <td>
                    <img src={`https://www.coingecko.com/coins/${index + 1}/sparkline`} alt="" />
                  </td>
                  <td>{<Link to={`/Coindetail/${item.id}`}>More Details</Link>}</td>
                </tr>
              </>
                    
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Coinstable;
