function clickAll(){
    hideElementById('first-section');
    showElementById('second-section'); 
}
function clickOne(){
    hideElementById('second-section');
    showElementById('first-section');
}

const seatButtons = document.querySelectorAll('.seat-btn');
let selectedSeats = [];
let totalPrice = 0;

for (let i = 0; i < seatButtons.length; i++) {
    const button = seatButtons[i];
    button.addEventListener('click', () => {
        const seatId = button.id;
        if (selectedSeats.includes(seatId)) {
            button.style.backgroundColor = '';
            button.style.color = 'black';
            selectedSeats = selectedSeats.filter(id => id !== seatId);
            updateSeatAndPrice();
        } 
        else {
            if (selectedSeats.length < 4) {
                button.style.backgroundColor = 'green';
                button.style.color = 'white';
                selectedSeats.push(seatId);
                updateSeatAndPrice();
            } 
            else {
                alert('You can not select more than 4 seats.');
            }
        }
    });
}

document.getElementById('applyBtn').addEventListener('click', function() {
    applyCoupon();
});

// Event listener for click next button 
nextButton.addEventListener('click', () => {
    if (selectedSeats.length > 0 && selectedSeats.length <= 4 && checkInputsFilled()) {
        clickAll();
    } else if(selectedSeats.length > 0 && selectedSeats.length <= 4 && !checkInputsFilled()){
        alert('Please fill up all the input field');

    }
    else {
        alert('Please Select Seat first Upto any 4 seats and also fillup the Input fields');
    }
});

// input fields to update next button status
for (let i = 0; i < [pName, pNum, pEmail].length; i++) {
    [pName, pNum, pEmail][i].addEventListener('input', updateSeatAndInputs);
}

document.getElementById('continueBtn').addEventListener('click', () => {
    selectedSeats = [];

    clickOne();

    // Clear seat list
    const newSeatList = document.getElementById('seatList');
    newSeatList.innerHTML = '';
    const economyClassList = document.getElementById('economyClass');
    economyClassList.innerHTML = '';
    const priceClassList = document.getElementById('priceClass');
    priceClassList.innerHTML = '';

    // Update seat number display
    const seatNumberElement = document.getElementById('seat-number'); 
    seatNumberElement.innerHTML = '40';

    // Reset total price and display
    const totalPriceElement = document.getElementById('tk');
    totalPriceElement.innerHTML = '0';
    const grandPriceElement = document.getElementById('grandTk');
    grandPriceElement.innerHTML = '0';
    const bookSeatElement = document.getElementById('book-seat');
    bookSeatElement.innerHTML = '0';
    
    // Remove all selected buttons
    const seatButtons = document.querySelectorAll('.seat-btn');
    for (let i = 0; i < seatButtons.length; i++) {
    const button = seatButtons[i];
    button.style.backgroundColor = '';
    button.style.color = 'black';
}
    // Clear input text
    document.getElementById('couponText').value = '';
    document.getElementById('pName').value = '';
    document.getElementById('pNum').value = '';
    document.getElementById('pEmail').value = '';
});


