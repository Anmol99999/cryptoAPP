import { useState } from "react";
import styled from "styled-components";
import CoinbaseLogo from "../assets/cb-logo.png";
import Image from "next/image";
import Link from "next/dist/client/link";
import {
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineGift,
} from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { RiCoinsLine, RiNotification3Line } from "react-icons/ri";
import { MdWeb } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";

import { navItems } from "../static/navItems";

const Sidebar = ({ setColor, color }) => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title);

  let settheme = () => {
    if (color == "black") return setColor("slate-800");
    else return setColor("black");
  };

  return (
    <Wrapper>
      <LogoContainer>
        <h3 className=" text-blue-500 font-bold text-4xl text-center my-2k">
          Crytpo<span className=" text-blue-800">Coin</span>
        </h3>
      </LogoContainer>
      <NavItemsContainer>
        <NavItem>
          <NavIcon>
            <AiOutlinePlusCircle />
          </NavIcon>
          <NavTitle>Pay</NavTitle>
        </NavItem>
      </NavItemsContainer>
      <NavItemsContainer>
        <NavItem>
          <NavIcon>
            <RiCoinsLine />
          </NavIcon>
          <a
            href="https://crytpocoin.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Coins
          </a>
        </NavItem>
      </NavItemsContainer>
      <NavItemsContainer>
        <NavItem>
          <NavIcon>
            <BiTrendingUp />
          </NavIcon>
          <Link href="/Transactions" target="_self">
            Transaction List
          </Link>
        </NavItem>
      </NavItemsContainer>
      <NavItemsContainer>
        <NavItem>
          <NavIcon>
            <BsPersonPlus />
          </NavIcon>
          <a href="/CoinsAr" target="_self">
            CoinsAr
          </a>
        </NavItem>
      </NavItemsContainer>
      <NavItemsContainer>
        <NavItem>
          <NavIcon>
            <BiTrendingUp />
          </NavIcon>
          <a href="/Tutorial" target="_self">
            Tutorial
          </a>
        </NavItem>
      </NavItemsContainer>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  height: calc(100vh);
  border-right: 1px solid #282b2f;
  width: calc(22rem - 16px - 16px);
  /* TRouBLe */
  padding: 0 1rem;
`;
const LogoContainer = styled.div`
  /* TRouBLe */
  margin: 1.5rem 0;
`;

const Logo = styled.div`
  width: 44%;
  object-fit: contain;
  margin-left: 1.5rem;
`;

const NavItemsContainer = styled.div`
  margin-top: 3rem;
  &:hover {
    cursor: pointer;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  height: 2.4rem;
  &:hover {
    background-color: #141519;
  }
`;

const NavIcon = styled.div`
  background-color: #141519;
  padding: 0.7rem;
  border-radius: 50%;
  margin: 0 1rem;
  display: grid;
  place-items: center;
`;

const NavTitle = styled.div``;
