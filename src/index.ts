class Person {
  protected name: string = 'no-name'
  private mail?: string
  public age?: number
  constructor(name: string, mail: string = 'no-mail', age: number = -1) {
    this.name = name
    this.mail = mail
    this.age = age
  }
  print(): void {
    console.log(this.name + '(' + this.mail + ',' + this.age + ')')
  }
}
// const taro = new Person('taro', 'taro@yamada', 39)
// taro.print()
// const sachiko = new Person('sachiko')
// sachiko.print()
// console.log(taro.constructor.name)
// console.log(Person.name)
enum School {
  junior = 'junior',
  juniorHigh = 'juniorHigh',
  high = 'high',
  other = 'other'
}
class Student extends Person {
  school?: School
  private grade_num: number = -1
  get gradeN(): number {
    return this.grade_num
  }
  set gradeN(n: number) {
    this.grade_num = n
    this.grade = String(n)
  }
  private gr_str: string = ''
  get grade(): string {
    return this.gr_str
  }
  private set grade(pr: string) {
    let gd = pr
    switch(this.gradeN) {
      case 1:
        gd += 'st'
        break
      case 2:
        gd += 'nd'
        break
      case 3:
        gd += 'rd'
        break
      default:
        gd += 'th'
    }
    this.gr_str = gd
  }
  constructor(name: string, school: School, grade: number) {
    super(name)
    this.school = school
    this.gradeN = grade
  }
  print(): void {
    let gd: string = this.grade ? String(this.grade) : '-'
    console.log(this.name + '(' + this.school + ' school: ' + gd + ' grade)')
  }
}
const taro = new Person('taro', 'taro@yamada', 39)
const hanako = new Student('hanako', School.high, 2)
taro.print()
hanako.print()
// hanako.name = '花子'
// hanako.mail = 'hanako@flower'
// hanako.age = 28


// type person = {readonly name: string, mail?: string, age?:number, print: () => void}
// const obj1: person = {
//   name: 'taro',
//   age: 39,
//   print: function(): void {
//     console.log(this.name + ':' + this.age)
//   }
// }
// const obj2: person = {
//   name: 'hanako',
//   mail: 'hanako@flower',
//   print: function(): void {
//     console.log(this.name + ':' + this.mail)
//   }
// }
// // obj1.name = 'Taro'
// obj1.print()
// obj2.print()


// type person = {name: {first: string, second: string}, age: number}
// const obj1: person = {name: {first: 'taro', second: 'yamada'}, age: 39}
// const {name: {first, second}, age} = obj1
// console.log(first + second + '::' + age)


// function Person(n: string, a: number): {name: string, age: number, print: () => void} {
//   return {
//     name: n,
//     age: a,
//     print: function() {
//       console.log(this.name + '(' + this.age + ')')
//     }
//   }
// }
// const taro = Person('taro', 39)
// const hanako = Person('hanako', 28)
// taro.print()
// hanako.print()


// const person = {
//   name: 'taro',
//   age: 39,
//   print: function(): void {
//     console.log(this.name + '(' + this.age + ')')
//   }
// }
// person.print()
// person.name = 'hanako'
// person.age = 28
// person.print()


// console.log('Node path = ' + process.argv[0])
// console.log('script file path = ' + process.argv[1])
// const data: number[] = []
// for (var i = 2; i < process.argv.length; i++) {
//   data.push(Number(process.argv[i]))
// }
// console.log('parameters: ' + data)
// const f = aggregate()
// for (let item of data) {
//   const res = f(item)
//   console.log(res)
// }
// function aggregate(): (n: number) => [number, number, number, number, number] {
//   let total = 0
//   let totalp = 0
//   let totalt = 0
//   return (n: number): [number, number, number, number, number] => {
//     total += n
//     let tax = Math.floor(n - n / 1.1)
//     totalp += n - tax
//     totalt += tax
//     return [n, tax, total, totalp, totalt]
//   }
// }


