let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let hScore = 0
homeScore.innerText = hScore

let gScore = 0
guestScore.innerText = gScore



function homeAdd1(){
    hScore += 1
    homeScore.textContent = hScore
   
}
function homeAdd2(){
    hScore += 2
    homeScore.textContent = hScore
    
}
function homeAdd3(){
    hScore += 3
    homeScore.textContent = hScore
    
}
function guestAdd1(){
    gScore += 1
    guestScore.textContent = gScore
   
}
function guestAdd2(){
    gScore += 2
    guestScore.textContent = gScore
    
}
function guestAdd3(){
    gScore += 3
    guestScore.textContent = gScore
    
}