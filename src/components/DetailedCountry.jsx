import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Countries from "./Countries";

function DetailedCountry({ selectedCountry, countries }) {
  const [country, setCountry] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await axios.get(
        `https://restcountries.com/v3.1/name/${id}?fullText=true`
      );
      setCountry(res.data[0]);
    };

    fetchCountries();
  }, []);

  console.log(country);

  if (!country) {
    return <h1>LOADİNGGGG</h1>;
  } else {
    return (
      <div style={{ width: "100%", maxWidth: "1200px" }}>
        <div
          style={{ display: "flex", marginLeft: "8.4rem", marginTop: "4rem" }}
        >
          <Link to="/" className="back-btn">
            Back
          </Link>
        </div>
        <div className="detailed-country-card">
          <img
            style={{ maxWidth: "600px", width: "100%" }}
            src={country.flags.svg}
            alt=""
          />

          <div>
            <h1>{country.name.common}</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "280px",
                flexWrap: "wrap",
                gap: ".3rem",
                alignItems: "flex-start",
              }}
            >
              <p>
                {" "}
                <span style={{ fontWeight: "500" }}>Native Name:</span>{" "}
                {country.population}{" "}
              </p>
              <p>
                {" "}
                <span style={{ fontWeight: "500" }}> Population:</span>{" "}
                {country.population}{" "}
              </p>
              <p>
                <span style={{ fontWeight: "500" }}>Region: </span>{" "}
                {country.region}
              </p>
              <p>
                <span style={{ fontWeight: "500" }}>Sub Region: </span>{" "}
                {country.subregion}
              </p>
              <p>
                <span style={{ fontWeight: "500" }}>Capital: </span>{" "}
                {country.capital}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailedCountry;
