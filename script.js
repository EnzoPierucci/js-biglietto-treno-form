const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById("nomeInput").value;
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

    addTableRow(name, 1, km, etaCliente, prezzoTotale);
});

function addTableRow(name, num, km, age, price) {
    const tbo = document.getElementById('tbo');

    const tr = document.createElement('tr');
    tbo.appendChild(tr);

    const thName = document.createElement('th');
    tr.appendChild(thName);
    thName.innerHTML = name;

    const thNum = document.createElement('th');
    tr.appendChild(thNum);
    thNum.innerHTML = num;

    const kmtd = document.createElement('th');
    tr.appendChild(kmtd);
    kmtd.innerHTML = km;
    
    const agetd = document.createElement('th');
    tr.appendChild(agetd);
    agetd.innerHTML = age;

    const pricetd = document.createElement('th');
    tr.appendChild(pricetd);
    pricetd.innerHTML = price + ' €';
}




