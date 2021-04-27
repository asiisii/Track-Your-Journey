import Trip from './trips'
import Traveler from './traveler'
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
let bookNewTrip = document.getElementById('bookTripBtn')
const moneySpent = document.getElementById('moneySpent');
let allTravelers, currentTraveler, allTrips, allDestinations, traveler, total

const bookSection = document.getElementById('bookSection')
const inputError = document.getElementById('inputError');
let duration = document.getElementById('duration')
let travelers = document.getElementById('travelers')
let destinationList = document.getElementById('destinationList')
const myForm = document.getElementById('book')

homeBtn.addEventListener('click', () => domUpdates.displayCards('allTrips'))
presentTripsBtn.addEventListener('click', () => domUpdates.displayCards('present'))
pastTripsBtn.addEventListener('click', () => domUpdates.displayCards('past'))
upcomingTripsBtn.addEventListener('click', () => domUpdates.displayCards('upcoming'))
pendingTripsBtn.addEventListener('click', () => domUpdates.displayCards('pending'))
bookTripsBtn.addEventListener('click', () => {
  // domUpdates.displayCards('pending') 
  allTripsCard.innerHTML = '' 
  message.innerText = ''
  domUpdates.hideBookingOption()
})
bookNewTrip.addEventListener('click', () => domUpdates.bookTrip())
myForm.addEventListener('submit', (e) => e.preventDefault())
const domUpdates = {

  assignData: (data) => {
    allTrips = data[1];
    allDestinations = data[2];
    currentTraveler = data[3];
    // console.log(currentTraveler.id);
    // allTrips.forEach(trip => {
    //   allTrips = new Trip(trip, allDestinations);
    // })
    traveler = new Traveler(currentTraveler);
    traveler.getAllTrips(data[1], allDestinations);
    traveler.getPastTrips();
    traveler.getPresentTrips();
    traveler.getUpcomingTrips();
    traveler.getPendingTrips();
    total = traveler.calAmtSpentThisYear('2020', allDestinations);
    // moneySpent.innerHTML = `This year you spent $<span class="money">${total}</span> on trips!`;

    let travelerName = traveler.name.split(' ')[0]
    user.innerHTML = `Hey, ${travelerName}!`
    username.innerText = traveler.name
    domUpdates.displayCards('allTrips')
    domUpdates.getAllDestinations()
    // console.log(traveler.myDestinations);
  },

  displayCards: (tripType) => {
    // console.log(tripType === allTrips);
    bookSection.classList.add('hidden')
    let message = document.getElementById('message')
    allTripsCard.innerHTML = '' 
    // if(tripType !== 'allTrips') {
    //   moneySpent.innerHTML = `${tripType} Trips`.charAt(0).toUpperCase() + `${tripType} trips`.slice(1);
    // } else {
    //   moneySpent.innerHTML = `All Trips`
    // }
    if(traveler[tripType].length > 0) {
      moneySpent.innerHTML = `This year you spent $<span class="money">${total}</span> on trips!`;
      message.innerText = ''
      traveler.myDestinations.forEach(loc => {
        const findTrip = traveler[tripType].find(trip => {
          // console.log(traveler.allTrips, 'inside find!');
          if (trip.destinationID === loc.id) {
            return trip;
          }
        })
        // console.log(findTrip, 'Find TRIP');
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
      "userID": currentTraveler.id,//currUserID, //when user logs in 
      "destinationID": Number(destinationList.value),
      "travelers": Number(travelers.value),
      "date": date,
      "duration": Number(duration.value),
      "status": 'pending',
      "suggestedActivities": []
    }

    apiCalls.postTrip(newTrip, `trips`)
    // let newBookedTrip = allDestinations.find(loc => loc.id === newTrip.destinationID)
    // traveler.myDestinations.push(newBookedTrip)
    // traveler.allTrips.push(newTrip)
    // traveler.upcoming.push(newTrip)
    // traveler.pending.push(newTrip)
    domUpdates.updateDataModel(newTrip)

  },

  hideBookingOption: () => {
    bookSection.classList.remove('hidden')
    moneySpent.innerHTML = `Let's book your next trip!!!`
  },

  bookTrip: () => {
    let date = document.getElementById('start').value
    let formattedDate = date.split('-').join('/')
    // console.log(traveler);
    let trip = new Trip (allTrips, allDestinations)
    // console.log(Number(travelers.value));
    
    if (formattedDate && destinationList.value && travelers.value &&
      duration.value) {
        
        if (bookNewTrip.innerHTML === `Estimate Cost`) {
          let estCost = trip.estimateTripCost(Number(travelers.value), 
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
    // console.log(traveler.allTrips, 'newALlTrips');
  }

  // changeSubmitBtn: () => {
   
  // }

}


export default domUpdates;




