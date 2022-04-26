import React from 'react'
import { Link } from 'react-router-dom'
import CountryCard from './CountryCard'

function Countries({ countries, setSelectedCountry }) {
    return (

        <div>


            <div className="countries-container">
                {countries.map((country) => <Link to={`/${country.name.common || country.name}`}>< CountryCard setSelectedCountry={setSelectedCountry} country={country} key={Math.random() * 1000} /></Link>)}
            </div>
        </div>
    )
}

export default Countries
