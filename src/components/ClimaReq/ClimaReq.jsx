import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClimaWidget from '../ClimaWidget/ClimaWidget'


const Clima = () => {

    const [ location, setLocation ] = useState("")  
    const [ dataWeather, setDataWeather ] = useState({})
  
    useEffect(()=>{

        const llamada = async()=>{
          
          if(location !== ""){
            
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
            const {data} = await axios(url)
            setDataWeather(data)
            
          }
            
        }

        llamada()
        
    }
    ,[location])

    const handleCity = (e)=>{
      setLocation(e.target.value)
    }
    

  return (
    <div className='flex-col min-h-full min-w-full mx-auto justify-end mt-96'>
    
    {
      location.length === 0 ? (<h1 className='flex text-5xl uppercase font-bold mx-auto justify-center'>Choose a city to start</h1>) : (<div className='flex'><ClimaWidget dataWeather={dataWeather} /></div>)  
    } 
    <select className='flex mx-auto justify-center p-4 border-2 rounded-2xl border-black mt-16' onChange={handleCity}>|
      <option value="">PICK A CITY</option>
      <option value="buenos aires">Buenos Aires, Argentina</option>
      <option value="paris">París, France</option>
      <option value="london">London, England</option>
      <option value="new york">New York, EEUU</option>
      <option value="sao paulo">Sao Paulo, Brasil</option>
      
    </select>
    </div>
  )
}

export default Clima