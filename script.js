const form = document.getElementById('form');

form.addEventListener('submit', Ticket)

function Ticket (form) {

    form.preventDefault();

    let km = document.getElementById("kmInput").value;
    let etaCliente = document.getElementById('ageInput').value;
    
    
    let prezzoTotale = km * 0.21;
    if (etaCliente < 18) {
        prezzoTotale *= 0.8;
    } else if (etaCliente >= 65) {
        prezzoTotale *= 0.6;
    }
    prezzoTotale = prezzoTotale.toFixed(2);
    console.log(`Il prezzo totale del viaggio è: ${prezzoTotale} €`);
    document.writeln(prezzoTotale)
}



