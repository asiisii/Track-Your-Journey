// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/avatar.png'
import './images/beach.png'
import './images/logpage.png'
import './images/background.png'
// console.log('This is the JavaScript entry file - your code begins here.');

//my code
import domUpdates from './domUpdates'
import { apiCalls } from './fetchData'
// import Trip from './trips';
// import Traveler from './traveler'

const loginError = document.getElementById('loginError')
const loginpage = document.getElementById('loginpage')
const usernameInput = document.getElementById('uname');
const passInput = document.getElementById('password');
const logForm = document.getElementById('loginForm');
const loginSubmit = document.getElementById('login');
const logoutSubmit = document.getElementById('logout')
const dashboard = document.getElementById('dashboard')
let currUserID;
logForm.addEventListener('submit', (e) => e.preventDefault())

loginSubmit.addEventListener('click', checkCredentials)
logoutSubmit.addEventListener('click', displayLogin)

function checkCredentials() {
  let givenUsername = usernameInput.value;
  let justname = givenUsername.split('traveler')[0] === ''
  let givenPassword = passInput.value;
  currUserID = Number(givenUsername.split('').slice(8).join(""))
  
  if (givenPassword && givenUsername) {
    if(currUserID && currUserID > 0 && 
      currUserID < 50 && justname &&
      givenPassword === 'travel2020') {
      fetchData()
      loginpage.classList.add('hidden')
      dashboard.classList.remove('hidden')
    } else {
      logForm.reset();
      loginError.innerText = `You have entered an invalid username or password`
    }
  
  }
}


function displayLogin() {
  logForm.reset();
  loginpage.classList.remove('hidden')
  dashboard.classList.add('hidden')
}
// window.addEventListener('load', checkCredentials);
//get id from user's login name >> last two digit >> 
          //probably has to use split and  splice

function fetchData() {
  Promise.all([apiCalls.fetchAllData(`travelers`), apiCalls.fetchAllData(`trips`), 
  apiCalls.fetchAllData(`destinations`), apiCalls.currentTraveler(`travelers/${currUserID}`)])
    .then(data => {
      domUpdates.assignData(data)
    })
    

    // .catch
}

// const usernameInput = document.getElementId('username').value
//eg: 
// const usernameInput = 'traveler09'
// 

// if(userID === '09') {
//   console.log('yeeet')
// }
// apiCalls.deleteTrip(1619554130751)





