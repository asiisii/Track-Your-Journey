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
  
  estimateTripCost(numOfTravelers, tripDuration) {
    let costForFlights = numOfTravelers *
      this.destinations.estimatedFlightCostPerPerson ;
    let costForLiving = numOfTravelers * tripDuration *
      this.destinations.estimatedLodgingCostPerDay;
    return (costForFlights + costForLiving) * 0.1;
  }

  

}

export default Trip;