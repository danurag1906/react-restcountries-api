import React from 'react'
import { Link } from 'react-router-dom'
import './Country.css'


const Country = ({country}) => {
  return (
    <Link style={{textDecoration:'none'}} to={`/country/${country.numericCode}`} >
        <div className='country-main'>
            <div className="image-div">
                <img className='image' src={country.flags.svg} alt="country flag" />
            </div>
            <div className="country-data">
                <div className="country-name">
                    <h5>{country.name}</h5>
                </div>
                <div className="country-population">
                    <span>Population : </span>
                    <p>{(country.population).toLocaleString('en-US')}</p>
                </div>
                <div className="country-region">
                    <span>Region : </span>
                    <p>{country.region}</p>
                </div>
                <div className="country-capital">
                    <span>Capital : </span>
                    <p>{country.capital}</p>
                </div>
                    
            </div>
        </div>       
    </Link>
  )
}

export default Country