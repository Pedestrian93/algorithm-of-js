function derepeat(arr) {
  const o = {}
  const result = []
  arr.forEach(element => {
    if (!o[element]) {
      o[element] = 1
      result.push(element)
    }
  })
  return result
}

console.log(derepeat([2,3,4,2,3,4,5]))
// [2, 3, 4, 5]
