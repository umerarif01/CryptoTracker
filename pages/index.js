import Head from 'next/head'
import CoinsList from '../Components/Coinslist'


export default function Home({filteredCoins}) {
  return (
    <div>
      <Head>
        <title>CryptoTracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <h1 className="flex text-3xl font-bold justify-center">CryptoTracker</h1>
     <CoinsList filteredCoins={filteredCoins} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  );

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins
    }
  };
};