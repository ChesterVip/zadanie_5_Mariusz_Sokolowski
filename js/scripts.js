'use strict';
//pobieramy element na którym wykonujemy dodawanie
const tBody = document.querySelector('tbody');

//ilosc kolumn
const trIndex = document.querySelectorAll('tr th')

//tablice
const tableNames = ['Piotr', 'Adam', 'Anna', 'Monika'];
const tableSurnames = ['Kania', 'Nowak', 'Kowalska', 'Maszczykowska'];
const lp = [1, 2, 3, 4];




for(let i = 0; i < lp.length; i++){
    const tr = document.createElement('tr');
    tBody.appendChild(tr);
    console.log(i);
    for(let j = 0; j < trIndex.length; j++){
        const td = document.createElement(`td`);
        tr.appendChild(td);
        console.log(td.dir);
        switch (j){
            case 0: 
            td.textContent = lp[i]
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