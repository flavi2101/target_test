const fs = require('fs').promises;

async function readJsonFile(filePath)
{
	try
	{
		const data = await fs.readFile(filePath, 'utf8');
		const jsonData = JSON.parse(data);
		return jsonData;
	}
	catch (error) 
	{
		throw new Error(`Error reading file: ${error.message}`);
	}
}

async function main()
{
	try
	{
		const filePath = 'dados.json';
		const jsonData = await readJsonFile(filePath);

		let min_value = jsonData[0].valor;
		let max_value = jsonData[0].valor;
		let grater_than_mean = [];
		jsonData.forEach(element => {
			if (element.valor < min_value) {
			min_value = element.valor;
		}
		if (element.valor > max_value) {
			max_value = element.valor;
		}
});

let media = jsonData.reduce((acc, element) => acc + element.valor, 0) / jsonData.length;
jsonData.forEach(element =>
	{
		if (element.valor > media) {
			grater_than_mean.push(element.dia);
		}
	});
console.log(`Menor valor: ${min_value}`);
console.log(`Maior valor: ${max_value}`);
console.log(`Média: ${media}`);
grater_than_mean.forEach(element =>
	{
		console.log(`Dias com valor acima da média: ${element}`);
	})

	}
	catch (error) {
		console.error('Error:', error.message);
	}
}
main();
