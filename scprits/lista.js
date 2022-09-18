let clientes = JSON.parse(localStorage.getItem('clientes'))
 
let lista = document.getElementById('lista-cliente')

 for(let cliente of clientes) {
    let item = document.createElement('li')
    let texto = cliente.nome + ' - '+ cliente.idade + ' - ' + cliente.email
    let textoItem = document.createTextNode (texto)
    item.appendChild(textoItem)
    lista.appendChild(item)
    

 }