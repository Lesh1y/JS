var score = 0, questionsArray = [], rightAnswers = [3, 2, 1, 4, 2];
setQuestionsArray();

/* TODO: Вопрос об игре + если "да", начать игру, если "нет" Перезаписать
документ на "приходите снова";
При старте игры заменить элементы на первый вопрос;
Дописать функции подсказок;
Дописать функцию проверки верного ответа; -> возможно создание метода объекту,
хранящего верный ответ.
*/

//------------------------------>
// Нужна для дальнейшей подгрузки рандомного вопроса
function setQuestionsArray() {
    for(var i = 0; i < Object.values(game).length; i++) {
        if (i % 5 == 0) {
            questionsArray.push(Object.values(game)[i])
        }
        console.log(i);
    }
}

function nextStep() {
    if (questionsArray.length > 0) {
        var q = Math.floor(Math.random() * questionsArray.length);
        document.getElementById("question").innerHTML = questionsArray[q];
        var index = Object.values(game).indexOf(questionsArray[q]);
        for(var i = 1; i <= 4; i++){
            document.getElementById(String(i)).innerHTML = Object.values(game)[(index + i)];
        }
        questionsArray.splice(q, 1);
    }
    else {
        document.write('<h1>Вы победили! Ваш счёт: ' + score + '</h1>')
    }
}

function checkRightAnswer(a) {
// функция проверки правильности ответа
}

function checkAnswer() {
    var answer = document.getElementById('userAnswer').value;
    if(+answer >= 1 && +answer <=4 && Number.isInteger(+answer)) {
        if(checkRightAnswer(answer);){
            score += 100;
            nextStep();
        }
        else {
            document.write('<h1>Вы проиграли! Ваш счёт: ' + score + '</h1>')
        }
    }
    else {
        alert('Необходимо ввести номер ответа. Попробуйте снова');
    }
}

function dropTwoAnswer() {
    var help = document.getElementById("drop");
    // убрать два неверных ответа
    help.remove();
}

function getPercent() {
    var help = document.getElementById("percent");
    // подписать проценты голосов за каждый из ответов
    help.remove();
}

function getFriendAnswer() {
    var help = document.getElementById("friend");
    // отметить красным случайный ответ (с вероятностью в 50% верный)
    help.remove();
}
