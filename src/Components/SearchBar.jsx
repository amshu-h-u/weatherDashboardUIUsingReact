import React, { use, useState } from 'react'
import { Search } from 'lucide-react';

const SearchBar = () => {
    const [inp,setInp]=useState('')
    const [weather,setWeather]=useState(null)

const API_KEY="bd959b2194a9580f775a6f06864def9a"

const handleSearch=(e)=>{
        setInp(e.target.value)
        console.log(e.target.value)
}


const fetchWeather=async()=>{
  try{
  const response=await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=${API_KEY}&units=metric`
  )
  const data=await response.json()
  console.log(data)
  setWeather(data)
}catch(e){
 console.log(e)
}
}

  return (
    <div className='container'>
        <div className='searchBar'> 
        <input value={inp} onChange={handleSearch} className="search" type="text" placeholder='Enter City Name'/>
        <button className='btn' onClick={fetchWeather}><Search style={{height:"20px"}} /></button>
        </div>
        <div>
           {weather && weather.cod===200 && (
            <div className='city'>
              City:{weather.name}<br/>
              Temperature: {weather.main.temp}°C <br />
              Weather: {weather.weather[0].description}
            </div>
           )}

           {weather && weather.cod!==200 && (
            <div className='city'>
              {weather.message}
            </div>
           )}
        </div>
    </div>
  )
}

export default SearchBar