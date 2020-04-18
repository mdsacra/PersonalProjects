

function criaformulario(a) {
    a.style.margin = '2%'
    a.style.background = '#635a5a63'
    a.style.width = '100%'
    
    
}

function adicionar() {
    
    var main = document.getElementById('principal')

    var container = document.createElement('div')
    container.setAttribute('class', 'container')
    main.appendChild(container)

    var form = document.createElement('div')
    form.setAttribute('class', 'form')
    container.appendChild(form)
    

    form.innerHTML = 'Adicione seu Link: '
    criaformulario(form)
    
    var input = document.createElement(`input`)
    input.setAttribute(`class`, `pagina`)
    input.setAttribute(`id`, `link`)
    input.setAttribute(`type`, `url`)
    form.appendChild(input)

    var img = document.createElement(`input`)
    img.setAttribute(`class`, `pagina`)
    input.setAttribute(`type`, `src`)
    form.appendChild(img)
    
    var button = document.createElement('button')
    button.setAttribute('class', 'addFav')
    button.setAttribute('onclick', 'savelink()')
    button.style.width = '80px'
    button.style.height = '30px'
    form.appendChild(button)
}

function savelink() {
    var linktxt = document.getElementById('link')
    var link = linktxt.value
    var lista = document.getElementById('teste')
    lista.innerHTML += `</br>${link}`
}