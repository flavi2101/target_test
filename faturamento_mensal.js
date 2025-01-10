const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const faturamento_total = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);

const percentuais = {};
for (const estado in faturamento) {
  percentuais[estado] = ((faturamento[estado] / faturamento_total) * 100).toFixed(2) + '%';
}

console.log('Percentual de representação por estado:');
for (const estado in percentuais) {
  console.log(`${estado}: ${percentuais[estado]}`);
}
