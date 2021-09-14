import React from 'react'
import Moment from 'react-moment';
import { Flight } from '../interface/flight';


const DepartingFlights = ({updatedDepartureStatus,departures}:{updatedDepartureStatus:Function,departures:Flight[]}) => {

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement> , id:string) => {
        updatedDepartureStatus(e.target.value , id)
    }

    if(!departures) return (<h1>No data</h1>)
    return (
        
        <>
            <h1>Departures :</h1>
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
            {departures.map((departure:Flight,idx:number) => {
            return (
            <tr className='active-row' key={idx}>
                <td>{departure.callsign}</td>
                <td><Moment format='DD/MM/YYYY'>{departure.firstSeen * 1000}</Moment></td>
                  <td><Moment format='DD/MM/YYYY'>{departure.lastSeen *1000}</Moment></td>
                <td>{departure.estArrivalAirport} dist:{departure.estArrivalAirportHorizDistance}</td>
                <td>{departure.estDepartureAirport} dist:{departure.estDepartureAirportHorizDistance}</td>
                <td>{departure.icao24}</td>
                <td>
                        <select  onChange={(e) => handleChange(e, departure._id)}>
                        <option value={departure.status}>{departure.status}</option>
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

export default DepartingFlights

//callsign
//first seen moment
//last seen moment
//arrival and distance
//departure and distance
//Icao
