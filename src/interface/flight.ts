export interface Flight  {
    _id:string,
    arrivalAirportCandidatesCount:number,
    callsign:string,
    departureAirportCandidatesCount:number,
    estArrivalAirport:string,
    estArrivalAirportHorizDistance:number,
    estArrivalAirportVertDistance:number,
    estDepartureAirport:string,
    estDepartureAirportHorizDistance:number,
    estDepartureAirportVertDistance:number,
    firstSeen:number,
    icao24:string,
    lastSeen:number,
    status:string
}