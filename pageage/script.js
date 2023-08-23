function Verificar() {
    var data = new Date()
    var anoatu = data.getFullYear()
    var res = document.getElementById('res')
    var nas = document.getElementById('nasusu')
    if ( Number(nas.value) > anoatu) {
        window.alert('[ERRO] Ano inválido, verifique os dados inseridos e tente novamente')
    } else {
        var sexusu = document.getElementsByName('radsex')
        var idade = anoatu - Number(nas.value)
        var genero = ''
        if (sexusu [0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <=7) {
                img.src= 'imagens/bebe-m.png'
            } else if (idade >7 && idade <=21) {
                img.src= 'imagens/jovem-m.png'
            } else if (idade >21 && idade <61) {
                img.src= 'imagens/adulto-m.png'
            } else {
                img.src= 'imagens/idoso-m.png'
            }    
        } else if (sexusu[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <=7) {
                img.src= 'imagens/bebe-f.png'
            } else if (idade >7 && idade <=21) {
                img.src= 'imagens/jovem-f.png'
            } else if (idade > 21 && idade <=61) {
                img.src= 'imagens/adulto-f.png'
            } else {
                img.src= 'imagens/idoso-f.png'
            }
        }
        res.innerHTML=(`Indetificamos que você é ${genero} de ${idade} anos!`)
    }
}