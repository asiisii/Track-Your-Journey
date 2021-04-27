 const path = 'http://localhost:3001/api/v1/';

export const apiCalls = {
  displayErrorMessage(err) {
    const errorField = document.querySelector('.js-error');
    const message = err.message === 
      'Failed to fetch' ?
      'Something went wrong. Please check your internet connection' 
      : err.message;
    errorField.innerText = message;
  },

  checkForError(response) {
    if (!response.ok) {
      throw new Error('Please make sure that you\'re' +
      'proving all the ingredient info.');
    } else {
      return response.json();
    }
  },

  fetchAllData(endpath) {
    return fetch(`${path}${endpath}`)
      .then(apiCalls.checkForError)
      .then(data => {
        console.log(`${endpath}`,data[endpath]);
        return data[endpath];
      })
      // .then(data => data.travelers)
      .catch(err => apiData.displayErrorMessage(err));
  },

  currentTraveler(endpath) {
    return fetch(`${path}${endpath}`)
      .then(apiCalls.checkForError)
      .then(data => {
        console.log(`Welcome back,`,data.name);
        return data;
      })
      // .then(data => data)
      .catch(err => apiData.displayErrorMessage(err));
  },

  postTrip: (trip, endpath) => {
    console.log('post got invoked!');
    fetch(`${path}${endpath}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trip),
    })
    .then(apiCalls.checkForError)
    .then(data => data)
    // .then(location.reload())
    .catch(err => apiData.displayErrorMessage(err));
  },

  deleteTrip: (locID) => {
    var deleteMethod = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    fetch(`${path}trips/${locID}`, deleteMethod)
      .then(apiCalls.checkForError)
      .then(data => data)
      .catch(err => apiData.displayErrorMessage(err));

  }
  // allTravelers() {
  //   return fetch(`${path}travelers`)
  //   .then(apiCalls.checkForError)
  //   .then(data => {
  //     console.log(data.travelers);
  //     return data.travelers;
  //   })
  //   // .then(data => data.travelers)
  //   .catch(err => apiData.displayErrorMessage(err));
  // },


  // allTrips() {
  //   return fetch(`${path}trips`)
  //   .then(apiCalls.checkForError)
  //   .then(data => {
  //     console.log(data.trips);
  //     return data.trips;
  //   })
  //   // .then(data => data.trips)
  //   .catch(err => apiData.displayErrorMessage(err));
  // },

  // allDestinations() {
  //   return fetch(`${path}destinations`)
  //   .then(apiCalls.checkForError)
  //   .then(data => {
  //     console.log(data.destinations);
  //     return data.trips;
  //   })
  //   // .then(data => data.trips)
  //   .catch(err => apiData.displayErrorMessage(err));
  // }

//--------------------------------

};