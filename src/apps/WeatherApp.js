import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function WeatherApp() {
    const [query, setQuery] = useState("")
    const [cities, setCities] = useState(JSON.parse(localStorage.getItem("cities")) || [])
    const [measurement, setMeasurement] = useState("imperial")
    const [message, setMessage] = useState("")

    const api = {
        key: "180597d6621736768d9c39774c770039",
        url: "https://api.openweathermap.org/data/2.5/"
    }

    function search(event) {
        event.preventDefault()

        if (query.length === 5) {
            fetch(`${api.url}weather?q=${query},US&appid=${api.key}&units=${measurement}`)
                .then(function (response) {
                    if (!response.ok) {
                        displayMessage("Not a valid ZIP code")
                    } else {
                        return response
                    }
                })
                .then(res => res.json())
                .then(data => {
                    var isIn = false
                    cities.forEach(function (city, index) {
                        if (city.name === data.name) {
                            isIn = true
                        }
                    })
                    if (!isIn) {
                        setCities(prevCities => [...prevCities, data])
                        setQuery("")
                    } else {
                        displayMessage("City is already displayed")
                    }
                })
                .catch(function (error) {
                    console.log('404 Not Found : ' + error)
                })
        } else {
            displayMessage("ZIP code size is too small")
        }
    }

    localStorage.setItem("cities", JSON.stringify(cities))

    function displayMessage(newMessage) {
        setMessage(newMessage)
        setTimeout(() => {
            setMessage("")
        }, 2000)
    }

    function removeCity(city) {
        setCities(prevCities => prevCities.filter(c => c.name !== city.name))
    }

    const cityElements = cities.map(city => {
        const unit = measurement === "imperial" ? "F" : "C"
        return (
            <li key={uuidv4()}>
                <div className="weatherapp--city">
                    <h4>{city.name}</h4>
                    <h6>{`High: ${Math.floor(city.main.temp_max)}°${unit} Low: ${Math.floor(city.main.temp_min)}°${unit}`}</h6>
                    <h5>Current: {Math.floor(city.main.temp)}&deg;{unit}</h5>
                    <h6>{city.weather[0].description}</h6>
                    <h6 className="weatherapp--city-delete" onClick={() => removeCity(city)}>X</h6>
                </div>
            </li>
        )
    })

    return (
        <div className="weatherapp">
            <section className="weatherapp--topbanner">
                <div className="weatherapp--container">
                    <h1 className="weatherapp--header">Simple Weather App</h1>
                    <form onSubmit={search}>
                        <div className="weatherapp--search">
                            <input
                                placeholder="Enter a ZIP code"
                                onChange={e => setQuery(e.target.value)}
                                value={query || ""}
                                maxLength="5"
                                onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                            />
                            <button className="weatherapp--search-button">Search</button>
                            <span className="weatherapp--message">{message}</span>
                        </div>
                    </form>
                </div>
            </section>
            <section className="weatherapp--dynamic">
                <div className="weatherapp--container">
                    <ul className="weatherapp--cities">
                        {cityElements}
                    </ul>
                </div>
            </section>
        </div>
    )
}