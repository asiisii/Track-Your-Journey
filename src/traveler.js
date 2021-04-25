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

  


}

export default Traveler;