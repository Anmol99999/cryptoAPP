import React from "react";
import Link from "next/dist/client/link";

const Tutorial = () => {
  return (
    <div>
      <div className="bg-black text-white border-2">
        <Link href="/">Back</Link>
      </div>
      <div className="relative py-16 bg-black text-white overflow-hidden  px-20">
        <h3 className=" text-blue-500 font-bold text-4xl text-center my-2k">
          Crytpo<span className=" text-blue-800">Coin</span>
        </h3>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                Introducing
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                CryptoTrading for Beginners
              </span>
            </h1>
            <p className="mt-8 text-2xl text-gray-500 leading-8">
              So, youve decided to invest in cryptocurrency. However, youre
              confused and don t know where to start - you're wondering, how to
              buy cryptocurrency? With so many options available, it can be
              difficult to choose the best option for you. Plus, there are lots
              of things you need to think about before you start making
              payments.
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>
              Each website has different fees. Some are cheap, some are not so
              cheap. Make sure you know how much the fees cost before setting up
              an account on any website. You dont want to waste your time
              verifying yourself and then find out the fees are too high!
            </p>
            Not all cryptocurrencies are available for purchase on every
            website. You will have to find a website that sells the
            cryptocurrency that you want to buy.
            <p>
              As with any investment, you should never invest more than you can
              afford. I recommend speaking to a financial adviser first. With
              those 5 factors in mind, we can move on. When you buy your
              cryptocurrency, though, where are you going to store it? Ill give
              you a hint: its not your bank account.
            </p>
            <p>
              A cryptocurrency wallet is where you store your cryptocurrencies
              after you have bought them. You can compare a cryptocurrency
              wallet with your bank account. In the same way that you store
              traditional currencies (USD, JPY, EUR etc.) in your bank account,
              you will store your cryptocurrencies in your crypto wallet.
            </p>
            <blockquote>
              <p>
                There are a lot of easy-to-use and safe options to choose from.
                It is important that you choose a highly-secure wallet, because
                if your cryptocurrency gets stolen from your wallet, you can
                never get it back.
              </p>
            </blockquote>
            <p>
              The wallet you need will depend on which cryptocurrency you want
              to buy. If you buy Bitcoin, for example, youll need a wallet that
              can store Bitcoin. If you buy Litecoin, youll need a wallet that
              can store Litecoin.
            </p>
            <figure>
              <img
                className="w-full rounded-lg"
                src="https://wallpapercave.com/wp/wp4678507.jpg"
                alt=""
                width={1310}
                height={873}
              />
              <figcaption>
                Luckily, there are a lot of good wallets to choose from that can
                store multiple cryptocurrencies. Exodus, for example, is a
                software wallet that can store Bitcoin, Ethereum, Litecoin,
                Dash, EOS and more!
              </figcaption>
            </figure>
            <h2>Where to Buy Cryptocurrency?</h2>
            <p>
              To learn how to buy cryptocurrency, you’ll first need to know
              where to buy cryptocurrency. Just a few years ago, there were only
              a few places to buy and sell cryptocurrencies. Now, though, there
              are a lot more! Let’s look at the different places and ways you
              can get your crypto.
            </p>
            <p>
              Once your account is set up, you can start buying cryptocurrency
              on the exchange. Most exchanges are just like stock-trading
              platforms: you can buy and hold your cryptocurrency, or you can
              exchange it for another cryptocurrency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
