class Trip {
  constructor(allTripsData, allDestinationData) {
    this.id = allTripsData.id;
    this.userID = allTripsData.userID;
    this.destinationID = allTripsData.destinationID;
    this.travelers = allTripsData.travelers;
    this.date = allTripsData.date;
    this.status = allTripsData.status;
    this.duration = allTripsData.duration;
    this.suggestedActivities = [];
    this.destinations = allDestinationData;
    this.currentDate;
    this.tripStartDate;
    this.tripEndDate;
  }
  
  estimateTripCost(numOfTravelers, tripDuration, locID) {
    // console.log(givenID);
    let findDestObj = this.destinations.find(loc => loc.id === locID)
    // console.log(findDestObj);
    // console.log(this.destinations.estimatedFlightCostPerPerson);
    // console.log(this.destinations.estimatedLodgingCostPerDay);
    let costForFlights = numOfTravelers *
    findDestObj.estimatedFlightCostPerPerson ;
    let costForLiving = numOfTravelers * tripDuration *
    findDestObj.estimatedLodgingCostPerDay;
    return (costForFlights + costForLiving) * 0.1;
  }

  

}

export default Trip;