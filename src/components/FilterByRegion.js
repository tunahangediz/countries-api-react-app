import React, { useState } from 'react'

function FilterByRegion({ fetchCountriesByRegion }) {

    const [display, setDisplay] = useState("none")
    const [value, setValue] = useState("Region")



    return (
        <div style={{ width: "190px" }} className="dropdown">
            <div onClick={() => display === "none" ? setDisplay("") : setDisplay("none")} className="dropdown-header" >{value}</div>
            <div style={{ display }} className="dropdown-content" >
                <p onClick={(e) => {
                    fetchCountriesByRegion(e.target.innerText)
                    setValue(e.target.innerText)
                    display === "none" ? setDisplay("") : setDisplay("none")
                }}>Africa</p>
                <p onClick={(e) => {
                    fetchCountriesByRegion(e.target.innerText)
                    setValue(e.target.innerText)
                    display === "none" ? setDisplay("") : setDisplay("none")
                }}>Americas</p>
                <p onClick={(e) => {
                    fetchCountriesByRegion(e.target.innerText)
                    setValue(e.target.innerText)
                    display === "none" ? setDisplay("") : setDisplay("none")
                }}>Asia</p>
                <p onClick={(e) => {
                    fetchCountriesByRegion(e.target.innerText)
                    setValue(e.target.innerText)
                    display === "none" ? setDisplay("") : setDisplay("none")
                }}>Europe</p>
                <p onClick={(e) => {
                    fetchCountriesByRegion(e.target.innerText)
                    setValue(e.target.innerText)
                    display === "none" ? setDisplay("") : setDisplay("none")
                }}>Oceania</p>
            </div>

        </div>
    )
}

export default FilterByRegion
