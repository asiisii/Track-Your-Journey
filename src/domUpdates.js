import Trip from './trips'
import Traveler from './traveler'
import Agent from './agent'
import { apiCalls } from './fetchData';

const user = document.getElementById('user');
const username = document.getElementById('username');
const allTripsCard = document.getElementById('container');
const homeBtn = document.getElementById('home');
const presentTripsBtn = document.getElementById('presentTrips');
const pastTripsBtn = document.getElementById('pastTrips');
const upcomingTripsBtn = document.getElementById('upcomingTrips');
const pendingTripsBtn = document.getElementById('pendingTrips');
const bookTripsBtn = document.getElementById('bookTripsBtn');
const bookNewTrip = document.getElementById('bookTripBtn')
const moneySpent = document.getElementById('moneySpent');
const bookSection = document.getElementById('bookSection');
const duration = document.getElementById('duration');
const travelers = document.getElementById('travelers');
const destinationList = document.getElementById('destinationList');
const myForm = document.getElementById('book');
const agentView = document.getElementById('agentView');
const income = document.getElementById('income');
const totalTravelers = document.getElementById('totalTravelers');
const newTripsBtn = document.getElementById('requestedTrips');
const currTravelers = document.getElementById('currTravelers');
const logForm = document.getElementById('loginForm');

logForm.addEventListener('submit', (e) => e.preventDefault());
agentView.addEventListener('click', () => domUpdates.rejectRequest(event));
homeBtn.addEventListener('click', () => domUpdates.displayCards('allTrips'));
presentTripsBtn.addEventListener('click', () => domUpdates.displayCards('present'));
pastTripsBtn.addEventListener('click', () => domUpdates.displayCards('past'));
upcomingTripsBtn.addEventListener('click', () => domUpdates.displayCards('upcoming'));
pendingTripsBtn.addEventListener('click', () => domUpdates.displayCards('pending'));
bookTripsBtn.addEventListener('click', () => domUpdates.hideBookingOption());
newTripsBtn.addEventListener('click', () => domUpdates.findNewTripRequests());
currTravelers.addEventListener('click', () => domUpdates.getTotalCurrentTravelers());
bookNewTrip.addEventListener('click', () => domUpdates.bookTrip());
myForm.addEventListener('submit', (e) => e.preventDefault());
let currentTraveler, allTrips, allDestinations, traveler, total, agent;
let estCost = 0;

