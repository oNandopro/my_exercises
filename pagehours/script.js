function carregar() {
    var hora = document.getElementById('hora')
    var img = document.getElementById('img')
    var msgdia = document.getElementById('msg')
    var data = new Date()
    var horaatu = data.getHours()
    //var horaatu = 22
    hora.innerHTML = (`Agora são ${horaatu} horas e poucos minutos!`)
    if (horaatu >=6 && horaatu <=12) {
        document.body.style.backgroundColor = '#dbcd00'
        img.src = 'imagens/manha.png'
        msgdia.innerHTML = ('<p>Bom Dia!</p>')
    } else if (horaatu >12 && horaatu <=18) {
        document.body.style.backgroundColor = '#485779'
        img.src = 'imagens/tarde.png'
        msgdia.innerHTML = ('<p>Boa Tarde!</p>')
    } else {
        document.body.style.backgroundColor = '#232324'
        img.src = 'imagens/noite.png'
        msgdia.innerHTML ='<p> Boa Noite!</p>'
    }

}

    /* CORES:
    bom dia  : '#dbcd00'
    boa tarde: '#485779'
    boa noite: '#232324'
*/
