let divSearch = document.getElementById('search');
divSearch.style.width = '400px';
divSearch.style.border = '1px solid violet';
let array = [1, 2, 3, 4, 5, 6, 7]; // упорядоченный массив

// Бинарный (двоичный) поиск (отсортированный массив!!!)
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
    } else { return "This value is not available. "}   // Если искомого элемента нет в массиве, то -1.
};

// Линейный поиск (сравнивает элементы заданного списка с ключом поиска до тех пор, пока не будет найден элемент). 
// Дополнительный прием: если добавить ключ поиска в конец списка, то поиск обязательно будет успешным, следовательно, 
//можно убрать проверку завершения списка в каждой итерации алгоритма. 
 function LinearSearch(target, array) {
     let i = 0;
     let j = array.length;
     array[j] = target;
     while(array[i] !== target) i++;
        if(i < j) return i;  // На выходе индекс искомого элемента.
        else return -1;  // Если искомого элемента нет в массиве, то -1.
        
 }

divSearch.innerHTML = "Result 1: " + BinarySearch(2, array) + " and Result 2: " + BinarySearch(10, array) + " Result LinearSearch: " + LinearSearch(5, array);