const domUpdates = {

  assignData: (data) => {
    allTrips = data[1];
    allDestinations = data[2];
    currentTraveler = data[3];
    traveler = new Traveler(currentTraveler);
    traveler.getAllTrips(data[1], allDestinations);
    traveler.getPastTrips();
    traveler.getPresentTrips();
    traveler.getUpcomingTrips();
    traveler.getPendingTrips();
    total = traveler.calAmtSpentThisYear('2021', allDestinations);
    moneySpent.innerHTML = `This year you spent $<span class="money">${total + estCost}</span> on trips!`;
    let travelerName = traveler.name.split(' ')[0]
    user.innerHTML = `Hey, ${travelerName}!`
    username.innerText = traveler.name
    domUpdates.displayCards('allTrips')
    domUpdates.getAllDestinations()
  },

  displayCards: (tripType) => {
    bookSection.classList.add('hidden')
    let message = document.getElementById('message')
    allTripsCard.innerHTML = '' 
    if(traveler[tripType].length > 0) {
      total = traveler.calAmtSpentThisYear('2021', allDestinations);
      moneySpent.innerHTML = `This year you spent $<span class="money">${total + estCost}</span> on trips!`;
      message.innerText = ''
      traveler.myDestinations.forEach(loc => {
        const findTrip = traveler[tripType].find(trip => {
          if (trip.destinationID === loc.id) {
            return trip;
          }
        })
        if(findTrip) {
          allTripsCard.innerHTML += 
        `
          <article class="card">
            <div class="img-container">
              <img src=${loc.image} alt="${loc.destination}" class="pictures">
            </div>
            <p class="info">Location: <span class="name">${loc.destination}</span></p>
            <p class="info">Date: ${findTrip.date}</p>
            <p class="info duration">Duration:  ${findTrip.duration} days</p>
            <p class="info">Travelers: ${findTrip.travelers}</p>
            <p class="info ">Status: <span class="status">${findTrip.status.toUpperCase()} <span></p>
          </article>
        `
        }
        
      })
    } else {
      moneySpent.innerHTML = ``
      message.innerText = `Sorry! You don't have any trip listed here! Trying booking one?`
    }
  },

  getAllDestinations: () => {
    allDestinations.forEach(loc => {
      destinationList.innerHTML += `
        <option value ="${loc.id}">${loc.destination}</option>`
    })
  },
  
  bookedTripInfo: (date) => {
    let newTrip = {
      "id": new Date().valueOf(),
      "userID": currentTraveler.id,
      "destinationID": Number(destinationList.value),
      "travelers": Number(travelers.value),
      "date": date,
      "duration": Number(duration.value),
      "status": 'pending',
      "suggestedActivities": []
    }
    apiCalls.postTrip(newTrip, `trips`)
    domUpdates.updateDataModel(newTrip)
  },

  hideBookingOption: () => {
    allTripsCard.innerHTML = '' 
    message.innerText = ''
    bookSection.classList.remove('hidden')
    moneySpent.innerHTML = `Let's book your next trip!!!`
  },

  bookTrip: () => {
    let date = document.getElementById('start').value
    let formattedDate = date.split('-').join('/')
    let trip = new Trip (allTrips, allDestinations)
    if (formattedDate && destinationList.value && travelers.value &&
      duration.value) {
        if (bookNewTrip.innerHTML === `Estimate Cost`) {
          estCost = trip.estimateTripCost(Number(travelers.value), 
            Number(duration.value), Number(destinationList.value));
          moneySpent.innerHTML = `Cost for this trip will be 
            $<span class="money">${estCost}</span>`
          bookNewTrip.innerHTML = `Confirm Booking!`
        } else {
          domUpdates.bookedTripInfo(formattedDate)
          moneySpent.innerText = `You've Booked Your Next Trip Successfully!!!`
          bookNewTrip.innerText = `Estimate Cost`
        }
    }
  },

  updateDataModel: (newTrip) => {
    let newBookedTrip = allDestinations.find(loc => loc.id === newTrip.destinationID)
    traveler.myDestinations.push(newBookedTrip)
    traveler.allTrips.push(newTrip)
    traveler.upcoming.push(newTrip)
    traveler.pending.push(newTrip)
  },

  getAgentData: (data, name) => {
    allTrips = data[0]
    allDestinations = data[1]
    agent = new Agent(name, allTrips, allDestinations)
    total = agent.calIncomeOfThisYear('2021');
    income.innerHTML = `This year you earned $<span class="money">${total}</span>!`;
    agent.getRequestedTrips()
    domUpdates.findNewTripRequests()
  },

  findNewTripRequests: () => {
    agentView.innerHTML = '';
    totalTravelers.innerHTML = '';
    if (agent.requestedDestinations.length > 0) {
      agent.requestedDestinations.forEach(loc => {
        const findTrip = agent.requestedTrips.find(trip => {
          if (trip.destinationID === loc.id) {
            return trip;
          }
        })
        if(findTrip) {
          agentView.innerHTML += 
          `
            <article class="card" id="${findTrip.id}">
              <div class="img-container">
                <img src=${loc.image} alt="${loc.destination}" id="${findTrip.id}" class="pictures">
              </div>
              <p class="info" id="${findTrip.id}">Location: <span class="name">${loc.destination}</span></p>
              <p class="info" id="${findTrip.id}">Date: ${findTrip.date}</p>
              <p class="info duration" id="${findTrip.id}">Duration:  ${findTrip.duration} days</p>
              <p class="info" id="${findTrip.id}">Travelers: ${findTrip.travelers}</p>
              <p class="info " id="${findTrip.id}">Status: <span class="status">${findTrip.status.toUpperCase()} <span></p>
            </article>
          `
        }
      })
    }
  },

  getTotalCurrentTravelers: () => {
    agentView.innerHTML = '';
    let calTravelers = agent.getTravelersName();
    if (calTravelers > 0) {
      totalTravelers.innerHTML = `There are total of <span class="money">${calTravelers}</span> 
      travelers currently on a trip!`
    } else {
      totalTravelers.innerHTML = `There are total of 0
      travelers currently on a trip!`
    }
  },

  rejectRequest: (event) => {
    let getID = Number(event.target.id)
    apiCalls.deleteTrip(getID)
    console.log(agent.requestedDestinations, "A RD");
    let finalLoc =  agent.requestedTrips.find((trip, i) => {
      if (trip.id === getID) {
        agent.requestedTrips.splice(i, 1)
      }
      return trip.id === getID
    })
    agent.requestedDestinations.forEach((loc, i) => {
      if(finalLoc.destinationID === loc.id) {
        agent.requestedDestinations.splice(i, 1)
      }
    })

    const elem = document.getElementById(getID)
    elem.parentNode.removeChild(elem);
  },

  displayLogin: () => {
    logForm.reset();
    loginpage.classList.remove('hidden')
    dashboard.classList.add('hidden')
    agentView.classList.add('hidden')
    location.reload();
  }

}

export default domUpdates;
