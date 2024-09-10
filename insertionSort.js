// insertionSort.js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    // Shift elements of the sorted portion
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

// For demonstration: sorting an array
const arrayToSort = [8, 4, 5, 3, 7, 1, 9];
const sortedArray = insertionSort(arrayToSort);

// Display the result in the HTML element
document.getElementById("result").innerText = `Sorted Array: ${sortedArray.join(
  ", "
)}`;
