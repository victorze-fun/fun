console.log(selectionSort([5, 3, 6, 2, 10]))

function selectionSort(arr) {
  const newArr = []
  const LEN_ARR = arr.length

  for (let i = 0; i < LEN_ARR; i++) {
    smallest = findSmallest(arr)
    newArr.push(arr.splice(smallest, 1)[0])
  }

  return newArr
}

function findSmallest(arr) {
  smallest = arr[0]
  smallestIndex = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
      smallestIndex = i
    }
  }

  return smallestIndex
}


