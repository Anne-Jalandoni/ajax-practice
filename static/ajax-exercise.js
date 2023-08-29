'use strict';

// PART 1: SHOW A FORTUNE
//What is the event?
//What is the address we're making a request of

function showFortune(evt) {
  fetch('/fortune')
  .then((response) => response.text())
  .then((serverData) => {document.querySelector('#fortune-text').innerText = serverData;
  })
}
document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info

  fetch('/weather.json?zipcode=${zipcode}')
  .then((response) => response.json())
  .then((responseJSON) => {document.querySelector('#weather-info').innerText = responseJSON.forecast;
  })

}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)



  function returnMelons(results){
    // Check to see if 0 < qty > 10, 
     //if code == error 
    //in red flash error using alert button
  //else
    //proceed

    if(results === 'ERROR'){
    document
      .querySelector('#order-form')
      .classList.add('ERROR');
      console.log('wahhhh')
    }
    else {
    document
      .querySelector('#order-form')
      .classList.remove('ERROR');
    }
 //come back to this later
 //Why is it not calling back my function
 //no messages are appearing
 //revist ajax/dom lesson


  }

  fetch('/order-melons.json',{
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type': 'application/json',
    }
    })
  .then((response) => response.json())
  .then((responseJSON) => {(console.log('wahhhh')); //nothing to call back???

})
document.querySelector('#order-form').addEventListener('submit', orderMelons);

}