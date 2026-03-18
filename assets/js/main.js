console.log('it works');

// seleziono i nodi del DOM che fanno parte del form
const nameInput = document.getElementById('name-input');
const distanceInput = document.getElementById('distance-input');
const ageInput = document.getElementById('age-input');
const formInput = document.querySelector('form');




formInput.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInputValue = nameInput.value;
    const distanceInputValue = distanceInput.value;
    const ageInputValue = ageInput.value;

    const costPerKm = 0.21;
    let ticketPrice = distanceInputValue * costPerKm;

    
    if (ageInputValue < 18) {
        ticketPrice = ticketPrice * 0.8;
    } else if (ageInputValue > 65) {
        ticketPrice = ticketPrice * 0.6;
    }
    
    console.log(nameInputValue, distanceInputValue, ageInputValue, ticketPrice);

}
)
