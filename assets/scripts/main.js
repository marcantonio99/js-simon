const timer = 30; 

//nella function disappear -1 * 1500 quindi 3 secondi, dopo 1,5 secondi apparirà il prompt 

const numeriCasuali = [];

for(let i = 0; i < 5; i++) {
	const num = generaNumeroRandom(1, 100);
	numeriCasuali.push(num);
} 

//dichiarazioni query 
let numeriPrint = document.querySelector('h1');
let print = document.querySelector('h3');
let printResult = document.querySelector('h5');
let printDisappear = document.querySelector('h4');


numeriPrint.innerHTML = (`Memorizza questi numeri:  ${numeriCasuali}`); 

//function disappear 
setTimeout(function(){
	numeriPrint.innerHTML = 'Ricordali';
    printDisappear.innerHTML = '';
    
    
}, (timer - 1) * 1500 );
 
//interazione utente 
setTimeout(function(){
	
	const numeriUtente = [];

	for(let i = 0; i < 5; i++) {
		const num = parseInt(prompt("Inserisci un numero"));
		numeriUtente.push(num);
        print.innerHTML = (numeriUtente);
	}
	
	
	const numeriValidi = [];
	for(let i = 0; i < numeriUtente.length; i++) {
		
		if(numeriCasuali.includes(numeriUtente[i]) == true) {
			numeriValidi.push(numeriUtente[i]);
		}
	}

	if(numeriValidi.length == 0) {
		printResult.innerHTML = (`Hai indovinato ${numeriValidi.length} numeri`);
	} else {
		printResult.innerHTML = (`Hai indovinato ${numeriValidi.length} numeri, i numeri indovinati sono: ${numeriValidi}`);
	}

}, timer * 1500);

// function math random 0-100 per generare i numeri random
function generaNumeroRandom(min, max) {
	return Math.floor(Math.random() * 100 );
}