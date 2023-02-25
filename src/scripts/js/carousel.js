import { getTeamData } from './team-data.js';

let currentTeam = getTeamData();
const teamPhoto = document.querySelector('.team-photo');
const teamHeading = document.querySelector('.team-heading');
const teamText = document.querySelector('.team-text');
const buttonRight = document.querySelector('.button-right');
const buttonLeft = document.querySelector('.button-left');
var count = 0;

export function carousel () {

 render();
 pressButtonRight();
 pressButtonLeft();
  
}

function render () {
  teamPhoto.setAttribute('src', currentTeam[count].url);
  teamHeading.innerHTML = currentTeam[count].name;
  teamText.innerHTML = currentTeam[count].text;
}

function pressButtonRight () {
  buttonRight.addEventListener('click', () => {
    if (count < (currentTeam.length-1)) {
      count++;
    }
    else {
      count = 0;
    }
    render();
  });
}

function pressButtonLeft () {
  buttonLeft.addEventListener('click', () => {
    if (count > 0) {
      count--;
    }
    else {
      count = (currentTeam.length-1);
    }
    render();
  });
}