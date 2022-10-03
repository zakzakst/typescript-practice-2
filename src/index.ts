const func = (n:number, f:(n:number)=>number|string):void => {
  let res = f(n)
  console.log('Result:' + res)
}
const double = (n:number) => n * 2
const word = (n:number):string => {
  const w = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const s = String(n)
  let res:string[] = []
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i)
    res.push(w[Number(c)])
  }
  return res.join('')
}
const num = 1230
func(num, double)
func(num, word)


// const func = (n:number, f:(n:number)=>number|string):void => {
//   let res = f(n)
//   console.log('Result:' + res)
// }
// const double = (n:number) => n * 2
// const total = (n:number) => {
//   let total = 0
//   for (let i = 1; i <= n; i++)
//     total += i
//   return total
// }
// const num = 100
// func(num, double)
// func(num, total)


// const f = (n:number):void => {
//   const inF = (n:number):void => {
//     console.log('value:' + n)
//   }
//   let total = 0
//   for (let i = 0; i <= n; i++) {
//     total += i
//     inF(total)
//   }
// }
// f(10)


// const f = (...data:number[]):number => {
//   let total = 0
//   for (let i of data) {
//     total += i
//   }
//   return total
// }
// console.log(f(1,2,3,4,5))
// console.log(f(10,20,30,40,50))


// function printPerson(name:string = 'no-name', age:number = -1):void {
//   console.log('Name:' + name + '(' + age + ')')
// }
// printPerson('Taro', 39)
// printPerson('Hanako')
// printPerson()
