
function Search({search,handleSearch}){
   
    return (
    <input type="text" value={search} onChange={handleSearch}/>
    )
}
export default Search