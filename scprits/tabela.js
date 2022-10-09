let clientes = JSON.parse(localStorage.getItem('clientes'))
 
let tabela = document.getElementById('tabela-cliente')


clientes.forEach(function(cliente,indice){
   let linha = tabela.insertRow()
   let nome = linha.insertCell(0)
   nome.innerHTML = cliente.nome
   let idade = linha.insertCell(1)
   idade.innerHTML = cliente.idade
   let email = linha.insertCell(2)
   email.innerHTML = cliente.email
   
   var img = document.createElement("img");
   img.src ="./imagens/lixeira.png";
   img.style.width = "15px";
   let acoes = linha.insertCell(3)
   acoes.appendChild(img)

   var imgEditar = document.createElement('img')
   imgEditar.src = './imagens/editar.png'
   imgEditar.style.width ='25px'
   acoes.appendChild(imgEditar)
   
   img.addEventListener('click',() => apagar (indice) )
   imgEditar.addEventListener('click',() => editar (indice))

})
function editar (indice){
window.location.href = './cadastro.html?indice='+ indice
}
 function apagar(indice){
   clientes.splice(indice, 1)
   localStorage.setItem("clientes",JSON.stringify(clientes))
   document.location.reload()
 }

  