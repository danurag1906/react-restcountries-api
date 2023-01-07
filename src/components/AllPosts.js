import React from 'react'
import './AllPosts.css'
import Country from './Country'
import FiltersComponent from './FiltersComponent'


const AllPosts = ({allCountries,isLoading,search,setSearch,filter,setFilter}) => {
  return (
    <>
    <div>
    <FiltersComponent search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
    {isLoading && <p>Loading data.... Please wait!</p> }
    { !allCountries && <p>No such Country found...</p> }

    <main className='AllPosts'>
        {allCountries.map(country=>(
            <Country key={country.numericCode} country={country} />
        ))}
    </main>
    </div>
    </>
    
  )
}

export default AllPosts