class Traveler {
  constructor(travelerInfo) {
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.travelerType = travelerInfo.travelerType;
    this.currentDate = new Date().getTime();
    this.myDestinations = [];
    this.allTrips = [];
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
            this.myDestinations.push(loc);
        }
      });
    });
    return this.allTrips;
  }

  getPastTrips() {
    this.allTrips.forEach(trip => {
      let startDate = new Date(trip.date).getTime();
      let endDate = startDate + (86400000 * trip.duration);
      if (endDate < this.currentDate && !this.past.includes(trip)) {
        this.past.push(trip);
      }
    })
  }

  getPresentTrips() {
    this.allTrips.forEach(trip => {
      let startDate = new Date(trip.date).getTime();
      let endDate = startDate + (86400000 * trip.duration);
      if (this.currentDate >= startDate && this.currentDate <= endDate
        && !this.present.includes(trip)) {
        this.present.push(trip);
      }
    });

  }

  getUpcomingTrips() {
    this.allTrips.forEach(trip => {
      let startDate = new Date(trip.date).getTime();
      let endDate = startDate + (86400000 * trip.duration);
      if (endDate > this.currentDate && !this.upcoming.includes(trip)) {
        this.upcoming.push(trip);
      }
    });
  }

  getPendingTrips() {
    this.allTrips.forEach(trip => {
     if (trip.status === 'pending' && !this.pending.includes(trip)) {
       this.pending.push(trip);
     }
    });
  }

  calAmtSpentThisYear(year, destination) {
    let costForFlights, costForLiving;
    return this.allTrips.reduce((total, trip) => {
      destination.forEach(loc => {
        if (year === trip.date.split('/')[0] &&
          this.id === trip.userID &&
          trip.destinationID === loc.id) {
          costForFlights = loc.estimatedFlightCostPerPerson ;
          costForLiving = trip.duration * loc.estimatedLodgingCostPerDay;
          total += (costForFlights + costForLiving) * 0.1;
        }
      });
      return total;
    }, 0);
  }

}

export default Traveler;