const urlApi = 'http://ntcursoapi-env.eba-hvwnzgx7.us-east-1.elasticbeanstalk.com/nt-curso-api/terapia/clientes/'

fetch(urlApi).then(function (resposta) {
  console.log('sucesso!', resposta)
  return resposta.json()
})
  .then(function (clientes) {
    console.log(clientes)
    let tabela = document.getElementById('tabela-cliente')


    clientes.forEach(function (cliente, indice) {
      let linha = tabela.insertRow()
      let nome = linha.insertCell(0)
      nome.innerHTML = cliente.nome
      let idade = linha.insertCell(1)
      idade.innerHTML = cliente.idade
      let email = linha.insertCell(2)
      email.innerHTML = cliente.email

      var img = document.createElement("img");
      img.src = "./imagens/lixeira.png";
      img.style.width = "15px";
      let acoes = linha.insertCell(3)
      acoes.appendChild(img)

      var imgEditar = document.createElement('img')
      imgEditar.src = './imagens/editar.png'
      imgEditar.style.width = '25px'
      acoes.appendChild(imgEditar)

      img.addEventListener('click', () => apagar(cliente.id))
      imgEditar.addEventListener('click', () => editar(cliente.id))

    })
  })
  .catch(function (erro) {
    console.warn('algo deu errado', erro)
  });



function editar(id) {
  window.location.href = './cadastro.html?id=' + id
}
function apagar(id) {
 fetch(urlApi +id,{ method: 'delete'})
   .then(function(resposta){
      console.log('apagado com sucesso',resposta)
       document.location.reload()
   })
}

