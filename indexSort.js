let divSort = document.getElementById('sort');
divSort.style.width = '400px';
divSort.style.border = '4px solid red';
let arrayForSort = [2, 5, 3, 4, 7, 6, 1]; // неупорядоченный массив

// Быстрая сортировка
function quicksort(arr) {
    if(arr < 2) {
        return arr;
    } else {
        const p = arr[Math.floor(Math.random() *  arr.length)]; // какое-то случайное число из массива
        const less = arr.filter(value => value < p); // числа до 'p'
        const greater = arr.filter(value => value > p); //числа после 'p'

    return [... quicksort(less), p, ... quicksort(greater)]; //собираем массив в отсортированный(меньшее + точка отсчета + большие)
    }
}

divSort.innerHTML =  quicksort(arrayForSort);