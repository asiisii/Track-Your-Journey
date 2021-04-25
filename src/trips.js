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
  
  

  

}

export default Trip;