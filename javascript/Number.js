//converter de string para number utiliza o number
var numString = '10';
console.log(typeof Number(numString));
//e para converter para string(), utilize o .tostring;
var num = 2021;
console.log(typeof num.toString() );
//convertendo numero para binario
console.log(num.toString(2));
//vc escolhe quantas casas decimais  depois da virgula vc quer ver, utlizando o tofixed
var decimal = 77.777333646373463;

console.log(decimal.toFixed(3));
var outro =  10.99;
console.log(outro.toFixed(0));
var uuu = 11.12;
console.log(Math.ceil(uuu));
//como saber se um numero é inteiro, retorna true se for inteiro e retorna false se não for inteiro
var inteiro = 10;
console.log(Number.isInteger(inteiro));
//vendo se uma conta é valida ou não se  a conta der errada ele retorna true e se não der ele retorna false;
let temp = 20 * "";
console.log(Number.isNaN(temp));
//converter um float para inteiro utlizia parse float
var numfrac  = 1.00;

console.log(Number.isInteger(numfrac));
var numint = parseFloat(numfrac);
console.log(Number.isInteger(numint));

