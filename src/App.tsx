import { airPlaneService } from './services/airplane-service';
import React , {useState , useEffect} from 'react';
import Form from './components/Form';

import './App.css';
import ArrivingFlights from './components/ArrivingFlights';
import DepartingFlights from './components/DepartingFlights';





function App() {
  
  const [arrivals,setArrivals] = useState([])
  const [departures,setDepartures] = useState([])
  


  const updateFlightStatus = async(newStatus:string , id:string) => {
     console.log(newStatus,id)
     const {data} = await airPlaneService.updateFlightStatus(id,newStatus)
     return data
  } 

  const updatedDepartureStatus = async(newStatus:string , id:string) => {
    console.log(newStatus,id)
    const {data} = await airPlaneService.updateDepartureStatus(id,newStatus)
    return data
 } 



  const submitData = async ({time,date,icoa24}:{time:any,date:Date,icoa24:string}) => {
    const fixedTime = time.split(':')  
    const timestamp = new Date(date)
    timestamp.setHours(fixedTime[0] , fixedTime[1] , 0)
    let startingTime = timestamp.getTime() / 1000 + 7200;
    
    const interval = setInterval( async ()=>{
   
   
    const AirportData = { 
      icoa24:icoa24.toUpperCase(),
      time:startingTime+=20
    }
    const departingFlights = await airPlaneService.getDepartures(AirportData)
      const arrivingFlights = await airPlaneService.getArrivals(AirportData)
      console.log(AirportData , 'HUHI');
      
      setArrivals(arrivingFlights)
      setDepartures(departingFlights)
    },20000)
    

  }

  return (
    
    <div className="App">
      <>
      <Form submitData={submitData}/>
      <ArrivingFlights arrivals={arrivals} updateFlightStatus={updateFlightStatus}/>
      <DepartingFlights departures={departures} updatedDepartureStatus={updatedDepartureStatus}/>
      </>
    </div>
  );
}

export default App;
