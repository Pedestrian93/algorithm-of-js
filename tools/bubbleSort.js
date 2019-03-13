function bubbleSort (arr) {
  for (let i  = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let swap = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = swap
      }
    }
  }
  return arr
}

console.log(sort([4,3,6,9,12,0]))
// [ 0, 3, 4, 6, 9, 12 ]
