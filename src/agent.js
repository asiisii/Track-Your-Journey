class Agent {
  constructor(name, trips, destinations) {
    this.name = name;
    this.allTrips = trips;
    this.destinations = destinations;
    this.currentDate = new Date('2020/05/01').getTime()
    this.requestedDestinations = [];
    this.requestedTrips = [];
    this.onGoingTrips = [];
  }

  getRequestedTrips() {
    this.allTrips.forEach(trip => {
      if (trip.status === 'pending') {
        this.requestedTrips.push(trip)
      }
    })
    this.destinations.forEach(loc => {
      this.requestedTrips.forEach(trip => {
        if (loc.id === trip.destinationID) {
          this.requestedDestinations.push(loc)
        }
      })
    })
  }

  calIncomeOfThisYear(year) {
    let costForFlights, costForLiving;
    return this.allTrips.reduce((total, trip) => {
      this.destinations.forEach(loc => {
        if (year === trip.date.split('/')[0] &&
          trip.destinationID === loc.id) {
          costForFlights = loc.estimatedFlightCostPerPerson ;
          costForLiving = trip.duration * loc.estimatedLodgingCostPerDay;
          total += (costForFlights + costForLiving) * 0.1;
        }
      })
    
      return total;
    }, 0)
  }

  findOnGoingTrips() {
    this.allTrips.forEach(trip => {
      let startDate = new Date(trip.date).getTime();
      let endDate = startDate + (86400000 * trip.duration)
      if (this.currentDate >= startDate && this.currentDate <= endDate
        && !this.onGoingTrips.includes(trip)) {
        this.onGoingTrips.push(trip)
      }
    })
  }

  getTravelersName() {
    this.findOnGoingTrips()
    if (this.onGoingTrips.length > 0) {
      return this.onGoingTrips.reduce((total, trip) => {
        total += trip.travelers;
        return total
      }, 0)
    } else {
      return false;
    }
  }
}

export default Agent;