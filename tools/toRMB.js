// toRMB
function re (str) {
  return str.split('').reverse().join('')
}
function toRMB (num) {
  const a = re(num.toString()).split('')
  const result = []
  for (let i = 0; i < a.length; i++) {
    if ((i + 1) % 3 === 0) {
      result.push(a[i])
      result.push(',')
    }                                                   
    result.push(a[i])
  }
  return re(result.join(''))
}
console.log(toRMB(2432425))
// 24,4324,425
