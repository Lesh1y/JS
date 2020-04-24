const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const ground = new Image();
ground.src = 'img/ground.png';

const foodImg = new Image();
foodImg.src = 'img/food.png';

let box = 32; //одна клетка
let score = 0;

//еда
let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}

//змейка
let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
};

//препятствия
let stop = [];
stop[0] = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}

//обработчик событий
document.addEventListener('keydown', direction);

//направление змейки
let dir;
function direction(event) {
    if (event.keyCode == 37 && dir != 'right')
        dir = 'left';
    else if (event.keyCode == 38 && dir != 'down')
        dir = 'up';
    else if (event.keyCode == 39 && dir != 'left')
        dir = 'right';
    else if (event.keyCode == 40 && dir != 'up')
        dir = 'down';
}

//проверка на поедание себя или наличие препятсятвия в новой точке головы
function eatTail(head, snakeArr, stopArr) {
    for (let i = 0; i < snakeArr.length; i++) {
        if (head.x == snakeArr[i].x && head.y == snakeArr[i].y) {
            clearInterval(game);
            alert('Игра окончена!')
        }
    }
    for (let i = 0; i < stopArr.length; i++) {
        if (head.x == stopArr[i].x && head.y == stopArr[i].y) {
            clearInterval(game);
            alert('Игра окончена!')
        }
    }
}

//рисуем игру
function drawGame() {
    ctx.drawImage(ground, 0, 0);

    ctx.drawImage(foodImg, food.x, food.y)

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i == 0 ? "green" : "red";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    //пишем счёт
    ctx.fillStyle = 'white';
    ctx.font = '50px Arial';
    ctx.fillText(score, box * 2.5, box * 1.7);

    //получаем голову змейки
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //рост змейки + еда
    if (snakeX == food.x && snakeY == food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box
        }

        //если совпадает с препятствием, создаём заново
        for (let i = 0; i < stop.length; i++) {
            if (food.x == stop[i].x && food.y == stop[i].y) {
                food = {
                    x: Math.floor(Math.random() * 17 + 1) * box,
                    y: Math.floor(Math.random() * 15 + 3) * box
                }
            }
        }

        //добавляем новое препятствие
        if (score % 5 == 0) {
            a = {
                x: Math.floor(Math.random() * 17 + 1) * box,
                y: Math.floor(Math.random() * 15 + 3) * box
            }
            stop.push(a)
        }
    } else {
        snake.pop();
    }

    //переход сквозь границы
    if(snakeX < box) snakeX = box * 18;
    if(snakeX > box * 18) snakeX = 0;
    if(snakeY < 3 * box) snakeY = box * 18;
    if(snakeY > box * 18) snakeY = box * 2;


    //направление движения
    if(dir == 'left') snakeX -=box;
    if(dir == 'right') snakeX +=box;
    if(dir == 'up') snakeY -=box;
    if(dir == 'down') snakeY +=box;

    //новая голова
    let newHead = {
        x: snakeX,
        y: snakeY
    };

    //проверка на пересечение со змейкой
    eatTail(newHead, snake, stop);

    //вносим новую голову
    snake.unshift(newHead);

    //печатаем препятствия
    for (let i = 0; i < stop.length; i++) {
            ctx.fillStyle = "black";
            ctx.fillRect(stop[i].x, stop[i].y, box, box);
    }

    //меняем еду
    if (score == 15) {
        foodImg.src = 'img/food1.png'
    }

}

//игра
let game = setInterval(drawGame, 100);
