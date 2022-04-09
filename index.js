// let num = numero.value;
const results = document.querySelector(".results");
const texto = document.createElement("h2")
const somar = document.getElementById("somar")
const subtrair = document.getElementById("subtrair")
const multiplicar = document.getElementById("multiplicar")
const dividir = document.getElementById("dividir")
const limpar = document.getElementById("limpar")

start()

function start() {
        
    texto.innerHTML = 'O resultado aparecerá aqui'
    texto.style.color = 'black'
    results.appendChild(texto)

    somar.addEventListener("click", () => {
        calcularSoma();
    })
    subtrair.addEventListener("click", () => {
        calcularSubtracao();
    })
    multiplicar.addEventListener("click", () => {
        calcularMultiplicacao();
    })
    dividir.addEventListener("click", () => {
        calcularDivisao();
    })
    limpar.addEventListener("click", () => {
        
        limparTabuada()
    })
}
    


function calcularSoma() {
    const numero = document.getElementById("numero").value;
    let num = parseInt(numero)
    
    const qtd = document.getElementById("qtd").value;
    let rep = parseInt(qtd)


    if (numero === '') {
        alert("Preencha o campo corretamente!")
    }else {
        texto.style.color = "black"
        texto.innerHTML = 'Calculando...'

        setTimeout(() => { 
            texto.innerHTML = ''

            for(i = 1; i <= rep; i++ ){
                res = num + i;

                let p = document.createElement("p")
                p.innerHTML = `${num} + ${i} = ${res}` 
                p.classList.add("p")
                results.appendChild(p)   
            }  
        }, 2000);
    } 
}

function calcularSubtracao() {
    const numero = document.getElementById("numero").value;
    let num = parseInt(numero) 

    const qtd = document.getElementById("qtd").value;
    let rep = parseInt(qtd)

    if (numero === '') {
        alert("Preencha o campo corretamente!")
    }else {
        texto.style.color = "black"
        texto.innerHTML = 'Calculando...'
    
        setTimeout(() => { 
            texto.innerHTML = ''

            for(i=1; i<= rep; i++ ){
                res = num - i;

                let p = document.createElement("p")
                p.innerHTML = `${num} - ${i} = ${res}` 
                p.classList.add("p")

                results.appendChild(p)   
            }  
        }, 2000);
    } 
}

function calcularMultiplicacao() {
    const numero = document.getElementById("numero").value;
    let num = parseInt(numero) 

    const qtd = document.getElementById("qtd").value;
    let rep = parseInt(qtd)

    if (numero === '') {
        alert("Preencha o campo corretamente!")
    }else {
        texto.style.color = "black"
        texto.innerHTML = 'Calculando...'
    
        setTimeout(() => { 
            texto.innerHTML = ''

            for(i=1; i<= rep; i++ ){
                res = num * i;

                let p = document.createElement("p")
                p.innerHTML = `${num} x ${i} = ${res}` 
                p.classList.add("p")

                results.appendChild(p)   
            }  
        }, 2000);
    } 
}

function calcularDivisao() {
    const numero = document.getElementById("numero").value;
    let num = parseInt(numero) 

    const qtd = document.getElementById("qtd").value;
    let rep = parseInt(qtd)

    if (numero === '') {
        alert("Preencha o campo corretamente!")
    }else {
        texto.style.color = "black"
        texto.innerHTML = 'Calculando...'
    
        setTimeout(() => { 
            texto.innerHTML = ''

            for(i=1; i<= rep; i++ ){
                res = i / num;

                let p = document.createElement("p")
                p.innerHTML = `${i} / ${num}  = ${res}` 
                p.classList.add("p")

                results.appendChild(p)   
            }  
        }, 2000);
    } 
}

function limparTabuada() {
   
   let a = results
   a.innerHTML = ''
   texto.innerHTML = 'O resultado aparecerá aqui'
   texto.style.color = "white"
   results.appendChild(texto)
}



