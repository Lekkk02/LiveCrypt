import React from "react";
import Image from "next/image";
import Link from "next/link";
function header() {
  return (
    <nav className="flex flex-row justify-evenly p-2 bg-black">
      <div className="flex flex-1">
        <Link href="/">
          <Image
            src="/react.png"
            className="bg-white rounded-full ml-4 cursor-pointer"
            width={64}
            height={48}
          ></Image>
        </Link>
      </div>
      <div className="flex flex-row space-x-4 self-center text-white">
        <Link href="/about" className="font-bold text-sm">
          About us
        </Link>
        <Link href="/crypt" className="font-bold text-sm">
          Cryptos
        </Link>
        <Link href="/changes" className="font-bold text-sm">
          Statistics
        </Link>
      </div>
    </nav>
  );
}

export default header;
