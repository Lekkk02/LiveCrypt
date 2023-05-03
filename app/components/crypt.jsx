import React from "react";

function crypt() {
  let data = [
    {
      name: "Ethereum",
      price: 14.66,
      date: "2023-05-02",
    },
    {
      name: "Bitcoin",
      price: 14.66,
      date: "2023-05-02",
    },
    {
      name: "ByteCoin",
      price: 14.66,
      date: "2023-05-02",
    },
    {
      name: "TetherUSD",
      price: 14.66,
      date: "2023-05-02",
    },
  ];

  return (
    <div className="self-center flex space-x-6">
      {data.map((coin) => {
        return <div>{coin.name} </div>;
      })}
    </div>
  );
}

export default crypt;
