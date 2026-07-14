import React, { useState,useEffect } from "react";
import Search from "../Search/Search";


export default function WeatherData() {
    const [search, setSearch] = useState("");
    const { data, error, pending } = useFetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=4b93f45fae57694420ef2e004b912c37`,
        {}
      );
        function handleSearch() {
            FetchWeatherData(search)
        }
        function getCurrentDate() {
            return new Date().toLocaleDateString("en-us", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
            });
        }
        useEffect(() => { 
            FetchWeatherData("bangalore"); }
            , []);
        console.log(weatherData);

        return (
            <div>
                <Search
                    search={search}
                    setSearch={setSearch}
                    handleSearch={handleSearch}
                />
                {loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <div>
                        <div className="city-name">
                            <h2>
                                {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
                            </h2>
                        </div>
                        <div className="date">
                            <span>{getCurrentDate()}</span>
                        </div>
                        <div className="temp">{weatherData?.main?.temp}</div>
                        <p className="description">
                            {weatherData && weatherData.weather && weatherData.weather[0]
                                ? weatherData.weather[0].description
                                : ""}
                        </p>
                        <div className="weather-info">
                            <div className="column">
                                <div>
                                    <p className="wind">{weatherData?.wind?.speed}</p>
                                    <p>Wind Speed</p>
                                </div>
                            </div>
                            <div className="column">
                                <div>
                                    <p className="humidity">{weatherData?.main?.humidity}%</p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        )


    }

