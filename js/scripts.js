'use strict';
//pobieramy element na którym wykonujemy dodawanie
const tBody = document.querySelector('tbody');

//ilosc kolumn
const trIndex = document.querySelectorAll('tr th')

//tablice
const tableNames = ['Piotr', 'Adam', 'Anna', 'Monika','s'];
const tableSurnames = ['Kania', 'Nowak', 'Kowalska', 'Maszczykowska'];




for(let i = 0; (i < tableNames.length && i < tableSurnames.length); i++){
    const tr = document.createElement('tr');
    tBody.appendChild(tr);
    for(let j = 0; j < trIndex.length; j++){
        const td = document.createElement(`td`);
        tr.appendChild(td);
        let index = 0;
        switch (j){
            case 0: 
                td.textContent = i + 1;
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