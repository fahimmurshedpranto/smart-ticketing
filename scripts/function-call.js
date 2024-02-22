function hideElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}

function showElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

function updateSeatAndPrice() {
  const seatNumberElement = document.getElementById('seat-number');
  const bookSeatElement = document.getElementById('book-seat');
  const totalPriceElement = document.getElementById('tk');
  const grandPriceElement = document.getElementById('grandTk');
  const newSeatList = document.getElementById('seatList');
  const economyClassList = document.getElementById('economyClass');
  const priceClassList = document.getElementById('priceClass');

  newSeatList.innerHTML = '';
  economyClassList.innerHTML = '';
  priceClassList.innerHTML = '';
  
  bookSeatElement.textContent = selectedSeats.length;
  
  const seatsLeft = 40 - selectedSeats.length;
  seatNumberElement.innerHTML = seatsLeft;
  
  const bookedSeats = selectedSeats.length;
  bookSeatElement.innerHTML = bookedSeats;

  let pricePerSeat = 0;
  if (bookedSeats === 1) {
      pricePerSeat = 550;
  } else if (bookedSeats > 1 && bookedSeats <= 4) {
      pricePerSeat = bookedSeats  * 550;
      // console.log(pricePerSeat);
  }
  const totalPrice = pricePerSeat;
  totalPriceElement.innerHTML = totalPrice;
  grandPriceElement.innerHTML = totalPrice;   

  for (let i = 0; i < selectedSeats.length; i++) {
      const seatId = selectedSeats[i];
      
      const seatListItem = document.createElement('div');
      seatListItem.innerHTML = seatId;
  
      const economyListItem = document.createElement('div');
      economyListItem.innerHTML = "Economy";
  
      const priceListItem = document.createElement('div');
      priceListItem.innerHTML = "550";
      
      newSeatList.appendChild(seatListItem);
      economyClassList.appendChild(economyListItem);
      priceClassList.appendChild(priceListItem);
  }
    updateSeatAndInputs();
}

function applyCoupon() {
  const couponInput = document.getElementById('couponText');
  const couponCode = couponInput.value.trim().toUpperCase();

  let discountPercentage = 0;

  if (couponCode === 'NEW15') {
      discountPercentage = 15;
  } else if (couponCode === 'COUPLE20') {
      discountPercentage = 20;
  }

  const totalPriceElement = document.getElementById('tk');
  const grandPriceElement = document.getElementById('grandTk');

  let totalPrice = parseFloat(totalPriceElement.textContent);
  let discountedPrice = totalPrice - (totalPrice * (discountPercentage / 100));
  grandPriceElement.innerHTML = discountedPrice.toFixed(2);
}

const nextButton = document.getElementById('nextBtn');
const pName = document.querySelector("#pName");
const pNum = document.querySelector("#pNum");
const pEmail = document.querySelector("#pEmail");

// check if all input fields are filled
function checkInputsFilled() {
  const passName = pName.value.trim();
  const passNum = pNum.value.trim();
  const passEmail = pEmail.value.trim();
  return passName !== '' && passNum !== '' && passEmail !== '';
}

// check inputs and enable/disable next button
function updateSeatAndInputs() {
  const nextButton = document.getElementById('nextBtn');
  if (selectedSeats.length > 0 && selectedSeats.length <= 4 && checkInputsFilled()) {
      nextButton.disabled = false;
  } 
  else if(selectedSeats.length > 0 && selectedSeats.length <= 4){
      nextButton.disabled = true;
  }
  
  else {
      nextButton.disabled = true;
  }
}





