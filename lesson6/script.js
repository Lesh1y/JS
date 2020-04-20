//вешаем единый обработчик на наш список
thumbs.onclick = function(event) {

    //где был клик?
    var thumbnail = event.target.closest('a');
    //Метод elem.closest(selector) возвращает ближайшего предка, соответствующего селектору

    if (!thumbnail) return; //если не <a>, тогда не интересует
    showLargeImg(thumbnail.href, thumbnail.title);

    //отменяем переход по ссылке
    event.preventDefault();
}

function showLargeImg(href, title) {
    //присваиваем адрес и альт большой картинке
    largeImg.src = href;
    largeImg.alt = title;

    //удаляем надпись, если картинка есть
    p = document.querySelector('p')
    if (p.childNodes.length > 1) {
        p.removeChild(p.lastChild);
    }

    //выводим надпись об отсутствии картинки
    largeImg.onerror = function(event) {
        event.target.closest('p').innerHTML += "<span> К сожалению, картинка не найдена</span>";
    }
}
