// ! ################################ CONSEGNA ################################

// * Data una lista della spesa, stampare sulla pagina(anche brutalmente, basta che si vedano)
// * gli elementi della lista individualmente con un ciclo while.
// *     Consigli:
// * Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// * Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

// ? ################################ ESERCIZIO ################################

//TODO Scrivo l'array

const shoppingListArray = ['Latte', 'Burro', 'Uova', 'Farina', 'Miele', 'Cacao', 'Lievito', 'Zucchero', 'Sale', 'Mele', 'Zucchero a velo'];

//TODO Prendo l'<ul> dall'html con document.getElementById('nome id');

const shoppingList = document.getElementById('shopping-list');

//TODO Inizializzo il contatore [i = 0] PRIMA del ciclo while

let i = 0;

//TODO Faccio partire il ciclo dichiarando la condizione di uscita (i < Array.length)

while (i < shoppingListArray.length){

//TODO Creo una costante per la creazione di elementi <li>

    const shoppingListElement = document.createElement('li');

//TODO Inserisco gli elementi appena creati dentro l'<ul>

    shoppingList.append(shoppingListElement);

//TODO Inserisco dentro i <li> creati dinamicamente gli elementi dell'array in ordine di indice

    shoppingListElement.innerHTML = shoppingListArray[i];

//TODO FONDAMENTALE - Aumento di uno l'indice con ++ altrimenti il ciclo va all'infinito poiché non aumentando
//TODO                il contatore non si arriverebbe mai alla condizione di uscita i < array.length.

    i++;
}


