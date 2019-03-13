// description:
// given certain range [a, b] and length of result array
// return sorted random numbers which is not repeateble
function x (len, min, max) {
  if (len > max - min) {
    return 'error args'
  }
  let result = []
  function generateN () {
    return parseInt(Math.random() * (max -min - 1) + (min + 1))
  }
  function getValidN () {
    let n = generateN()
    if (result.indexOf(n) < 0) {
      return n
    } else {
      return getValidN()
    }
  }
  for (let i = 0; i < len; i++) {
    let currentN = getValidN()
    result.push(currentN)
  }
  result.sort()
  return result
}

const a = x(10, 10, 100) 
console.log(a)
