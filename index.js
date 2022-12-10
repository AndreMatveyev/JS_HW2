// Дан объект с городами и странами. Вывести масив значения в котором
// будут строки преобразованные в данный формат: <Столица> - это <Страна>.

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};
let transformCityCountry = [];
let i = 0;
for (const key in citiesAndCountries) {
    transformCityCountry[i] = key + ' - это ' + citiesAndCountries[key];
    i++;
}
const result = transformCityCountry;
console.log(result);

// Создать функцию которая выведет многомерный массив A. Данный массив содержит 
// в себе список других массивов B. Массивы B должны содержать по 3 значения. 
// Максимальное значение (в примере это переменная amount) должно делится на 3 нацело.

function getArray() {
    const amount = 12;
    let arrAmount = [];
    for (i = 0; i < (amount / 3); i++) {
        arrAmount[i] = [1 + 3 * i, 2 + 3 * i, 3 + 3 * i];
    }
    console.log(arrAmount);
}

getArray();

// Создать объект с названиями дней недели. Где ключами будут ru и en, a значением 
// свойства ru будет массив с названиями дней недели на русском, а en - на английском. 
// После написать функцию которая будет выводить в консоль название дня недели пользуясь 
// выше созданным объектом. Все дни недели начинаются с 1 и заканичаются цифрой 7 
// (1- понедельник, 7 - воскресенье). Функция хранит переменную lang - название языка 
// дня недели и переменную day - число дня недели.

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}
function getNameOfDay() {
    const lang = 'ru';
    const day = 3;
    console.log(namesOfDays[lang][day-1]);
}
getNameOfDay();

// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел 
// из массива минимум 4 положительных целых чисел. Не передаются числа с плавающей 
// запятой или неположительные целые числа.

let arrayPositiveInteger = [19, 5, 42, 2, 77];
function getSumTwoMin() {
    arrayPositiveInteger.sort(function(a, b) {
        return a - b;
    })
    return arrayPositiveInteger[0] + arrayPositiveInteger[1];
}
console.log(getSumTwoMin());

// Дан массив единиц и нулей, преобразуйте эквивалентное двоичное значение в целое число.

const arrBinaryNumbers = [1, 0, 1, 0, 1];
function binaryToDecimal() {
    let k = 1;
    let decimalResult = 0;
    for (let i = arrBinaryNumbers.length - 1; i >= 0; i--) {
        decimalResult += (arrBinaryNumbers[i] * k);
        k *= 2;
    }
    return decimalResult;
}
console.log(binaryToDecimal());