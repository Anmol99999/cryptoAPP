import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);

const Dashboard = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdWebTokens, setThirdWebTokens] = useState([]);
  const [color, setColor] = useState("slate-800");

  useEffect(() => {
    const getSanityAndThirdWebTokens = async () => {
      const coins = await fetch(
        "https://z471zsmd.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
      );
      const sanityTokens = (await coins.json()).result;

      setSanityTokens(sanityTokens);
      setThirdWebTokens(
        sanityTokens.map((token) => sdk.getTokenModule(token.contractAddress))
      );
    };
    getSanityAndThirdWebTokens();
  }, []);

  return (
    <>
      <div
        style={{
          height: 62,
          backgroundColor: "#000000",
          overflow: "hidden",
          boxSizing: "border-box",
          border: "1px solid #282E3B",
          borderRadius: 4,
          textAlign: "right",
          lineHeight: 14,
          blockSize: 62,
          fontSize: 12,
          fontFeatureSettings: "normal",
          textSizeAdjust: "100%",
          boxShadow: "inset 0 -20px 0 0 #262B38",
          padding: 0,
          margin: 0,
          width: "100%",
        }}
      >
        <div style={{ height: 40, padding: 0, margin: 0, width: "100%" }}>
          <iframe
            src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1530&invert_hover=no"
            width="100%"
            height="36px"
            scrolling="auto"
            marginWidth={0}
            marginHeight={0}
            frameBorder={0}
            border={0}
            style={{ border: 0, margin: 0, padding: 0 }}
          />
        </div>
        <div
          style={{
            color: "#626B7F",
            lineHeight: 14,
            fontWeight: 400,
            fontSize: 11,
            boxSizing: "border-box",
            padding: "2px 6px",
            width: "100%",
            fontFamily: "Verdana, Tahoma, Arial, sans-serif",
          }}
        ></div>
      </div>
      <div className="h-6 bg-white"></div>

      <Wrapper
        className={` bg-black overflow-hidden`}
        style={{ overflow: "hidden" }}
      >
        <Sidebar setColor={setColor} color={color} />

        <MainContainer>
          <Header
            walletAddress={address}
            sanityTokens={sanityTokens}
            thirdWebTokens={thirdWebTokens}
          />
          <Main
            walletAddress={address}
            sanityTokens={sanityTokens}
            thirdWebTokens={thirdWebTokens}
          />
        </MainContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  color: white;
  overflow: hidden;
`;

const MainContainer = styled.div`
  flex: 1;
`;

export default Dashboard;
