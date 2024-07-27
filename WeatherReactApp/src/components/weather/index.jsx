import { useEffect, useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );

      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  async function handleSearch() {
    fetchWeatherData(search);
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
    fetchWeatherData("indore");
  }, []);

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    padding: '20px',
    maxWidth: '800px',
    background: 'url("https://images.pexels.com/photos/27351280/pexels-photo-27351280/free-photo-of-a-lake-surrounded-by-trees-and-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") no-repeat center center',
    backgroundSize: 'cover',
    color: '#fff',
    textAlign: 'center',
  };

  const searchBarStyle = {
    marginBottom: '20px',
  };

  const searchInputStyle = {
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
  };

  const searchButtonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  };

  const loadingStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '20px',
  };

  const cityNameStyle = {
    fontSize: '2em',
    marginBottom: '10px',
  };

  const dateStyle = {
    fontSize: '1.2em',
    marginBottom: '20px',
  };

  const tempStyle = {
    fontSize: '3em',
    margin: '20px 0',
  };

  const descriptionStyle = {
    fontSize: '1.2em',
    margin: '20px 0',
  };

  const weatherInfoStyle = {
    display: 'flex',
    justifyContent: 'space-around',
  };

  const columnStyle = {
    width: '45%',
  };

  const windStyle = {
    fontSize: '1.5em',
  };

  const humidityStyle = {
    fontSize: '1.5em',
  };

  return (
    <div style={containerStyle}>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        style={searchBarStyle}  // Apply styles to the Search component
      />
      {loading ? (
        <div style={loadingStyle}>Loading...</div>
      ) : (
        <div>
          <div style={cityNameStyle}>
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div style={dateStyle}>
            <span>{getCurrentDate()}</span>
          </div>
          <div style={tempStyle}>{weatherData?.main?.temp} Kelvin</div>
          <p style={descriptionStyle}>
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div style={weatherInfoStyle}>
            <div style={columnStyle}>
              <div>
                <p style={windStyle}>{weatherData?.wind?.speed} km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div style={columnStyle}>
              <div>
                <p style={humidityStyle}>{weatherData?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
