const form = document.getElementById("form")

form.addEventListener("Submit", (event) => {
    event.preventDefault()

    console.log({
        nome: form.nome.value,
        email: form.email.value,
        telefone: form.telefone.value,
        experiencia: form.experiencia.value,
        vaga: form.vaga.value,
        linguagens: form.linguagens.value,
        portfolio: form.portfolio.value,
        apresentacao: form.apresentacao.value,
        arquivo: form.arquivo.value,
    })

    alert("Dados enviados com sucesso!")

    form.nome.value = ""
    form.email.value = ""
    form.telefone.value = ""
    form.experiencia.value = ""
    form.vaga.value = ""
    form.linguagens.value = ""
    form.portfolio.value = ""
    form.apresentacao.value = ""
    form.arquivo.value = ""
})

//funcão para subir a página

const button = document.createElement("button")
  
button.className = "btn btn-danger position-fixed bottom-0 end-0 m-5"
button.appendChild(document.createTextNode("Ir para o topo"))

button.addEventListener("click", backToTop = () => {
    window.scrollTo(0,0)
});

window.onscroll = () => {
    if (window.scrollY > 300) {
        document.body.appendChild(button)
    } else {
        document.body.removeChild(button)
    }
}
