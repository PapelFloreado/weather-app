import React from 'react'
import Spinner from '../Spinner/Spinner'
import semiFullCloud from "../../assets/img/clouds-svgrepo-com.svg"
import fullCloud from "../../assets/img/clouds-full.svg"
import sunny from "../../assets/img/sunny.svg"

const ClimaWidget = ({dataWeather}) => {
  console.log(dataWeather)  
  

  return (
    <div className='mx-auto justify-center bg-slate-300  shadow-gray-400 shadow-2xl rounded-3xl'>
      {
        !dataWeather.name ? <Spinner className=" bg-white"></Spinner> : 
        <div className='my-16 mx-16 flex-col text-center'>
          {
            dataWeather.clouds.all > 60 ? 
            
              <img className='' src={fullCloud} alt="" />
              
              : dataWeather.clouds.all > 35 ? 

              <img className='' src={semiFullCloud} alt="" /> :

              dataWeather.clouds.all < 35 ? 

              <img className='' src={sunny} alt="" /> : <div></div>

          }
          <h2 className='text-4xl uppercase font-bold'>City: {dataWeather.name}</h2>
          <p>Temp act {dataWeather.main.temp } °C </p>
          <p>Feels Like {dataWeather.main.feels_like} °C </p>
          <p>Max {dataWeather.main.temp_max} °C </p>
          <p>Min {dataWeather.main.temp_min} °C </p>
        </div>
      }
        
    </div>
  )
}

export default ClimaWidget