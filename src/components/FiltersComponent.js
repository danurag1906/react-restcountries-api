import React from 'react'
import SearchBar from './SearchBar'
import DropDown from './DropDown'
import './FiltersComponent.css'


const FiltersComponent = ({search,setSearch,filter,setFilter}) => {

  return (
    <div className='filtersdiv'>
        <SearchBar search={search} setSearch={setSearch}  />
        <DropDown filter={filter} setFilter={setFilter}  />
    </div>
  )
}

export default FiltersComponent