import './css/base.scss';
import './images/avatar.png'
import './images/beach.png'
import './images/logpage.png'
import './images/background.png'
import './images/agent.png'
import domUpdates from './domUpdates'
import { apiCalls } from './fetchData'

const loginError = document.getElementById('loginError');
const loginpage = document.getElementById('loginpage');
const usernameInput = document.getElementById('uname');
const passInput = document.getElementById('password');
const loginSubmit = document.getElementById('login');
const logoutSubmit = document.getElementById('logout');
const agentout = document.getElementById('agentout');
const dashboard = document.getElementById('dashboard');
let currUserID, givenPassword, givenUsername;



loginSubmit.addEventListener('click', checkTravelerCredentials)
logoutSubmit.addEventListener('click', domUpdates.displayLogin)
agentout.addEventListener('click', domUpdates.displayLogin)

function checkTravelerCredentials() {
  givenUsername = usernameInput.value;
  let justname = givenUsername.split('traveler')[0] === ''
  givenPassword = passInput.value;
  currUserID = Number(givenUsername.split('').slice(8).join(""))
  if (givenPassword && givenUsername) {
    checkAgencyCredentials()
    if (!checkAgencyCredentials()) {
      if(currUserID && currUserID > 0 && 
        currUserID < 50 && justname &&
        givenPassword === 'travel2020') {
        fetchDataForTraveler()
        loginpage.classList.add('hidden')
        dashboard.classList.remove('hidden')
      } else {
        logForm.reset();
        loginError.innerText = `You have entered an invalid username or password`
      }
    }
  }
}

function checkAgencyCredentials() {
  givenUsername = usernameInput.value;
  givenPassword = passInput.value;
  if(givenUsername === 'asiisii' &&
    givenPassword === '2102FE') {
    loginpage.classList.add('hidden')
    agencyboard.classList.remove('hidden')
    fetchDataForAgent()
    return true;
  } else {
    return false;
  }
    
}

function fetchDataForTraveler() {
  Promise.all([apiCalls.fetchAllData(`travelers`), apiCalls.fetchAllData(`trips`), 
  apiCalls.fetchAllData(`destinations`), apiCalls.currentTraveler(`travelers/${currUserID}`)])
    .then(data => {
      domUpdates.assignData(data)
    })
}

function fetchDataForAgent() {
  Promise.all([apiCalls.fetchAllData(`trips`), 
  apiCalls.fetchAllData(`destinations`)])
    .then(data => {
      domUpdates.getAgentData(data, givenUsername);
    })
}







