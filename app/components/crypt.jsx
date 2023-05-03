import React from "react";
import Image from "next/image";
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
    <div className="self-center flex-col space-y-4 my-6">
      {data.map((coin) => {
        return (
          <div className="flex space-x-2 bg-slate-200 shadow-lg border border-gray-400 border-solid">
            <div className="flex">
              <Image
                src="/react.png"
                height={38}
                width={38}
                className="self-center"
              ></Image>
            </div>

            <div className="flex-row space-y-1">
              <h1>{coin.name}</h1>
              <p>Price: {coin.price}</p>
              <p>Post date: {coin.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default crypt;
