import Image from 'next/image';

function Coins({name,symbol,image}) {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{symbol}</h1>
            <Image src={image} 
            width={70}
            height={40}
            />
        </div>
    )
}

export default Coins