// console.log('Node path = ' + process.argv[0])
// console.log('script file path = ' + process.argv[1])
// const data: number[] = []
// for (var i = 2; i < process.argv.length; i++) {
//   data.push(Number(process.argv[i]))
// }
// console.log(data)
// for (let item of data) {
//   const res = primeFactor(item)
//   console.log(item + '= ' + res)
// }
// function primeFactor(a: number): number[] {
//   const v: number[] = []
//   let x = a
//   let n = 2
//   while(x > n) {
//     if (x % n == 0) {
//       x = x / n
//       v.push(n)
//     } else {
//       n += n == 2 ? 1 : 2
//     }
//   }
//   v.push(x)
//   return v
// }


// const f = (n:number, d:number): Promise<number> => {
//   console.log('start:' + n)
//   return new Promise((f) => {
//     let total = 0
//     for (let i = 1; i <= n; i++)
//       total += i
//     setTimeout(() => {
//       f(total)
//     }, d)
//   })
// }
// const cb = (n:number) => {
//   console.log('result:' + n)
// }
// f(10, 300).then(cb)
// f(100, 200).then(cb)
// f(1000, 100).then(cb)
// console.log('do something...')


// function* fibo(n:number) {
//   let n1 = 0
//   let n2 = 1
//   for (let i = 0; i <= n; i++) {
//     yield n1
//     let n3 = n1 + n2
//     n1 = n2
//     n2 = n3
//   }
// }
// const n = 10
// let fb = fibo(n)
// for (let i = 0; i <= n + 3; i++) {
//   let ob = fb.next()
//   console.log(ob.value)
// }


// function getRnd<T>(values: T[]):T {
//   const r = Math.floor(Math.random() * values.length)
//   return values[r]
// }
// const data1 = [0,2,4,6,8,10]
// const data2 = ['グー','チョキ','パー']
// const data3 = [true,false]
// for (let i = 0; i < 10; i++) {
//   const re1 = getRnd(data1)
//   const re2 = getRnd(data2)
//   const re3 = getRnd(data3)
//   const res =
//       re1 + '(' + typeof(re1) + ')\t'
//     + re2 + '(' + typeof(re2) + ')\t'
//     + re3 + '(' + typeof(re3) + ')\t'
//   console.log(res)
// }


// const f = (n:number):number => {
//   if (n < 0) {
//     throw Error('負の値です')
//   }
//   let total = 0
//   for (let i = 0; i <= n; i++)
//     total += i
//   return total
// }
// try {
//   let re1 = f(100)
//   console.log(re1)
//   let re2 = f(-100)
//   console.log(re2)
// } catch (e) {
//   console.log(e.message)
// }


// const f = (n:number):[number, Error?] => {
//   if (n < 0) {
//     return [n, Error('負の値です')]
//   }
//   let total = 0
//   for (let i = 0; i <= n; i++) {
//     total += i
//   }
//   return [total]
// }
// const [res1, err1] = f(100)
// if (err1 == undefined)
//   console.log(res1)
// else console.log(err1)
// const [res2, err2] = f(-100)
// if (err2 == undefined)
//   console.log(res2)
// else console.log(err2)


// const f = (arr?:any[]):void => {
//   let res = 'Array:'
//   for (let i of arr) {
//     res += String(i) + '\t'
//   }
//   console.log(res)
// }
// try {
//   f(['ok', 'NG'])
//   f([10, 20, 30])
//   f()
// } catch (e) {
//   console.log(e.message)
// }


// const f = (n:number):() => number => {
//   let count:number = 0
//   return ():number => {
//     count += n
//     return count
//   }
// }
// const f1 = f(1)
// const f2 = f(2)
// const f3 = f(3)
// for (let i = 0; i < 10; i++) {
//   console.log(f1() + '\t' + f2() + '\t' + f3())
// }


// const f = (tax:number):(n:number) => number => {
//   return (n:number) => n * (1 + tax)
// }
// const f1 = f(0.1)
// const f2 = f(0.08)
// const price = 123400
// console.log(f1(price))
// console.log(f2(price))


// const func = (n:number, f:(n:number)=>number|string):void => {
//   let res = f(n)
//   console.log('Result:' + res)
// }
// const double = (n:number) => n * 2
// const word = (n:number):string => {
//   const w = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九']
//   const s = String(n)
//   let res:string[] = []
//   for (let i = 0; i < s.length; i++) {
//     let c = s.charAt(i)
//     res.push(w[Number(c)])
//   }
//   return res.join('')
// }
// const num = 1230
// func(num, double)
// func(num, word)


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
