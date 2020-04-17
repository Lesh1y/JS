var score = 0, questionsArray = [],
rightAnswers = [game.a3, game.b2, game.c1, game.d4, game.e2], answersWithPercent = [];

setQuestionsArray();

flag = false;
do {
    alert('Добро пожаловать в игру "Кто хочет стать миллионером!"');
    var userAnswer = +prompt('Сыграем? Введите номер ответа\n' + '1 - Да\n2 - Нет');
    if (userAnswer == 2) {
        alert('Приходите снова!');
        document.querySelector('.container').style.display = 'none'
        flag = true;
    }
    else if (userAnswer < 1 || userAnswer >  2 || !(Number.isInteger(userAnswer))) {
        alert('Вы ввели некорректную команду.\nПопробуйте снова');
        continue;
    }
    else {
        flag = true;
        nextStep()
    }
} while (!flag)


//------------------------------>
//нужна для дальнейшей подгрузки рандомного вопроса
function setQuestionsArray() {
    for(var i = 0; i < Object.values(game).length; i++) {
        if (i % 5 == 0) {
            questionsArray.push(Object.values(game)[i])
        }
    }
}

//следующий ход
function nextStep() {
    if (questionsArray.length > 0) {
        var q = Math.floor(Math.random() * questionsArray.length);
        document.getElementById("question").innerText = questionsArray[q];
        var index = Object.values(game).indexOf(questionsArray[q]);
        for(var i = 1; i <= 4; i++){
            if (document.getElementById('a' + String(i)).classList.length > 1) {
                document.getElementById('a' + String(i)).classList.remove('green');
            }
            document.getElementById('a' + String(i)).innerText = Object.values(game)[(index + i)];
        }
        document.querySelector('.score').innerText = 'Счёт: ' + score;
        questionsArray.splice(q, 1);
    }
    else clearGame(true);
}

//проверяем пользовательский ответ
function checkAnswer(id) {
    var count = 0;
    var answer = document.getElementById(id).innerText;
    for (var i = 0; i < rightAnswers.length; i++) {
        if (!(answer === rightAnswers[i])) count++;
    }
    if(count == rightAnswers.length) clearGame(false);
    else {
        score += 100;
        nextStep();
    }
}

//отбрасываем два неверных ответа
function dropTwoAnswer() {
    var answCount = 0;
    var nowAnswersArray = [];
    var help = document.getElementById("drop");

    for (var i = 0; i < 4; i++) {
        var j = document.getElementById('a' + String(i + 1));
        nowAnswersArray.push(j);
    }

    for (var i = 0; i < 4; i++) {
        var count = 0;
        if (answCount == 2) break;
        for (var j = 0; j < rightAnswers.length; j++) {
            if (!(nowAnswersArray[i].innerText === rightAnswers[j])) count++;
            if (count == rightAnswers.length) {
                nowAnswersArray[i].innerText = ''
                answCount++
            }
        }
    }
    help.remove();
}

//подставляем "мнение зрителя"
function getPercent() {
    var percentArray = ['40%', '20%', '25%', '15%'];
    var nowAnswersArray = [];
    var help = document.getElementById("percent");

    for (var i = 0; i < 4; i++) {
        var j = document.getElementById('a' + String(i + 1));
        nowAnswersArray.push(j);
    }

    for (var j = 0; j < nowAnswersArray.length; j++) {
        if (percentArray.length > 0) {
            var q = Math.floor(Math.random() * percentArray.length);
            //небольшой костыль, т.к. пробовал приписывать % к ответу — не проходит проверку
            answersWithPercent.push([nowAnswersArray[j].innerText, percentArray[q]].join(' - '));
            percentArray.splice(q, 1);
        }
    }
    alert((answersWithPercent).join('; '));
    help.remove();
}

//выделяем "выбор друга"
function getFriendAnswer() {
    var nowAnswersArray = [];
    var help = document.getElementById("friend");
    var luck = Math.round(Math.random() * 1 + 1)

    for (var i = 0; i < 4; i++) {
        var j = document.getElementById('a' + String(i + 1));
        nowAnswersArray.push(j);
    }

// отметить зелёным случайный ответ (с вероятностью в 50% верный)
    if (luck == 2) {
        for (var i = 0; i < nowAnswersArray.length; i++) {
            for (var j = 0; j < rightAnswers.length; j++) {
                if (nowAnswersArray[i].innerText === rightAnswers[j]) {
                    nowAnswersArray[i].classList.add('green');
                    break;
                }
            }
        }
    }
    else {
        var q = Math.floor(Math.random() * nowAnswersArray.length);
        nowAnswersArray[q].classList.add('green');
    }
    help.remove();
}

//чистим поле
function clearGame(result) {
    if (result) {
        document.getElementById("question").innerHTML = '<span class="red">Вы победили! Ваш счёт: ' + score + '</span>';
    }
    else {
        document.getElementById("question").innerHTML = '<span class="red">Вы проиграли! Ваш счёт: ' + score + '</span>';
    }
    document.querySelector('.score').innerText = ''
    // TODO: чистка подсказок, если остались
    for(var i = 1; i <= 4; i++){
        document.getElementById('a' + String(i)).innerText = '';
    }
}
