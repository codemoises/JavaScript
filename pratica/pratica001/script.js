function carregar() {
   var mensagem = document.getElementById('mensagem');
   var imagem = document.getElementById('imagem'); 
   var data = new Date();
   var hora = data.getHours();
   var saudacao = document.getElementById('saudacao');
   mensagem.innerHTML = `Agora são exatamente ${hora} horas.`

   if (hora >= 0 && hora < 12) {
       imagem.src = 'imagens/manha.png'
       document.body.style.background = '#EFE6E1'
       saudacao.innerHTML = 'BOM DIA!'
   } else if (hora >= 12 && hora < 18) {
       imagem.src = 'imagens/tarde.png'
       document.body.style.background = '#FA5A31'
       saudacao.innerHTML = 'BOA TARDE!'
   } else {
       imagem.src = 'imagens/noite.png'
       document.body.style.background = '#0A1819'
       saudacao.innerHTML = 'BOA NOITE!'
   }
}
