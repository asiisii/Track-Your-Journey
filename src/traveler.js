class Traveler {
  constructor(travelerInfo) {
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.travelerType = travelerInfo.travelerType;
    this.currentDate = new Date('2020/07/01').getTime();
    this.allTrips = [];
    this.myDestinations = [];
    this.past = [];
    this.present = [];
    this.upcoming = [];
    this.pending = [];
  }

  getAllTrips(trips, destinations) {
    trips.forEach(trip => {
      destinations.forEach(loc => {
        if (this.id === trip.userID &&
          trip.destinationID === loc.id &&
          !this.allTrips.includes(trip) &&
          !this.myDestinations.includes(loc)) {
            this.allTrips.push(trip);
            this.myDestinations.push(loc)
        }
      });
    });
    return this.allTrips;
  }

  getPastTrips() {
    this.allTrips.forEach(trip => {
      let startDate = new Date(trip.date).getTime();
      let endDate = startDate + (86400000 * trip.duration)
      if (endDate < this.currentDate && !this.past.includes(trip)) {
        this.past.push(trip)
      }
    })
    // console.log('past trips',this.past);
  }

  


}

export default Traveler;