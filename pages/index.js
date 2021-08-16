import Head from 'next/head'
import CoinsList from '../Components/Coinslist'
import SearchBar from '../Components/SearchBar';
import { useState } from 'react';
import Layout from '../Components/Layout';

export default function Home({filteredCoins}) {
  const [search, setSearch] = useState('');

  const allCoins = filteredCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  
  const handleChange = e => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };
  return (
    <div> 
       <Layout>
       <div className="flex flex-col items-center mt-2 text-white">
       <SearchBar 
       type='text' placeholder='Search' onChange={handleChange}
       />
       </div>
       
     <CoinsList filteredCoins={allCoins} />
     </Layout>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false'
  );

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins
    }
  };
};