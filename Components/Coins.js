import Image from 'next/image';
import Link from 'next/link';

function Coins({
    name,
    symbol,
    image,
    price,
    marketcap,
    volume,
    priceChange,
    id,
   }) 
     {
    return (
      <Link href='/coin/[id]' as={`/coin/${id}`}>
        <a>
      <div className="flex justify-center sm:">
        <div className="flex flex-row justify-start items-center h-20 
        border-b-2 border-purple-400 hover:bg-gray-200">
            <div className="flex items-center pr-6">
            <Image src={image} 
            className="mr-2"
            width={30}
            height={30}
            />
            <h1 className="text-base w-40">{name}</h1>
            <h1 className="uppercase">{symbol}</h1>
            </div>
            <div className="flex text-right justify-between w-full">
            <p className="w-24">${price}</p>
            <p className="w-40">${volume.toLocaleString()}</p>
            {priceChange < 0 ? (
                <p className="text-red-500 w-24">
                  {priceChange.toFixed(2)}%
                </p>
             ) : (
                <p className="text-green-500 w-24">
                  {priceChange.toFixed(2)}%
                </p>
                )}
            <p className="w-56">
                Mkt Cap: ${marketcap.toLocaleString()}
              </p>       
              </div>
        </div>
      </div>
        </a>
      </Link>
    )
}
export default Coins
