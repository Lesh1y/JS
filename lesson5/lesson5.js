var main = document.querySelector('.board');
var cell;
var flag = true;
var letters = ['', 'A', 'B', 'C', 'D', 'I', 'F', 'G', 'H', ''];
var figure = ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;'];

drowTable();


//---------------------------------->
function drowBord(main_TD) {
    board = document.createElement('div');
    for(var i = 0; i < 8; i++) {
        for(var j = 0; j < 8; j++) {
            if (j == 0) flag = !flag;

            cell = document.createElement('div');

            if(flag) cell.className = 'cell black';
            else cell.className = 'cell white';

            if (i == 1 || i == 6) {
                cell.innerHTML = '&#9817;';
                if (i == 6) cell.classList.add('color-white');
                else cell.classList.add('color-black');
            }
            if (i == 0 || i == 7) {
                    cell.innerHTML = figure[j];
                    if (i == 0) cell.classList.add('color-black');
                    else cell.classList.add('color-white');
                }
            board.appendChild(cell);
            flag = !flag;
        }
    }
    main_TD.appendChild(board);
}


function drowTable() {
    table = document.createElement('table');
    
    for (var i = 0; i < 10; i++) {
        tr = document.createElement('tr');
        if (i == 0 || i == 9) {
            for (var j = 0; j < 10; j++) {
                td = document.createElement('td');
                td.innerText = letters[j];
                if (i == 0) td.className = 'rotate-td';
                tr.appendChild(td);
            }
        }
        else if (i == 1) {
            for (var j = 0; j < 3; j++) {
                td = document.createElement('td');
                if (j == 1) {
                    td.colSpan = '8';
                    td.rowSpan = '8';
                    drowBord(td);
                }
                else {
                    td.innerText = i;
                    if (j == 2) td.className = 'rotate-td';
                }
                tr.appendChild(td);
            }
        }
        else {
            for (var j = 0; j < 2; j++) {
                td = document.createElement('td');
                td.innerText = i;
                if (j == 1) td.className = 'rotate-td';
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }
    main.appendChild(table);
}
