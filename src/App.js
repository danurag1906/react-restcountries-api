import './App.css';
import {Routes,Route,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import AllPosts from './components/AllPosts';
import SingleCountry from './components/SingleCountry';
import Missing from './components/Missing';
import axios from 'axios'
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DropDown from './components/DropDown';
import FiltersComponent from './components/FiltersComponent';

function App() {

  const AllCountriesUrl='https://restcountries.com/v2/all'

  const [allCountries,setAllCountries]=useState([]);
  const [isLoading,setIsLoading]=useState(true)
  const [search,setSearch] =useState('')
  const [searchResult,setSearchResult]=useState([])
  const [filter,setFilter]=useState('');
  


  useEffect(()=>{
    axios.get(AllCountriesUrl).then((response)=>{
      setAllCountries(response.data);
      setIsLoading(false)
    })
  },[])

  useEffect(()=>{
    const filteredData=allCountries.filter((country)=>(
      ((country.name).toLowerCase()).includes(search.toLowerCase())
    ))

    setSearchResult(filteredData)

  },[allCountries,search,filter])

  useEffect(()=>{
    const filteredData=allCountries.filter(country=>(
      ((country.region).toLowerCase()).includes(filter.toLowerCase())
    ))

    setSearchResult(filteredData)

  },[filter])

  return (
    <div className="App">
      <Header  />
      <Routes>
        <Route exact path='/' element={<AllPosts allCountries={searchResult} isLoading={isLoading} search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />} />
        <Route exact path='/country/:numericCode' element={<SingleCountry allCountries={allCountries} isLoading={isLoading} />}/>
        <Route path='*' element={<Missing/>} />
      </Routes>
    </div>
  );
}

export default App;
