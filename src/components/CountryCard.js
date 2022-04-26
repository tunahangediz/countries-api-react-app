import React from 'react'



function CountryCard({ country, setSelectedCountry }) {
    return (
        <div onClick={() => setSelectedCountry(country)} className="country-card ">

            <img style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "5px 5px 0 0" }} src={country.flags.svg}></img>

            <h4 style={{ fontSize: "1.2rem" }}>{country.name.common || country.name}</h4>

            <p> <span style={{ fontWeight: "500" }} > Population:</span>  {country.population} </p>
            <p><span style={{ fontWeight: "500" }}>Region: </span> {country.region}</p>
            <p><span style={{ fontWeight: "500" }}>Capital: </span> {country.capital}</p>


        </div>
    )
}

export default CountryCard
