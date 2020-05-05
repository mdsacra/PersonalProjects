$(document).ready(function(){
    var alttela = $(window).height()
    var desccab = alttela - (alttela*0.37)
    var sorteie = $('#sorteie')
    $('#container').css('height', `${desccab}`)
    sorteie.click(function() {
        var arr = []
        while (arr.length < 6) {
            var num = Math.trunc(Math.random()*60)
            if (num != 0 && arr.indexOf(num) === -1) {
                arr.push(num)
            }
        }
        for (n = 0; n <= 5; n++) {
            var bola = $(`#n${n}`)
            bola.empty()
            bola.append(arr[n])
        }
    })
    sorteie.mousedown(function() {
        sorteie.css({'box-shadow':'none','background-color':'#0d5820', 'margin':'3.2em 0 0 0.4em'})
    })
    sorteie.mouseup(function() {
        sorteie.css({'box-shadow':'5px 5px rgba(0, 0, 0, 0.274)', 'background-color':'#1ea841', 'margin':'3em 0 0 0'})
    })

})
