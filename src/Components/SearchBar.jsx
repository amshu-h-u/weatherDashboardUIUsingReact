import React, { useState } from 'react'
import { Search } from 'lucide-react';

const API_KEY="bd959b2194a9580f775a6f06864def9a"

const SearchBar = () => {
    const [inp,setInp]=useState('')

const handleSearch=(e)=>{
        setInp(e.target.value)
        console.log(e.target.value)
}


const fetchWeather=async()=>{
  console.log("weather ")
  const response=await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=${API_KEY}&units=metric`
  )
  const data=await response.json()
  console.log(data)
}

  return (
    <div className='container'>
        <div className='searchBar'> 
        <input value={inp} onChange={handleSearch} className="search" type="text" placeholder='    Enter City Name'/>
        <button className='btn' onClick={fetchWeather}><Search style={{height:"20px"}} /></button>
        </div>
        <div>
          <p>
      
          </p>
        </div>
    </div>
  )
}

export default SearchBar