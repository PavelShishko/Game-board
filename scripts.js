let homeCounts = document.getElementById("homePoints");
let guestCounts = document.getElementById("guestPoints");
let countHome = 0
let countGuest = 0

function addOnePointToHome() {
    countHome += 1
    homeCounts.textContent = countHome
}

function addTwoPointToHome() {
    countHome +=2
    homeCounts.textContent = countHome
}

function addTreePointToHome() {
    countHome +=3
    homeCounts.textContent = countHome
}

function addOnePointToGuest() {
    countGuest += 1
    guestCounts.textContent = countGuest
}

function addTwoPointToGuest() {
    countGuest +=2
    guestCounts.textContent = countGuest
}

function addTreePointToGuest() {
    countGuest +=3
    guestCounts.textContent = countGuest
}

function startNewGame() {
    countHome = 0;
    homeCounts.textContent = countHome;
    countGuest = 0;
    guestCounts.textContent = countGuest;

}

function whoWinGame() {
    if (countHome === countGuest) {
        alert("Draw")
    } else {
        countHome > countGuest ? alert("Leader a home team") : alert("Leader a guest team")
    }
    
}