'use strict';
//pobieramy element na którym wykonujemy dodawanie
const tBody = document.querySelector('tbody');

//ilosc kolumn
const trIndex = document.querySelectorAll('tr th')

//tablice
const tableNames = ['Piotr', 'Adam', 'Anna', 'Monika'];
const tableSurnames = ['Kania', 'Nowak', 'Kowalska', 'Maszczykowska'];




for(let i = 0; i < tableNames.length; i++){
    const tr = document.createElement('tr');
    tBody.appendChild(tr);
    console.log(i);
    for(let j = 0; j < trIndex.length; j++){
        const td = document.createElement(`td`);
        tr.appendChild(td);
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
                }
            }
            
        }
        
        
        //cos ekstra
        
        document.body.style.background = "url(./img.jpg) center no-repeat"
        document.body.style.height = "100vh"