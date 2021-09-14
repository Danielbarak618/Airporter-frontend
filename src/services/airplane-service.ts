import axios from 'axios'

export const airPlaneService = {
    
    getArrivals,
    getDepartures,
    updateFlightStatus,
    updateDepartureStatus
    
}

interface FlightData {
    icoa24:string,
    time:number
}



const URL = 'http://localhost:5000'

async function getArrivals(arrivalData:FlightData){
    
    try{
        const {data} = await axios.post(`${URL}/arrivals` , {airport:arrivalData.icoa24 , time:arrivalData.time})
        console.log(data);
        return data
    }catch(err){
        console.log(err)
    }
    
}

async function updateFlightStatus(id:string,newStatus:string){
    try{
        const {data} = await axios.patch(`${URL}/arrivals/${id}` , {status:newStatus})
        return data
    }catch(err){
        console.log(err);
    }
}
async function updateDepartureStatus(id:string,newStatus:string){
    try{
        const {data} = await axios.patch(`${URL}/departures/${id}` , {status:newStatus})
        return data
    }catch(err){
        console.log(err);
    }
}


async function getDepartures(arrivalData:FlightData){
    try{
        const {data} = await axios.post(`${URL}/departures` , {airport:arrivalData.icoa24 , time:arrivalData.time})
        console.log(data , 'dep');
        return data
    }catch(err){
        console.log(err)
    }
}