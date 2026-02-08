// Grabbing the score display element for home in HTML
let scoreHomeEl = document.getElementById("score-home-el")
console.log(scoreHomeEl)

// Setting the home score variable
let scoreHome = 0

// Rendering the score variable in the score display element in HTML
scoreHomeEl.textContent = scoreHome

// Grabing the score display element for guest in HTML
let scoreGuestEl = document.getElementById("score-guest-el")
console.log(scoreGuestEl)

// Setting the guest score variable
let scoreGuest = 0

// Rendering the guest score variable in the score display element in HTML
scoreGuestEl.textContent = scoreGuest


// Adding +1 function for home
function plusOneHome() {
  scoreHome += 1
  console.log(scoreHome)
  scoreHomeEl.textContent = scoreHome
}

// Adding +2 function for home
function plusTwoHome() {
  scoreHome += 2
  console.log(scoreHome)
  scoreHomeEl.textContent = scoreHome
}

// Adding +3 function for home
function plusThreeHome() {
  scoreHome += 3
  console.log(scoreHome)
  scoreHomeEl.textContent = scoreHome
}

// Adding +1 function for guest
function plusOneGuest() {
  scoreGuest += 1
  console.log(scoreGuest)
  scoreGuestEl.textContent = scoreGuest
}

// Adding +2 function for guest
function plusTwoGuest() {
  scoreGuest += 2
  console.log(scoreGuest)
  scoreGuestEl.textContent = scoreGuest
}

// Adding +3 function for guest
function plusThreeGuest() {
  scoreGuest += 3
  console.log(scoreGuest)
  scoreGuestEl.textContent = scoreGuest
}

// Reset all scores
function resetAll() {
  scoreHome = 0
  scoreHomeEl.textContent = scoreHome
  
  scoreGuest = 0
  scoreGuestEl.textContent = scoreHome
}