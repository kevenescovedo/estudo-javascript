function calcular(x1,x2,operator) {
  //eval executa uma string e vai executar algo, tipo ele vai ver a instrução e executar
 return eval( `${x1} ${operator} ${x2}`);
 
}
let resultado = calcular(77,7,"*");
console.log(resultado);
// você pode chamar uma função anonima quando ela é criada
(function(condicao){
    if(condicao) {
        console.log("chuta pro gol")
    }
    else {
          console.log("tocar para companheiro livre")
    }
})(true)
//arrow function não é so função encurtada, 
let arrow_function = (algo, algo2) => {
    console.log(`${algo},${algo2}`);
}
arrow_function("mamonas","assasinas");
//adicionar um evento para nossa window, toda vez que o usuario focar na minha janela eu executo
// event recbe o evento do navegador, windows e minha janela
window.addEventListener('focus', event => {
 console.log('focus'+ event);
})
//podemos adicionar evento para a variavel document, e o site
document.addEventListener("click", (event) => {
    console.log('click'+ event);
})
// instanciando a classe date e craindo um objeto e pegando data de agora . date.now, pega os milisegundos de 150000000
let data = new Date();
console.log(data);
// pegar a dia da data
console.log(data.getDate());
// pegar o ano completo
console.log(data.getFullYear());
//pegar o mes
console.log(data.getMonth);
// você pode usar o local do usuario para mostrar a data no seu pais
console.log(data.toLocaleString("pt-br")); // mostra data e hora
console.log(data.toLocaleDateString("pt-br")); //MOSTRA data 
//de data para timestamp 


var myDate = "26-02-2012";

myDate = myDate.split("-");
var newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
console.log(newDate.getTime());
// de timestamp para data
var date = new Date(1389135600*1000); // converte para data
console.log(date.toLocaleDateString("pt-BR")); 
function calcTime(city, offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    return "The local time for city"+ city +" is "+ nd.toLocaleString();
}

alert(calcTime('Bombay', '+5.5'));
//array
let algo = ["dado1", "dado2", 1,2,3, new Date(), ()=> {
    console.log("eae;")
}]
console.log(algo);
console.log(algo[5]);
var eae = algo[6];
eae();
//percorrendo array trazendo valor e indice, e um afunção que está dentro do objeto array, cri
algo.forEach(function (value, index){
    console.log(index, value);

})
// criando um objeto
let Celular = function () {
   this.cor = "preto";
   this.ligar = function () {
       print("ligar");
       return "ligando";
   }
}
 let celular = new Celular();
 console.log(celular);
 console.log(celular.ligar());
 class Computador {
     constructor () {
       this.marca = "sansu";
     }
     get pegamarca() {
         return this.marca;
     }
     ligar() {
     console.log("pc ligando");
     }
 }
 var pc = new Computador();
 console.log(pc.pegamarca);
 
