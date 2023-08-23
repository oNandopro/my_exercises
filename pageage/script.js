function Verificar() {
    var data = new Date()
    var anoatu = data.getFullYear()
    var res = document.getElementById('res')
    var nas = document.getElementById('nasusu')
    if (nas.value.length == 0 || Number(nas.value) > anoatu) {
        window.alert=('[ERRO] Ano digitado invalido, verifique os dados inseridos e tente novamente')
    } else {
        var sexusu = document.getElementsByName('radsex')
        var idade = anoatu - Number(nas.value)
        var genero = ''
        if (sexusu [0].checked) {
            genero = 'Homem'
            if (idade >=1 && idade <=7) {
                img.src= 'imagens/bebe-m.png'
            }
            else if (idade >7 && idade <=21) {
                img.src= 'imagens/jovem-m.png'
            }
            else if (idade >22 && idade <=61) {
                img.src= 'imagens/adulto-m'
            }

        }
    }

}