import Layout from "../../Components/Layout";
import { useState} from "react";
import Bounce from 'react-reveal/Bounce';
import { Line } from 'react-chartjs-2';


const Coin = ({ coin,history }) => {
  //  const [coinData, setcoinData] = useState([]);
  
  // console.log(coin); 
  // console.log(history);
  
  //  setcoinData(history);

  
  
  const data = {
    labels:history.prices,
    // labels: ['January', 'Februray', 'March', 'April', 'May', 'June','July',
    //  'August','September','October','November','December'],
    datasets: [
      {
        label: `${coin.name} Price for the last 1 Year`,
        data: history.prices,
        fill: false,
        backgroundColor: 'purple',
        borderColor: 'purple',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <Layout>
      <div>
        <div className="flex justify-center space-x-8 mt-10">
        <Bounce left>
          <img
            src={coin.image.large}
            alt={coin.name}
          />
            </Bounce>
            
            <Bounce right>
            <div className="pt-8 text-2xl text-purple-400 space-y-2 p-3 border-4  border-purple-400">
          <h1>
            <span className="text-purple-500 font-bold ">Name: </span> 
            {coin.name}
            </h1>
          <p>
          <span className="text-purple-500 font-bold">Symbol: </span> 
          {coin.symbol}
          </p>
          <p>
            <span className="text-purple-500 font-bold">
            Price: </span> 
            ${coin.market_data.current_price.usd}
      
          </p>
          <p>
          <span className="text-purple-500 font-bold">
          Market Cap Rank: </span> 
          {coin.market_cap_rank}
          </p>
          <p>
          <span className="text-purple-500 font-bold">
          Liquidity score: </span> 
          {coin.liquidity_score}
          </p>
         
         </div>
         </Bounce>
        </div>
        <div className="lg:ml-[500px] w-[700px] md:w-[950px] lg:w-half">
        
        <Line  
        className="pb-50 mt-10"
        options={{ maintainAspectRatio: false }}
        data={data} options={options} 
       
        />
        
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

  const reshis = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`);
  
  const data = await res.json();
  const datahis = await reshis.json();

  return {
    props: {
      coin: data,
      history: datahis,
    }
  };
}


  

  