import React, { useContext, useEffect, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import Link from "next/dist/client/link";

const TransactionsCard = (props) => {
  const shortenAddress = (address) =>
    `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;

  let ethvalue = (value) => {
    value = value / 1000000;
    value = value / 1000000;
    value = value / 1000000;
    return value;
  };

  let gasvalue = (value) => {
    value = value / 1000000;
    return value;
  };
  return (
    <div
      className=" bg-gradient-to-l  from-cyan-300 to-sky-900 opacity-100 m-4 flex flex-1
    2xl:min-w-[450px]
    2xl:max-w-[500px]
    sm:min-w-[270px]
    sm:max-w-[300px]
    min-w-full
    flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a
            href={`https://rinkeby.etherscan.io/address/${props.userdata.from}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white text-base">
              From: {shortenAddress(props.userdata.from)}
            </p>
          </a>
          <a
            href={`https://rinkeby.etherscan.io/address/${props.userdata.to}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white text-base">
              To: {shortenAddress(props.userdata.to)}
            </p>
          </a>
          <p className="text-white text-base">
            {props.userdata.value != 0
              ? `Amount: ${ethvalue(props.userdata.value)}`
              : `Gas Fee: ${gasvalue(props.userdata.gas)}`}
            ETH
          </p>
        </div>
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold"></p>
        </div>
      </div>
    </div>
  );
};

function Transactions() {
  const [List, SetList] = useState([]);
  const { address, connectWallet } = useWeb3();

  useEffect(() => {
    const geturl = async () => {
      let result = await fetch(
        `https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=K63538Y5KSEH4TF86TXICR7FCYZ8TXXRJD`
      ).then((result) => result.json());
      console.log(result);
      let c = result.result;
      console.log(c);
      SetList(c);
    };

    geturl();
  }, []);

  return (
    <div>
      <div className="bg-black text-white border-2">
        <Link href="/">Back</Link>
      </div>
      <div className="flex bg-black w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
        <div className="flex flex-col md:p-12 py-12 px-4">
          <h3 className=" text-blue-500 font-bold text-4xl text-center my-2">
            Crytpo<span className=" text-blue-800">Coin</span>
          </h3>
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
          <div className="flex flex-wrap justify-center items-center mt-10">
              { (List===[])?(<div className="text-white w-full h-full">No Transaction</div>):(<div className="flex flex-wrap justify-center items-center mt-10">
            {List.map((userList) => (
              <TransactionsCard key={userList.timeStamp} userdata={userList} />
            ))}
          </div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
