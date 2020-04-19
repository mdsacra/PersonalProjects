var main = document.getElementById('principal')
var box = 0

function addsocial() {
    formulario()
    box = 1
}

function addwork() {
    formulario()
    box = 2
}

function addenter() {
    formulario()
    box = 3
}


/* OBJETO FORMULARIO */
function formulario() {
    
    var container = document.createElement('div')
    container.setAttribute('class', 'container')
    container.setAttribute('id', 'boxform')
    main.appendChild(container)

    var form = document.createElement('div')
    form.setAttribute('id', 'form')
    container.appendChild(form)

    form.innerHTML = `Adicione um Link: </br>`
    
    var input = document.createElement(`input`)
    input.setAttribute(`id`, `insLink`)
    input.setAttribute(`type`, `url`)
    form.appendChild(input)

    var button = document.createElement('input')
    button.setAttribute('id', 'addFav')
    button.setAttribute('onclick', 'savelink()')
    button.type = 'button'
    button.value = 'Salvar'
    form.appendChild(button)
    
    /*var img = document.createElement(`input`)
    img.setAttribute(`class`, `pagina`)
    input.setAttribute(`type`, `src`)
    form.appendChild(img)*/

}


function savelink() {
    var linktxt = document.getElementById('insLink')
    var link = linktxt.value

    if (link.indexOf('.com') == -1) {
        window.alert('Esta URL não é válida. Tente novamente.')
    } else {
        var lista = ''
        if (box === 1) {
            lista = document.getElementById('listsocial')
        } else if (box === 2) {
            lista = document.getElementById('listwork')
        } else {
            lista = document.getElementById('listenter')
        }
        
        var newlinkdiv = document.createElement('div')
        newlinkdiv.setAttribute('class', 'cadalink')
        lista.appendChild(newlinkdiv)
        var newlink = document.createElement('a')
        newlink.target = '_blank'
        newlink.href = `https://www.${link}`
        newlink.innerHTML = link
        newlinkdiv.appendChild(newlink)
        
        


    }

    var remform = document.getElementById('boxform')
    main.removeChild(remform)
    
}
    
