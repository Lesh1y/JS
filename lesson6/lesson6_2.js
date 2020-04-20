//обработчик на добавление товара в корзину
catalog.onclick = function(event) {
    var a = event.target.closest('a');
    if(!a) return;
    getProduct(a.closest('li'));
    event.preventDefault();
}

//обработчик на удаление одного товара
var basketContent = document.querySelector('.basket .content');
basketContent.onclick = function (event) {
    var a = event.target.closest('a');
    if(!a) return;
    productRemove(a.closest('div'))
    event.preventDefault();
}

//------------------------------------>
function getProduct(li) {
    //создание необходимых элементов
    var product = document.createElement('div'), productImg = document.createElement('img'),
    p = document.createElement('p'), span = document.createElement('span'),
    a = document.createElement('a'), deleteImg = document.createElement('img');

    //добавление нужных классов
    product.classList.add('product');
    p.classList.add("disc");
    span.classList.add('count-price');
    a.classList.add("delete");

    //наполнение элементов
    productImg.src = li.querySelector('img').src;;
    productImg.width = "50";
    var productCount = li.querySelector('input').value,
    productPrice = li.querySelector('.price').innerText;

    //на случай, если пользователь не ввёл значение, стерев дефолтное
    if (productCount == '') {
        productCount = '1';
    }

    span.innerHTML = productCount + ' x ' + productPrice + '&#8381;';
    p.innerHTML = li.querySelector('input').name + '<br>';
    deleteImg.src = "img/cross.png";

    //загрузка элементов на страницу
    p.append(span);
    a.append(deleteImg);
    product.append(productImg, p, a);
    var content = document.querySelector('.basket .content');
    content.append(product);

    //увеличиваем счётчики
    count.innerText++;
    total_sum.innerText = parseInt(total_sum.innerText) + (+productCount * +productPrice);
}

function productRemove(div) {
    //уменьшаем счётчик позиций
    count.innerText--;

    //получаем кол-во и стоимость товара
    var productCount = div.querySelector('span').innerText.split(' ')

    //вычетаем из общей стоимости
    total_sum.innerText = parseInt(total_sum.innerText) - (+productCount[0] * +(productCount[2].slice(0, -1)));

    //удаляем товар из корзины
    div.remove();
}

function removeAllProduct() {
    //очищаем корзину
    document.querySelector('.basket .content').innerHTML = '';

    //обнуляем счётчики
    total_sum.innerText = 0;
    count.innerText = 0;
}
