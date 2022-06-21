// ! ################################ CONSEGNA ################################

// * Data una lista della spesa, stampare sulla pagina(anche brutalmente, basta che si vedano)
// * gli elementi della lista individualmente con un ciclo while.
// *     Consigli:
// * Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// * Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

// ? ################################ ESERCIZIO ################################

const shoppingListArray = ['Latte', 'Burro', 'Uova', 'Farina', 'Miele', 'Cacao', 'Lievito', 'Zucchero', 'Sale', 'Mele', 'Zucchero a velo'];

const shoppingList = document.getElementById('shopping-list');

let i = 0;

while (i < shoppingListArray.length){

    const shoppingListElement = document.createElement('li');

    shoppingList.append(shoppingListElement);

    shoppingListElement.innerHTML = shoppingListArray[i];

    i++;
}


