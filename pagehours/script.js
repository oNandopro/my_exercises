function carregar() {
    var msghora = window.document.getElementById('hora')
    var img = window.document.getElementById('img')
    var msgdia = window.document.getElementById('msg')
    var data = new Date()
    var horaatu = data.getHours()
    msghora.innerHTML = `Agora são ${horaatu} horas e alguns minutos!`

}

/* CORES:
    bom dia  : '#dbcd00'
    boa tarde: '#485779'
    boa noite: '#232324'
*/