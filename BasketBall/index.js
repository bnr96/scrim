let home_score = 0
let guest_score = 0
setHS = document.getElementById('home-score')
setGS = document.getElementById('guest-score')

function HP(score){
  home_score += score
  setHS.innerText = home_score
  winner()
}

function GP(score){
  guest_score += score
  setGS.innerText = guest_score
  winner()
}

function winner(){
  if(home_score>guest_score){
    document.getElementById('team1').textContent = "Home 🥳"
    document.getElementById('team2').textContent = "Guest 😭"
  }
  
  else if (home_score==guest_score){
    document.getElementById('team2').textContent = "Guest 👔"
    document.getElementById('team1').textContent = "Home 👔"
  }

  else {
    document.getElementById('team2').textContent = "Guest 🥳"
    document.getElementById('team1').textContent= "Home 😭"
  } 
}

function reset(){
  home_score = 0
  guest_score = 0
  setHS.innerText = home_score
  setGS.innerText = guest_score
  document.getElementById('team2').textContent = "Guest  "
  document.getElementById('team1').textContent = "Home  "

}