import React from "react";
import Link from "next/dist/client/link";

const CoinsAr = () => {
  return (
    <div className=" bg-gray-900">
      <div className="text-white border-2 inline-block mt-6 border-white rounded-lg p-2">
        <Link href="/">Back</Link>
      </div>
      <h3 className=" text-blue-500 font-bold text-4xl text-center p-6">
        Crytpo<span className=" text-blue-800">Coin</span>
      </h3>

      <div className="sketchfab-embed-wrapper inline-block m-4">
        {" "}
        <iframe
          title="Bitcoin crypto coin"
          frameBorder={0}
          allowFullScreen=""
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking=""
          execution-while-out-of-viewport=""
          execution-while-not-rendered=""
          web-share=""
          width={1280}
          height={480}
          src="https://sketchfab.com/models/b437946ec69b4f5086138255bb687a8e/embed"
        >
          {" "}
        </iframe>{" "}
        <p
          style={{
            fontSize: 13,
            fontWeight: "normal",
            margin: 5,
            color: "#4A4A4A",
          }}
        >
          {" "}
        </p>
      </div>
      <div className="sketchfab-embed-wrapper inline-block m-4">
        {" "}
        <iframe
          title="Etherium crypto coin"
          frameBorder={0}
          allowFullScreen=""
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking=""
          execution-while-out-of-viewport=""
          execution-while-not-rendered=""
          web-share=""
          width={500}
          height={800}
          src="https://sketchfab.com/models/c5522e6024694c7bbebd69abf3fcbeea/embed"
        >
          {" "}
        </iframe>{" "}
      </div>
      <div className="sketchfab-embed-wrapper inline-block m-4">
        {" "}
        <iframe
          title="Ethereum Digital Crypto Coin"
          frameBorder={0}
          allowFullScreen=""
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking=""
          execution-while-out-of-viewport=""
          execution-while-not-rendered=""
          web-share=""
          width={500}
          height={800}
          src="https://sketchfab.com/models/870657c1fd0041eb9b550d6177fffe3f/embed"
        >
          {" "}
        </iframe>{" "}
      </div>
      <div className="sketchfab-embed-wrapper m-4">
        {" "}
        <iframe
          title="Crypto Coins"
          frameBorder={0}
          allowFullScreen=""
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking=""
          execution-while-out-of-viewport=""
          execution-while-not-rendered=""
          web-share=""
          width={1280}
          height={480}
          src="https://sketchfab.com/models/0702d6f1a5684e8eb3aa54d213e233b2/embed"
        >
          {" "}
        </iframe>{" "}
        <p
          style={{
            fontSize: 13,
            fontWeight: "normal",
            margin: 5,
            color: "#4A4A4A",
          }}
        ></p>
      </div>
    </div>
  );
};

export default CoinsAr;
