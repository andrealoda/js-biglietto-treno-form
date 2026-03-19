console.log('it works');

// seleziono i nodi del DOM che fanno parte del form
const nameInput = document.getElementById('name-input');
const distanceInput = document.getElementById('distance-input');
const ageInput = document.getElementById('age-input');
const formInput = document.querySelector('form');

const nameLi = document.getElementById('name');
const distanceLi = document.getElementById('distance');
const ageLi = document.getElementById('age');
const ticketPriceLi = document.getElementById('ticket-price');
const offerPriceLi = document.getElementById('offer-type');


// leggo i valori inseriti dall'utente e calcolo il prezzo in una funzione che stampa in console.
// Aggiungo la stampa in pagina.
formInput.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInputValue = nameInput.value;
    const distanceInputValue = distanceInput.value;
    const ageInputValue = ageInput.value;

    const costPerKm = 0.21;
    let ticketPrice = distanceInputValue * costPerKm;
    let offerPrice = 'Nessuna';

    if (ageInputValue < 18) {
        ticketPrice = ticketPrice * 0.8;
        offerPrice = 'Under 18';
    } else if (ageInputValue > 65) {
        ticketPrice = ticketPrice * 0.6;
        offerPrice = 'Over 65';
    }
    
    
    nameLi.innerHTML = `Passeggero: ${nameInputValue}`;
    // distanceLi.innerHTML = `Distanza da percorrere: ${distanceInputValue}`;
    // ageLi.innerHTML = `Età del passeggero: ${ageInputValue}`;
    ticketPriceLi.innerHTML = `Prezzo del biglietto: ${ticketPrice.toFixed(2)} euro`;
    offerPriceLi.innerHTML = `Offerta applicata: ${offerPrice}`;

    console.log(nameInputValue, distanceInputValue, ageInputValue, ticketPrice.toFixed(2));

    formInput.reset();
})
