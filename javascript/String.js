let string = "Um texto";
console.log(string);
//exibir aspas em uma string;
let stringaspas = "Um \"texto\""; 
//string são indexadas e interavel ou seja você pode pegar cracteres, se indice estiver ele rertornará undefined que aponta para nenhum lugar da memoria
console.log(string[1]);
//para pegar um caracter atraveis da posicao vc pode usar chatAt, ele retorna vazio
console.log(string.charAt(4));
//função para concatenar string;
console.log(string.concat("bom"," ", "dia")); 
//mas é preferivel ou usando templates strings;
console.log(`${string} é uma boa maneira de concatenar string`)
console.log(string + "eae beleza");
//para retornar um indice de um determinado caractere, se ele não encontra ele retorna -1
console.log(string.indexOf('e'));
//você pode também mandar que o index of procure um indice apartir de um determinado index utilizando
console.log(string.indexOf('t',4));
//lastIndexof começa do final para o começo da string, por exemplo abaixo ele começa por utilmo e por isso apartir do caracter que esta na posicao 4 ele encontra o u
console.log(string.lastIndexOf('U',4));
//retorna tudo o que combina através de uma expressão regular exemplo
//ele irá trazer todas as letras minusuculas da string
//O g significa que match retornará um array~
//tambem temos o search que retorna o indice igual o index of , porém ele aceita expressões regulares
console.log(string.search(/x/g));
console.log(string.match(/[a-z]/g));



