const moment = require('moment');
const { differenceInDays } = require ('date-fns');

var dataInicial = moment ('2020-05-15');
var dataFinal = moment ('2021-05-15');

var diasDeDiferenca = dataFinal.diff(dataInicial, 'days');

var mesesDeDiferenca = dataFinal.diff(dataInicial, 'months');

console.log ('A difereça de dias entre as datas é '+ diasDeDiferenca);
console.log( 'A diferença de meses entre as datas é ' + mesesDeDiferenca);
