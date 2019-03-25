let divRand = document.getElementById('randomization');
divRand.style.width = '400px';
divRand.style.border = '1px solid green';
let arrayForRandomization = [1, 2, 3, 4, 5, 6, 7]; 
let arr5 = [7, 2, 3, 6, 5, 4, 1]; 
function shuffleArr() { // Вспомним сортировку!
    return arrayForRandomization.sort(function(a, b) {
        if(a < b) {
            return 1;
        }
        if(a > b) {
            return -1;
        }
        return 0;
    });
}
function shuffledArr2(arr) { // Случайное перемешивание. Лучше использовать этот алгоритм, чем shuffledArr(далее код)
    var j;
    var temp;
        for(var i = arr.length -1; i > 0; i-- ) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    return arr; 
}
var shuffledArr = arr5.sort(function(){ // Перемешиваем массив 
    return Math.random() - 0.5;
  });

// Вспомним метод  Math.random()
function getRandom() {  //  Возвращает случайное число между 0 (включительно) и 1 (не включая 1)
    return Math.random();
  }
  function getRandomMinMax(min, max) {  // Возвращает случайное число между min (включительно) и max (не включая max)
    return Math.random() * (max - min) + min;
  }
  function getRandomInt(min, max) { // Возвращает случайное целое число между min (включительно) и max (не включая max)
                                    // Использование метода Math.round() даст неравномерное распределение!
    return Math.floor(Math.random() * (max - min)) + min;
  }
// Здесь проверяем случайное перемешивание
divRand.innerHTML = shuffledArr2(arrayForRandomization);