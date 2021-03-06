import { expect } from 'chai';
import Trip from '../src/trips';
import {allTripsData, allDestinationData} from '../src/data/sampleTestData';

describe('Trip', () => {
  let trip;
  beforeEach(() => {
    trip = new Trip(allTripsData[0], allDestinationData[0])
  });
  describe('Trip Properties', () => {
    it('should be a function', () => {
      expect(Trip).to.be.a('function')
    })

    it('should be an instance of Trip', () => {
      expect(trip).to.be.an.instanceof(Trip)
    })

    it('should have an id', () => {
      expect(trip.id).to.equal(2)
      trip = new Trip(allTripsData[3], allDestinationData[0])
      expect(trip.id).to.equal(48)
    })

    it('should have a user id', () => {
      expect(trip.userID).to.equal(35)
      trip = new Trip(allTripsData[3], allDestinationData[0])
      expect(trip.userID).to.equal(44)
    })

    it('should have a destination id', () => {
      expect(trip.destinationID).to.equal(25)
      trip = new Trip(allTripsData[3], allDestinationData[0])
      expect(trip.destinationID).to.equal(14)
    })

    it('should have #\'s of travelers', () => {
      expect(trip.travelers).to.equal(5)
      trip = new Trip(allTripsData[3], allDestinationData[0])
      expect(trip.travelers).to.equal(6)
    })

    it('should have a date', () => {
      expect(trip.date).to.equal('2020/10/04')
      trip = new Trip(allTripsData[3], allDestinationData[0])
      expect(trip.date).to.equal('2021/02/10')
    })

    it('should have a trip status', () => {
      expect(trip.status).to.equal('pending')
      trip = new Trip(allTripsData[2], allDestinationData[0])
      expect(trip.status).to.equal('approved')
    })

    it('should have a trip duration', () => {
      expect(trip.duration).to.equal(18)
      trip = new Trip(allTripsData[3], allDestinationData[0])
      expect(trip.duration).to.equal(8)
    })

    it('should have list of suggested activites', () => {
      expect(trip.suggestedActivities).to.be.deep.equal([])
    })

    it('should have destination info', () => {
      expect(trip.destinations).to.be.deep.equal(
        {
          id: 1,
          destination: "Lima, Peru",
          estimatedLodgingCostPerDay: 70,
          estimatedFlightCostPerPerson: 400,
          alt: "overview of city buildings with a clear sky",
          image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
        })

      trip = new Trip(allTripsData[0], allDestinationData[1])
      expect(trip.destinations).to.be.deep.equal(
        {
          id: 2,
          destination: "Stockholm, Sweden",
          estimatedLodgingCostPerDay: 100,
          estimatedFlightCostPerPerson: 780,
          alt: "city with boats on the water during the day time",
          image: "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        })  
    })

    it('should be undefined', () => {
      expect(trip.currentDate).to.equal(undefined)
      expect(trip.tripStartDate).to.equal(undefined)
      expect(trip.tripEndDate).to.equal(undefined)
    })

  })

  describe('Trip Methods', () => {
    it('should be able to calculate the total amount spent on trips', () => {
      trip = new Trip(allTripsData, allDestinationData)
      expect(trip.estimateTripCost(10, 8, 33)).to.equal(8110)
      expect(trip.estimateTripCost(0, 0, 0)).to.equal(`Invalid data`)
    })
  })
})