
function SearchBar({ ...rest }) {
    return (
        <div>
           <div className="mb-16 flex items-center w-[300px]">
        
         <input className="bg-purple-900 p-4 rounded h-full w-full border-none " { ...rest }/>
         
           </div> 
        </div>
    )
}

export default SearchBar
