let divSearch = document.getElementById('search');
divSearch.style.width = '400px';
divSearch.style.border = '2px solid violet';

// Бинарный (двоичный) поиск (отсортированный массив!!!)
let array = [1, 2, 3, 4, 5, 6, 7]; // упорядоченный массив
function BinarySearch(target, array) {
    let i = 0;
    let j = array.length;
    let k;
    while (i < j) {
        k = Math.floor((i + j) / 2);
        if(target <= array[k]) {
            j = k;
        } else {i = k + 1}
    }
    if (array[i] === target) {
        return array[i];  // На выходе значение искомого элемента.
    } else { return "This value is not available"}   // Если искомого элемента нет в массиве, то -1.
};

divSearch.innerHTML = "Result 1: " + BinarySearch(2, array) + " and Result 2: " + BinarySearch(10, array);
