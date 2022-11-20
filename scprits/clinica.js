let clientes = JSON.parse(localStorage.getItem('clientes'))
if (clientes == null){
    clientes =[]
}
const indice =location.search.split('=')[1]
const formEdicao = indice !== undefined
if(formEdicao){
    preencheformulario(indice)
}

 function preencheformulario(indice){
    console.log('preenchendo formulario do cliente:' + indice)
    let cliente = clientes[indice]
    console.log('cliente:' + cliente.nome)
    document.getElementById('nome').value = cliente.nome
    document.getElementById('email').value = cliente.email
    document.getElementById('idade').value = cliente.idade
    document.getElementById('telefone').value = cliente.telefone
    document.getElementById('cep').value = cliente.cep
    document.getElementById('numero').value = cliente.numero
    document.getElementById('depressao').checked = cliente.depressao
    document.getElementById('autismo').checked = cliente .autismo
    document.getElementById('cancer').checked = cliente.cancer
    document.getElementById('ala_infantil').checked = cliente.ala_infantil
    document.getElementById('ala_adulto').checked = cliente.ala_adulto
    document.getElementById('cao_guia').checked = cliente.cao_guia
    document.getElementById('sindromes').checked = cliente.sindromes
    document.getElementById('local').value = cliente. local

 }



function salvar(){
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let idade = document.getElementById('idade').value
    let telefone = document.getElementById('telefone').value
    let cep = document.getElementById('cep').value
    let numero = document.getElementById('numero').value
    let depressao = document.getElementById('depressao').checked
    let autismo = document.getElementById('autismo').checked
    let cancer = document.getElementById('cancer').checked
    let ala_infantil = document.getElementById('ala_infantil').checked
    let ala_adulto = document.getElementById('ala_adulto').checked
    let cao_guia = document.getElementById('cao_guia').checked
    let sindromes = document.getElementById('sindromes').checked
    let local = document.getElementById('local').value

    if (nome === undefined || nome === null || nome ===''){
        document.getElementById('erro-nome').classList.remove('fade')
        setTimeout(()=>{
            document.getElementById('erro-nome').classList.add('fade')
        },1500 )
        return
    }
    if (email === undefined || email === null || email ===''){
        document.getElementById('erro-email').classList.remove('fade')
        setTimeout(()=>{
            document.getElementById('erro-email').classList.add('fade')
        },1500 )
        return
    }

    let paciente = {
        nome:nome,
        email:email,
        idade:idade,
        telefone:telefone,
        cep:cep,
        numero:numero,
        depressao:depressao,
        autismo:autismo,
        cancer:cancer,
        ala_infantil:ala_infantil,
        ala_adulto:ala_adulto,
        cao_guia:cao_guia,
        sindromes:sindromes,
        local:local,
    }

    if(formEdicao){
        clientes[indice] = paciente
    }else{
        clientes.push(paciente)
    }

    localStorage.setItem("clientes",JSON.stringify(clientes))

    document.getElementById('sucesso').classList.remove('fade')
    setTimeout(()=>{
        document.getElementById('sucesso').classList.add('fade')
    },1500 )

    limpaformulario()
}
  function limpaformulario(){
    document.getElementById('nome').value = ''
    document.getElementById('email').value = ''
    document.getElementById('idade').value = ''
    document.getElementById('telefone').value =''
    document.getElementById('cep').value =''
    document.getElementById('numero').value =''
    document.getElementById('depressao').checked = false
    document.getElementById('autismo').checked = false 
    document.getElementById('cancer').checked = false
    document.getElementById('ala_infantil').checked = false
    document.getElementById('ala_adulto').checked = false
    document.getElementById('cao_guia').checked = false
    document.getElementById('sindromes').checked = false
    document.getElementById('local').value = ''
  }
