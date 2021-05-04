const quickSort = (array) => {
  const arr = [...array]

  if (arr.length < 2) {
    return arr
  }

  const pivot = arr[Math.floor(arr.length/2)]

  const less = arr.filter((num) => num < pivot)
  const more = arr.filter((num) => num > pivot)

  return [...quickSort(less), pivot, ...quickSort(more)]
}
const a = [1, 6, 3, 7, 4, 5, 2, 0, 8]

console.log(quickSort(a))
//[0, 1, 2, 3, 4, 5, 6, 7, 8]

// Big O time complexity O(nlogn)

// Worst case: one of the partitions is of size array.length-1 and decreases by 1 with each partition;
// occurs when the partition process always picks greatest or smallest element as pivot 
// and the array is already sorted; the time complexity becomes O(array.length^2)

// Big Omega (best case scenario) - when the partition process always picks the middle element as pivot
// time complexity O(nlogn)

// Big Theta (average case scenario) - time complexity O(nlogn)


