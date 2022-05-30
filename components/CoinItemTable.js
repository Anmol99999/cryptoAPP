import { useEffect, useState } from "react";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import { FaCheck } from "react-icons/fa";
import { client } from "../lib/sanity";
import axios from "axios";

const CoinItemTable = ({
  token,
  sanityTokens,
  thirdWebTokens,
  walletAddress,
  i,
}) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [builder] = useState(imageUrlBuilder(client));
  const [balance, setBalance] = useState(0);
  const [bt, setBt] = useState(0);
  const [et, setEt] = useState(0);
  const [sl, setSl] = useState(0);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    let getPrices = async () => {
      let EthereumPrice = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr"
      );
      EthereumPrice = EthereumPrice.data.ethereum.inr;
      setEt(EthereumPrice);

      let bitcoinPrice = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr"
      );
      bitcoinPrice = bitcoinPrice.data.bitcoin.inr;
      setBt(bitcoinPrice);

      let SolPrice = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=inr"
      );
      SolPrice = SolPrice.data.solana.inr;
      setSl(SolPrice);
    };
    getPrices();
  }, [sl, bt, et]);

  useEffect(() => {
    setPrices([et, bt, sl]);
    const getBalance = async () => {
      let activeTwToken;

      thirdWebTokens.map((twToken) => {
        if (twToken.address === token.contractAddress) {
          activeTwToken = twToken;
        }
      });

      const balance = await activeTwToken.balanceOf(walletAddress);

      setBalance(balance.displayValue.split(".")[0]);
    };

    const getImgUrl = async () => {
      const imgUrl = builder.image(token.logo.asset._ref).url();
      setImageUrl(imgUrl);
    };

    getImgUrl();
    getBalance();
  }, []);

  return (
    <Wrapper>
      <Main>
        <Icon>
          <img src={imageUrl} alt="" />
        </Icon>
        <NameDetails>
          <Name>{token.name}</Name>
          <Symbol>{token.symbol}</Symbol>
        </NameDetails>
      </Main>
      <Balance>
        {balance} {token.symbol}
      </Balance>
      <Balance>
        {"(Rs"} {prices[i] + ")"}
      </Balance>
    </Wrapper>
  );
};

export default CoinItemTable;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.3rem;
  &:hover {
    background-color: #0e0f14;
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;
  & > img {
    /* margin: -0.5rem 1rem; */
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const NameDetails = styled.div``;

const Name = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
`;

const Symbol = styled.div`
  color: #888f9b;
  font-size: 0.8rem;
`;

const Balance = styled.div``;

const IsSelected = styled.div`
  margin-left: 0.5rem;
  color: #3773f5;
`;
