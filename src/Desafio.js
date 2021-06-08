var moment = require('moment');
var dataAtual = moment(new Date());

var dataPassada = moment("2021-03-09");

var duracao = moment.duration(dataAtual.diff(dataPassada));
 var dias = Math.round(duracao.asMonths())

console.log(dias)
