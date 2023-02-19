import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Coindetail() {
  const [coin, setCoin] = useState({});
  const { id } = useParams();
  console.log(coin);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="coinDetail">
          <div className="coinSide">
            {coin.image && <img src={coin.image.large} alt="" />}
            <h1 className="ms-5">{coin.id}</h1>
          </div>
          <br/>
          <h3>Rank: {coin.market_cap_rank}</h3>
          {coin.market_data && (
            <h3>Current Price: $ {coin.market_data.current_price.usd}</h3>
          )}
          {coin.market_data && (
            <h3>Market cap: $ {coin.market_data.market_cap.usd}</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default Coindetail;
