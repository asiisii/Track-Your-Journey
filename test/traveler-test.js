import { expect } from 'chai';
import { allUsersData, allTripsData, allDestinationData } from '../src/data/sampleTestData';
import Traveler from '../src/traveler';
import Trip from '../src/trips';

describe('Trip', () => {
  let traveler;
  beforeEach(() => {
    traveler = new Traveler(allUsersData[3])
  });

  describe('Traveler properties', () => {
    it('should be a function', () => {
      expect(Traveler).to.be.a('function')
    })

    it('should be an instance of Trip', () => {
      expect(traveler).to.be.an.instanceof(Traveler)
    })

    it('should have an id', () => {
      expect(traveler.id).to.equal(44)
      traveler = new Traveler(allUsersData[2])
      expect(traveler.id).to.equal(32)
    })

    it('should have a name', () => {
      expect(traveler.name).to.equal('Marijo MacNeilley')
      traveler = new Traveler(allUsersData[2])
      expect(traveler.name).to.equal('Karlee Dowsey')
    })

    it('should have a type', () => {
      expect(traveler.travelerType).to.equal('photographer')
      traveler = new Traveler(allUsersData[2])
      expect(traveler.travelerType).to.equal('thrill-seeker')
    })

    it('should have a date', () => {
      expect(traveler.currentDate).to.equal(1593583200000)
    })

    it('should have no data by default', ()=> {
      expect(traveler.allTrips).to.deep.equal([])
      expect(traveler.myDestinations).to.deep.equal([])
      expect(traveler.past).to.deep.equal([])
      expect(traveler.present).to.deep.equal([])
      expect(traveler.upcoming).to.deep.equal([])
      expect(traveler.pending).to.deep.equal([])
    })
  })
  
  describe('Traveler methods', () => {
    it('should have list of user\'s trips', () => {
      traveler.getAllTrips(allTripsData, allDestinationData);
      expect(traveler.allTrips.length).to.be.equal(2)
      expect(traveler.myDestinations.length).to.be.equal(2)
      traveler = new Traveler(allUsersData[4])
      expect(traveler.allTrips.length).to.be.equal(0)
      expect(traveler.myDestinations.length).to.be.equal(0)
    })

    it('should have list of user\'s past trips', () => {
      traveler.getPastTrips(allTripsData, allDestinationData);
      expect(traveler.allTrips.length).to.be.equal(0)
      traveler = new Traveler(allUsersData[4])
      expect(traveler.allTrips.length).to.be.equal(0)
    })

    it('should have list of user\'s present trips', () => {
      traveler.getPresentTrips();
      expect(traveler.present.length).to.be.equal(0)
      traveler = new Traveler(allUsersData[4])
      expect(traveler.present.length).to.be.equal(0)
    })

    
  })
})