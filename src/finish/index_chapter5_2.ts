let msg: HTMLParagraphElement
// const html = `
//   <h2><a id="title">This is message</a></h2>
//   <p>これはTypeScriptで表示したコンテンツです。</p>
// `
const html = `
  <h3>This is message</h3>
  <div id="content">wait...</div>
`

window.addEventListener('load', () => {
  msg = document.querySelector('#msg')
  // msg.textContent = 'This is sample message!'
  msg.innerHTML = html
  // const title: HTMLAnchorElement = document.querySelector('#title')
  // title.href = 'http://google.com'
  const content: HTMLDivElement = document.querySelector('#content')
  setDiv(content)
  addElement(content)
})

function setDiv(content: HTMLDivElement): void {
  content.style.position = 'absolute'
  content.style.width = '300px'
  content.style.height = '300px'
  content.style.borderWidth = '3px'
  content.style.borderStyle = 'solid'
  content.style.borderColor = 'red'
  content.style.backgroundColor = 'white'
  content.textContent = ''
}

function addElement(content: HTMLDivElement): void {
  for (let i = 1; i <= 7; i++) {
    let div: HTMLDivElement = document.createElement('div')
    div.style.position = 'absolute'
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.top = i * 25 + 'px'
    div.style.left = i * 25 + 'px'
    div.style.backgroundColor = '#aa00cc33'
    content.appendChild(div)
  }
}