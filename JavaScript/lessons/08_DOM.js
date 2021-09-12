const heading = document.getElementById('header')
//const idSecondHeading = document.getElementsByTagName('h2')[0]           //if no id
//const idsecondHeader = document.getElementsByClassName('h2-class')[0]
//const idsecondHeader = document.querySelector('.h2-class')
const idsecondHeader = document.querySelector('#h2-id') // return first item
console.log(idsecondHeader)
const H2 = idsecondHeader.nextElementSibling
const vectorH2 = document.querySelectorAll('h2')
console.log(vectorH2)

console.dir(heading.id)
console.dir(heading.textContent)

setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
}, 1500)

const link = H2.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('click', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')
    window.location = url
})

setTimeout(() => {
    addStylesTo(link, 'Practice')
}, 3000)

setTimeout(() => {
    addStylesTo(idsecondHeader, 'And all will be good', 'red', '2rem')
}, 4500)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    if (fontSize)
        node.style.fontSize = fontSize
}
heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
}
idsecondHeader.addEventListener('dblclick', () => {
    if (idsecondHeader.style.color === 'red') {
        idsecondHeader.style.color = '#000'
        idsecondHeader.style.backgroundColor = '#fff'
    } else {
        idsecondHeader.style.color = 'red'
        idsecondHeader.style.backgroundColor = '#000'
    }
})

