import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import './App.css';
import Countries from './components/Countries';
import DetailedCountry from './components/DetailedCountry';
import FilterByRegion from './components/FilterByRegion';
import Navbar from './components/Navbar';


function App() {

  const [countries, setCountries] = useState([])
  const [currentPage, setcurrentPage] = useState(1)
  const [searchInput, setsearchInput] = useState("")
  const [country, setCountry] = useState("")
  const [foundedCountries, setFoundedCountries] = useState([])
  const [region, setRegion] = useState("")
  const [selectedCountry, setSelectedCountry] = useState([])



  const display = {
    display: "none"
  }
  const fetchCountries = async () => {
    const res = await axios.get("https://restcountries.com/v2/all")
    setCountries(res.data)
    setFoundedCountries(res.data)
  }

  useEffect(() => {


    fetchCountries()


  }, [])


  //For pagination

  // const indexOfLast = currentPage*8
  // const indexOfFirst = indexOfLast-8;
  // const currentCountry = countries.slice(indexOfFirst,indexOfLast)


  const searchOneCountry = async (e) => {
    e.preventDefault()
    const res = await axios.get(`https://restcountries.com/v3.1/name/${searchInput}`)
    setCountry(res.data);
    console.log(country[0])

  }

  const filterCountries = (value) => {
    const name = value.toUpperCase()
    const newArr = countries.filter((country) => {
      if (country.name.toUpperCase().indexOf(name) > -1)
        return (country)
    })


    if (newArr.length >= 1) {
      setFoundedCountries(newArr)
      console.log(newArr)

    }
    else {
      setFoundedCountries(countries)
    }




  }


  const fetchCountriesByRegion = async (region) => {

    // const res = await axios.get(`https://restcountries.com/v3.1/region/${region}`)


    // setFoundedCountries(res.data);

    const arr = countries.filter((country) => country.region == region)
    setFoundedCountries(arr)





  }





  return (



    <Router>
      <div className="App container" >



        <Navbar />



        <Routes>
          <Route exact path="/" element={
            <>

              <div className="form-collapse" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>

                <div className="form-container">
                  <form style={{ height: "100%" }} onSubmit={(e) => searchOneCountry(e)}>

                    <div id="search-from" style={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <input className="form-input" onChange={(e) => filterCountries(e.target.value)} type="text" placeholder="Search country" ></input>
                      {/* <input type="submit" value="search"></input> */}
                    </div>

                  </form>
                </div>

                <FilterByRegion fetchCountriesByRegion={fetchCountriesByRegion} />
              </div>
              <Countries countries={foundedCountries} setSelectedCountry={setSelectedCountry} />
            </>

          }>


          </Route>

          <Route path={"/:id"} element={<DetailedCountry selectedCountry={selectedCountry} countries={countries} fetchCountries={fetchCountries} />} />


        </Routes>





        {/* <div>
          <button onClick={() => setcurrentPage((prev) => prev > 1 ? prev - 1 : prev)}>-</button>
          <button onClick={() => setcurrentPage((prev) => prev + 1)}> + </button>
        </div> */}

      </div>
    </Router>

  );
}

export default App;
