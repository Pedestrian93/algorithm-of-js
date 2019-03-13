function flatten(arr) {
  let result = []
  return arr.reduce(function(pre, next) {
    return pre.concat(Array.isArray(next) ? flatten(next) : next)
  }, [])
}

console.log(flatten([2, 3, [3,4], 4, 5]))
// [ 2, 3, 3, 4, 4, 5 ]
