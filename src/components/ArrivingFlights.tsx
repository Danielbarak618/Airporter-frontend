import React, { useState } from 'react'
import Moment from 'react-moment';
import {Flight} from '../interface/flight'


const ArrivingFlights = ({arrivals,updateFlightStatus}:{arrivals:Flight[],updateFlightStatus:Function}) => {
    
    if(!arrivals) return (<h1>No data</h1>)
    
    

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement> , id:string) => {
        updateFlightStatus(e.target.value , id)
    }
    return (
        
        <>
            <h1>Arrivals :</h1>
        <table className='styled-table'>
            <thead>
                <tr>
               <th>Callsign</th> 
               <th>First Seen</th>
               <th>Last Seen</th>
               <th>Arrival Airport / distance</th>
               <th>Departure Airport / distance</th>
               <th>Icao</th>
               <th>Status</th>
               </tr>
            </thead>
            <tbody>
            {arrivals.map((arrival:Flight,idx:number) => {
            return (
              <tr className='active-row' key={idx}>
                <td>{arrival.callsign}</td>
                  <td><Moment format='DD/MM/YYYY'>{arrival.firstSeen * 1000}</Moment></td>
                  <td><Moment format='DD/MM/YYYY'>{arrival.lastSeen *1000}</Moment></td>
                <td>{arrival.estArrivalAirport} dist:{arrival.estArrivalAirportHorizDistance || 'No Data' }</td>
                <td>{arrival.estDepartureAirport} dist:{arrival.estDepartureAirportHorizDistance || 'No Data' }</td>
                <td>{arrival.icao24}</td>
                <td>
                        <select onChange={(e) => handleChange(e, arrival._id)}>
                            <option value={arrival.status}>{arrival.status}</option>
                            <option value="Handled">Handled</option>
                            <option value="Warning">Warning</option>
                        </select>

                  </td>
              </tr>
            )
    })}
            </tbody>
        </table>
        </>
    )
}

export default ArrivingFlights

//callsign
//first seen moment
//last seen moment
//arrival and distance
//departure and distance
//Icao
