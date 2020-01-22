function binarySearch(list, item) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    guess = list[mid]

    if (guess == item) {
      return mid
    }

    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return null
}

let list = [1, 3, 5, 7, 9] // lista ordenada
console.log(binarySearch(list, 3))    // -> 1
console.log(binarySearch(list, -1))   // -> null
