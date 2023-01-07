import React from 'react'
import './SearchBar.css'


const SearchBar = ({search,setSearch}) => {
  const handleSubmit=(e)=>{
    e.preventDefault()
    setSearch(search)
  }
  return (
    <form className='searchForm' onSubmit={handleSubmit} >
        <input 
            type="text"
            placeholder='Search for a country...'
            value={search}
            
            onChange={(e)=>setSearch(e.target.value)}
            
          />
    </form>
  )
}

export default SearchBar