import Image from 'next/image';


function Coins({
    name,
    symbol,
    image,
    price,
    marketcap,
    volume,
    priceChange,
   }) 
     {
    return (
      <div className="flex justify-center">
        <div className="flex flex-row justify-start items-center h-20 ">
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
            <p>${price}</p>
            <p>${volume.toLocaleString()}</p>
            {priceChange < 0 ? (
                <p className="text-red-700 w-24">
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
        <div className="border-b-2 border-red-600" />
      </div>
     
    )
}

export default Coins
