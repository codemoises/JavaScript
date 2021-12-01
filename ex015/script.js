function carregar() {
   var msg = document.getElementById('msg');
   var img = document.getElementById('imagem'); 
   var data = new Date();
   var hora = data.getHours();
   var s = document.getElementById('saudacao');
   msg.innerHTML = `Agora são exatamente ${hora} horas`

   if (hora >= 0 && hora < 12) {
       img.src = 'imagens/manha.png'
       document.body.style.background = '#EFE6E1'
       s.innerHTML = 'BOM DIA!'
   } else if (hora >= 12 && hora < 18) {
       img.src = 'imagens/tarde.png'
       document.body.style.background = '#FA5A31'
       s.innerHTML = 'BOA TARDE!'
   } else {
       img.src = 'imagens/noite.png'
       document.body.style.background = '#0A1819'
       s.innerHTML = 'BOA NOITE!'
   }
}
