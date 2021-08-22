import Flip from 'react-reveal/Flip';

function SearchBar({ ...rest }) {
    return (
        <div>
           <div className="py-10 flex justify-center ">
        
         <input className="bg-purple-900 p-4 rounded h-full w-full border-none 
         mb-[-30px] w-[300px] " { ...rest }/>
         
           </div>
           <Flip right>
         <h1 className="flex justify-center text-2xl font-bold py-10  text-purple-500">Cryptocurrency Prices and Market Capitalization</h1>
           </Flip>
        </div>
    )
}

export default SearchBar
