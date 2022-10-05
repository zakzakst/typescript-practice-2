// import { Mydata } from './lib'
// const mydata = new Mydata()
// mydata.add('taro', 39)
// mydata.add('hanako', 28)
// mydata.add('sachiko', 17)
// mydata.add('jiro', 6)
// mydata.print()


// namespace myapp {
//   namespace foundation {
//     export interface printable {
//       print(): void
//     }
//     export interface stringable {
//       getString(): string
//     }
//   }
//   export type Person = {
//     name: string
//     age: number
//   }
//   export class MyData implements
//     foundation.printable,
//     foundation.stringable {
//     people: Person[] = []
//     constructor() {}
//     add(nm: string, ag: number) {
//       this.people.push({name: nm, age: ag})
//     }
//     print(): void {
//       console.log('*** mydata ***\n' + this.getString())
//     }
//     getString(): string {
//       let items = ''
//       for (let item of this.people) {
//         items += '  "' + item.name + '(' + item.age + ')",\n'
//       }
//       return '[\n' + items + ']'
//     }
//   }
// }
// const mydata = new myapp.MyData()
// mydata.add('taro', 39)
// mydata.add('hanako', 28)
// mydata.add('sachiko', 17)
// mydata.add('jiro', 6)
// mydata.print()


// class MyData<T> {
//   data: T[] = []
//   constructor(...data: T[]) {
//     this.data = data
//   }
//   add(val: T) {
//     this.data.push(val)
//   }
//   [Symbol.iterator]() {
//     let pos = 0
//     let items = this.data
//     return {
//       next(): IteratorResult<T> {
//         if (pos < items.length) {
//           return {
//             done: false,
//             value: items[pos++]
//           }
//         } else {
//           return {
//             done: true,
//             value: null
//           }
//         }
//       }
//     }
//   }
// }
// const data = new MyData<string>('one', 'two', 'three')
// for (let item of data) {
//   console.log(item)
// }


// type person_data = {
//   name: string,
//   mail: string,
//   address: string,
//   age: number
// }
// type person_keys = 'name' | 'age'
// type human_keys = 'name' | 'mail' | 'address'
// type person = Pick<person_data, person_keys>
// type human = Pick<person_data, human_keys>
// const taro: person = {
//   name: 'taro',
//   age: 39
// }
// const hana: human = {
//   name: 'hanako',
//   mail: 'hanako@flower',
//   address: 'chiba'
// }
// console.log(taro)
// console.log(hana)


// type prop_name = 'name' | 'mail' | 'age'
// type Person = Record<prop_name, string | number>
// const taro: Person = {
//   name: 'taro',
//   mail: 'taro@yamada',
//   age: 39
// }
// console.log(taro)


// type val_name = 'sample' | 'private' | 'public'
// type data_type = `${val_name}_data`
// type prop_type = `${val_name}_property`
// type method_type = `${val_name}_method`
// const s: data_type = 'sample_data'
// const t: prop_type = 'public_property'
// const u: method_type = 'private_method'
// // const v: data_type = 'personal_data'


// class Student {
//   name: string
//   school: string
//   grade: number
//   constructor(nm: string, sc: string, gr: number) {
//     this.name = nm
//     this.school = sc
//     this.grade = gr
//   }
//   print(): void {
//     console.log('<< ' + this.name + ',' + this.school + ':' + this.grade + ' >>')
//   }
// }
// class Employee {
//   name: string
//   title: string
//   department: string
//   constructor(nm: string, tt: string, dp: string) {
//     this.name = nm
//     this.title = tt
//     this.department = dp
//   }
//   print(): void {
//     console.log(this.name + '[' + this.title + ',' + this.department + ']')
//   }
// }
// type People = Student | Employee
// class Human {
//   data: People[] = []
//   add(item: People): void {
//     this.data.push(item)
//   }
//   print(): void {
//     for (let item of this.data) {
//       let ob
//       switch (item.constructor.name) {
//         case 'Student':
//           ob = item as Student
//           console.log(ob.name + ', ' + ob.school + '(' + ob.grade + ')')
//           break
//         case 'Employee':
//           ob = item as Employee
//           console.log(ob.name + ':' + ob.title + ':' + ob.department)
//           break
//         default:
//           console.log('cannot print.')
//           break
//       }
//     }
//   }
// }
// const taro: People = new Student('taro', 'high school', 3)
// const hana: People = new Employee('hanako', 'president', 'sales')
// const sachi: People = new Student('sachiko', 'junior-heigh school', 1)
// const jiro: People = new Employee('jiro', 'director', 'labo')
// // const data: People[] = [taro, hana, sachi, jiro]
// // for (let item of data) {
// //   item.print()
// // }
// const human = new Human()
// human.add(taro)
// human.add(hana)
// human.add(sachi)
// human.add(jiro)
// human.print()


// enum human {name = 'name', mail = 'mail'}
// type HumanMap = {
//   [key in human]: string
// }
// const taro: HumanMap = {
//   name: 'taro',
//   mail: 'taro@yamada'
// }
// console.log(taro)
// const hana: HumanMap = {
//   name: 'hanako',
//   mail: 'hanako@flower'
// }
// console.log(hana)


// type stringArray = {
//   [key in string]: string
// }
// const data1: stringArray = {
//   'start': '最初の値',
//   'middle': '中央の値',
//   'end': '最後の値'
// }
// data1['finish'] = 'おしまい'
// data1[100] = 'ok'
// console.log(data1)