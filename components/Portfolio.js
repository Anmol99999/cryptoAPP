import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { coins } from "../static/coins";
import Coin from "./Coin";
import BalanceChart from "./BalanceChart";
import CoinItemTable from "./CoinItemTable";
import axios from "axios";

const Portfolio = ({ walletAddress, sanityTokens, thirdWebTokens }) => {
  const [walletBalance, setWalletBalance] = useState(0);
  const [bt, setBt] = useState(0);
  const [et, setEt] = useState(0);
  const [sl, setSl] = useState(0);
  const [prices, setPrices] = useState([]);
  const tokenToUSD = {};
  const [i, seti] = useState(-1);

  for (const token of sanityTokens) {
    tokenToUSD[token.contractAddress] = Number(token.usdPrice);
  }

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
  }, []);

  useEffect(() => {
    let i = -1;
    const pricesarray = [et, bt, sl];
    console.log(pricesarray);
    const calculateTotalBalance = async () => {
      const totalBalance = await Promise.all(
        thirdWebTokens.map(async (token) => {
          const balance = await token.balanceOf(walletAddress);
          i++;
          return pricesarray[i];
        })
      );
      console.log(totalBalance);
      let total = totalBalance.reduce((acc, curr) => acc + curr, 0);
      setWalletBalance(total);
      console.log(total);
    };

    calculateTotalBalance();
  }, [thirdWebTokens]);

  return (
    <Wrapper>
      <Content>
        <Chart>
          <div>
            <Balance>
              <BalanceTitle>Portfolio Balance</BalanceTitle>
              <BalanceValue>
                {"Rs."}
                {walletBalance.toLocaleString()}
              </BalanceValue>
            </Balance>
          </div>
          <BalanceChart />
        </Chart>

        <PortfolioTable>
          <TableItem>
            <Title>Your Assets</Title>
          </TableItem>
          <Divider />
          <Table>
            <TableItem>
              <TableRow>
                <div style={{ flex: 3 }}>Name</div>
                <div style={{ flex: 2 }}>-</div>
                <div style={{ flex: 1 }}>-</div>
                <div style={{ flex: 1 }}>Balance</div>
                <div style={{ flex: 0 }}>
                  <BsThreeDotsVertical />
                </div>
              </TableRow>
            </TableItem>
            <Divider />
            <div>
              {sanityTokens.map((token) => {
                i++;
                return (
                  <CoinItemTable
                    key={token.name}
                    token={token}
                    i={i}
                    sanityTokens={sanityTokens}
                    thirdWebTokens={thirdWebTokens}
                    walletAddress={walletAddress}
                  />
                );
              })}
            </div>
          </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
  );
};

export default Portfolio;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
`;
const Content = styled.div`
  width: 100%;

  max-width: 1000px;
  padding: 2rem 1rem;
`;

const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2rem;
`;

const Balance = styled.div``;

const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`;

const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`;

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`;

const Table = styled.div`
  width: 100%;
`;

const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > th {
    text-align: left;
  }
`;

const TableItem = styled.div`
  padding: 1rem 2rem;
`;

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
