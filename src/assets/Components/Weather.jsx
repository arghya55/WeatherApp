import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Weather = () => {
  const [city,setcity] = useState('');
  const [weather,setWeather]= useState();

    const handleOnChange = (e)=>{
      setcity(e.target.value)
    }

    const fetchWeather= async()=>{
        try {
          const responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'b45060961c5bcef23e7ab2eec640704a'}`)
          console.log(responce)
          setWeather(responce);

        } catch (error) {
          console.log('weather fetching error ',error)
        }
    }

    function handleWeather(){
      fetchWeather()
    }
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.85)',
        borderRadius: '20px',
        boxShadow: '0 8px 32px 0 rgba(31,38,135,0.37)',
        padding: '40px 30px',
        minWidth: '320px',
        maxWidth: '90vw',
        textAlign: 'center'
      }}>
        <input
          type="text"
          placeholder="Enter Your City Name"
          value={city}
          onChange={handleOnChange}
          style={{
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid #b0c4de',
            marginBottom: '16px',
            width: '80%',
            fontSize: '1rem',
            outline: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}
        />
        <br />
        <button
          onClick={handleWeather}
          style={{
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            marginTop: '8px',
            boxShadow: '0 4px 14px 0 rgba(118,75,162,0.15)',
            transition: 'background 0.3s'
          }}
        >
          Get Weather
        </button>
        {weather && (
          <div style={{
            marginTop: '32px',
            background: 'rgba(240,248,255,0.9)',
            borderRadius: '16px',
            padding: '24px 16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
          }}>
            <h3 style={{ margin: '0 0 12px 0', color: '#333', fontSize: '2rem' }}>
              {weather.data.name}
            </h3>
            <p style={{ fontSize: '1.2rem', margin: '8px 0', color: '#555' }}>
              Temp: <span style={{ fontWeight: 'bold' }}>{weather.data.main.temp}K</span>
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', textTransform: 'capitalize' }}>
              {weather.data.weather[0].description}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Weather