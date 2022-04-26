
var url = "https://economia.awesomeapi.com.br/last/USD-BRL";

var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, false);
xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

const dados = JSON.parse(xhttp.responseText);
//console.log(dados);
const real = parseFloat(dados.USDBRL.ask);



document.getElementById("custom-label").innerHTML = dados.USDBRL.name;
document.getElementById("custom-label2").innerHTML = "R$ "+real.toFixed(2);
document.getElementById("custom-label3").innerHTML = "Atualizado em: "+dados.USDBRL.create_date.substring(0,10).split("-").slice(0). reverse().join("/")+ " as "+dados.USDBRL.create_date.substring(10,16);
//console.log(dados.USDBRL);
/*
{"USDBRL":{"code":"USD","codein":"BRL","name":"Dólar Americano/Real Brasileiro","high":"5.2656","low":"5.181","varBid":"0.0036","pctChange":"0.07","bid":"5.2527","ask":"5.2537","timestamp":"1644615001","create_date":"2022-02-11 18:30:01"}}
*/
