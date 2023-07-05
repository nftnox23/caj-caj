
  // Funkcija za prikazivanje proizvoda na stranici
  function displayProducts() {
    const productList = document.getElementById("product-list");
  
    // Prolazimo kroz sve proizvode i dodajemo ih na stranicu
    products.forEach(product => {
      const productElement = document.createElement("div");
      productElement.innerHTML = `<h3>${product.name}</h3><p>Cijena: ${product.price} USD</p>`;
      productList.appendChild(productElement);
    });
  }
  
  // Pozivamo funkciju za prikazivanje proizvoda kada se stranica ucita
  window.addEventListener("load", displayProducts);
  
  // Funkcija za pretvaranje vremena u format "mm:ss"
function formatTime(minutes, seconds) {
    return (
      String(minutes).padStart(2, '0') +
      ':' +
      String(seconds).padStart(2, '0')
    );
  }
  
  // Funkcija za otkucavanje tajmera
  function countdownTimer() {
    var timerElement = document.querySelector('.timer');
    var time = timerElement.innerHTML.split(':');
    var minutes = parseInt(time[0]);
    var seconds = parseInt(time[1]);
  
    // Smanji sekunde
    seconds--;
  
    // Smanji minute ako su sekunde istekle
    if (seconds < 0) {
      minutes--;
      seconds = 59;
    }
  
    // Ažuriraj tajmer na stranici
    timerElement.innerHTML = formatTime(minutes, seconds);
  
    // Provjeri da li je vrijeme isteklo
    if (minutes === 0 && seconds === 0) {
      clearInterval(timerInterval); // Zaustavi tajmer
      // Dodaj ovdje kod koji želite izvršiti kada tajmer istekne
    }
  }
  
  // Pokreni tajmer kada se stranica učita
  window.addEventListener('load', function () {
    var timerElement = document.querySelector('.timer');
    var time = timerElement.innerHTML.split(':');
    var minutes = parseInt(time[0]);
    var seconds = parseInt(time[1]);
    var totalSeconds = minutes * 60 + seconds;
  
    // Prikazi pocetno vrijeme tajmera
    timerElement.innerHTML = formatTime(minutes, seconds);
  
    // Pokreni tajmer
    var timerInterval = setInterval(function () {
      // Provjeri da li je vrijeme isteklo
      if (totalSeconds <= 0) {
        clearInterval(timerInterval); // Zaustavi tajmer
        // Dodaj ovdje kod koji želite izvršiti kada tajmer istekne
      }
  
      // Izračunaj minute i sekunde
      minutes = Math.floor(totalSeconds / 60);
      seconds = totalSeconds % 60;
  
      // Ažuriraj preostalo vrijeme
      timerElement.innerHTML = formatTime(minutes, seconds);
  
      // Smanji preostalo vrijeme za jednu sekundu
      totalSeconds--;
    }, 1000);
  });

  function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
  }
  
  function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  
  function validateForm() {
    // ...ostatak vašeg postojećeg koda za provjeru unosa...
  
    // Nakon provjere unosa i slanja narudžbe:
    showPopup();
  }

  var closeBtn = document.querySelector('.close-popup');
closeBtn.addEventListener('click', closePopup);

var nameInput = document.getElementById('name');

nameInput.addEventListener('input', function(event) {
  var input = event.target.value;
  var regex = /^[a-zA-Z]+$/;

  if (!regex.test(input)) {
    event.target.value = input.replace(/[^a-zA-Z]+/g, '');
  }
});


function validateForm() {
  var nameInput = document.getElementById('name');
  var phoneInput = document.getElementById('phone');
  var addressInput = document.getElementById('address');

  if (nameInput.value === '' || phoneInput.value === '' || addressInput.value === '') {
    alert('Molimo popunite sva polja.');
    return false;
  }

  return true;
}
