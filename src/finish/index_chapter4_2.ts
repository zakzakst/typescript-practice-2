// let table: HTMLTableElement
// let message: HTMLInputElement

// function showTable(html: string) {
//   table.innerHTML = html
// }

// function doAction() {
//   const msg = message.value
//   memo.add({message: msg, date: new Date()})
//   memo.save()
//   memo.load()
//   showTable(memo.getHtml())
// }

// function doInitial() {
//   memo.data = []
//   memo.save()
//   memo.load()
//   message.value = ''
//   showTable(memo.getHtml())
// }

// type Memo = {
//   message: string,
//   date: Date
// }

// class MemoData {
//   data: Memo[] = []
  
//   add(mm: Memo): void {
//     this.data.unshift(mm)
//   }

//   save(): void {
//     localStorage.setItem('memo_data', JSON.stringify(this.data))
//   }

//   load(): void {
//     const readed = JSON.parse(localStorage.getItem('memo_data'))
//     this.data = readed ? readed : []
//   }

//   getHtml(): string {
//     let items = ''
//     for (let item of this.data) {
//       items += `
//         <tr>
//           <td>${item.message}</td>
//           <td>${item.date.toLocaleString()}</td>
//         </tr>
//       `
//     }
//     return `
//       <thead>
//         <th>memo</th>
//         <th>date</th>
//       <thead>
//       <tbody>
//         ${items}
//       </tbody>
//     `
//   }
// }

// const memo = new MemoData()

// window.addEventListener('load', () => {
//   table = document.querySelector('#table')
//   message = document.querySelector('#message')
//   document.querySelector('#btn').addEventListener('click', doAction)
//   document.querySelector('#initialize').addEventListener('click', doInitial)
//   memo.load()
//   showTable(memo.getHtml())
// })