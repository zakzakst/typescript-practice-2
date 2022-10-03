const f = (...data:number[]):number => {
  let total = 0
  for (let i of data) {
    total += i
  }
  return total
}
console.log(f(1,2,3,4,5))
console.log(f(10,20,30,40,50))


// function printPerson(name:string = 'no-name', age:number = -1):void {
//   console.log('Name:' + name + '(' + age + ')')
// }
// printPerson('Taro', 39)
// printPerson('Hanako')
// printPerson()
