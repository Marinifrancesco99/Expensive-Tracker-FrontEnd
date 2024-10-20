

function visualSaldo(saldo) {
    //Creo il div genitore del saldo che crea la card
    const contenitorePadreSaldo = document.createElement("div");
    contenitorePadreSaldo.className = "mx-auto w-72 pt-6 flex justify-center items-center h-auto";

    //ora creo il div figlio che racchiuderà effettivamente i valori nella card
    const contenitoreFiglioSaldo = document.createElement("div");
    contenitoreFiglioSaldo.className = "bg-black text-white p-4 rounded-lg w-full h-full shadow-lg";

    // div elementi marca, saldo ecc
    const divElementi = document.createElement("div");
    divElementi.className = "w-1/2";

    //Elemento marca
    const marcaElemento = document.createElement("p");
    marcaElemento.className = "text-left text-yellow-600 font-bold";
    marcaElemento.textContent = "Expenses Tracker App";

    //Elemento stringa saldo
    const stringaSaldo = document.createElement("p");
    stringaSaldo.className = "pt-4 font-normal";
    stringaSaldo.textContent = "Saldo corrente:";

    //Creo il div che conterrà il saldo numerico
    const divSaldoValore = document.createElement("div");
    divSaldoValore.className = "p-4";

    //Vado a creare l'elemento valore
    const elementovalore = document.createElement("p");
    elementovalore.className = "text-center text-2xl font-bold";
    elementovalore.textContent = "2500$";



    //Appendi tutti gli elementi nei contenitori
    divSaldoValore.appendChild(elementovalore);
    divElementi.appendChild(stringaSaldo);
    divElementi.appendChild(marcaElemento);
    contenitoreFiglioSaldo.appendChild(divElementi);
    contenitoreFiglioSaldo.appendChild(divSaldoValore);
    contenitorePadreSaldo.appendChild(contenitoreFiglioSaldo);

    const mainContainer = document.getElementById("main-container");
    mainContainer.appendChild(contenitorePadreSaldo);





}





fetch('http://localhost:8000/transazioni', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json' // Aggiungi altri header se necessario
    }
})
.then(response => {
    if (response) {
        return response.json()
    } else {
        console.error("Errore durante la richiesta di ottenimento dati.");
    }
})
.then((data) => {
    console.log(data);
})
.catch(error => {
    console.error("Errore durante la richiesta per visualizzare i dati del database. ", error);
}
)