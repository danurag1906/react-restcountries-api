import React from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'
import './SingleCountry.css'

const SinglePost = ({allCountries,isLoading}) => {

  const {numericCode} =useParams()
  const selectedCountry=allCountries.find(selectedCountry=>(selectedCountry.numericCode).toString()===numericCode)
  const history=useNavigate()

  const handleBack=()=>{
    history('/')
  }

  return (
    <>
    {isLoading && <p>Loading data please wait...</p>}
    {!isLoading && selectedCountry &&
    <main className="single-country-main">
      <div className="button" onClick={handleBack} >Back</div>
      <div className="content">
        <div className="image-container">
          <img src={selectedCountry.flags.svg} alt="country flag" />
        </div>
        <div className="right">
          <h3 className="country">{selectedCountry.name}</h3>
          <div className="middle">
            <div className="r-left">
                <div className="native-name">
                  <span>Native Name : </span>
                  <p>{selectedCountry.nativeName}</p>
                </div>
                <div className="population">
                  <span>Population : </span>
                  <p>{(selectedCountry.population).toLocaleString('en-US')}</p>
                </div>
                <div className="region">
                  <span>Region : </span>
                  <p>{selectedCountry.region}</p>
                </div>
                <div className="sub-region">
                  <span>Sub Region : </span>
                  <p>{selectedCountry.subregion}</p>
                </div>
                <div className="capital">
                  <span>Capital : </span>
                  <p>{selectedCountry.capital}</p>
                </div>
            </div>
            <div className="r-right">
                <div className="toplevel-domain">
                  <span>Top Level Domain : </span>
                  <p>{selectedCountry.topLevelDomain}</p>
                </div>
                <div className="currencies">
                  <span>Currencies : </span>
                  {(selectedCountry.currencies).map(currency=>(
                    <p key={currency.code} >{currency.name}</p>
                  ))}
                </div>
                <div className="languages">
                  <span>Languages : </span>
                  {(selectedCountry.languages).map(language=>(
                    <p key={language.iso639_1} >{language.name}</p>
                  ))}
                </div>
            </div>
          </div>
          <div className="border-contries">
            <span className='border-span' >Border Countries : </span>
            {(selectedCountry.borders).map(border=>(
              <p>{border}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
    }

    {!selectedCountry &&
      <>
      <h2>Post Not Found</h2>
      <p>Well, that's disappointing. </p>
      <p>
        <Link to='/' >Visit Our Homepage</Link>
      </p>
    </>
    }
    </>
  )
}

export default SinglePost