'use strict';
//pobieramy element na którym wykonujemy dodawanie
const tBody = document.querySelector('tbody');

//ilosc kolumn
const trIndex = document.querySelectorAll('tr th')

//tablice
const tableNames = ['Piotr', 'Adam', 'Anna', 'Monika','Mariusz'];
const tableSurnames = ['Kania', 'Nowak', 'Kowalska', 'Maszczykowska',];
let index = 0;

for(let i = 0; (i < tableNames.length && i < tableSurnames.length); i++){
    //dodanie nowego wiersza
    const tr = document.createElement('tr');
    tBody.appendChild(tr);
    for(let j = 0; j < trIndex.length; j++){
        const td = document.createElement('td');
        tr.appendChild(td);
        switch (j){
                //poprzez switch dodajemy content do kolumny. Content okresla index wiersza tj. wiersz 1 === pierwsza wartosc z tabeli a wiec tabela[0].
            case 0: 
                td.textContent = ++index;
            break
        case 1:
            td.textContent = tableSurnames[i]
            break
        case 2:
            td.textContent = tableNames[i]
            break
        default:
            td.textContent = 'dodaj tablicę aby dodac wartośc do tabeli'

                }
            }
            
        }
        
        
        //cos ekstra
        
        document.body.style.background = "url(./img.jpg) center no-repeat"
        document.body.style.height = "100vh"
