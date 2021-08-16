import Layout from "../../Components/Layout";
import { useState} from "react";

const Coin = ({ coin,history }) => {
   const [coinData, setcoinData] = useState([]);
  
   console.log(history);
  //  setcoinData(history);
  return (
    <Layout>
      <div>
        <div >
          <img
            src={coin.image.large}
            alt={coin.name}
           
          />
          <h1>Name: {coin.name}</h1>
          <p >Symbol: {coin.symbol}</p>
          <p>
            Price: ${coin.market_data.current_price.usd}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
  `);

  const reshis = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=360`);
  
  const data = await res.json();
  const datahis = await reshis.json();

  return {
    props: {
      coin: data,
      history: datahis,
    }
  };
}


  

  