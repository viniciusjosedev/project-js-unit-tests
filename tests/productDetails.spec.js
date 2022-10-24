const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Teste se productDetails é uma função', () => {
		expect(typeof productDetails).toBe('function');
	});
	it('Teste se o retorno da função é um array', () => {
		expect(typeof productDetails('maisena', 'leite condensado')).toEqual('object');
	});
	it('Teste se o array retornado pela função contém dois itens dentro.', () => {
	  expect(productDetails('maise', 'leite de condensado').length).toEqual(2)
	});
  it("Teste se os dois itens dentro do array retornado pela função são objetos.", () => {
		expect(typeof productDetails('maisa', 'leite condensado')[0] && typeof productDetails('maisa', 'leite condensado')[1]).toEqual('object')
	})
  it("Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.", () => {
		expect(productDetails('maisa', 'leite condensado')[0]['name'] && productDetails('maisa', 'leite condensado')[1]['name']).not.toEqual(productDetails('maisa', 'leite condensado')[0])
	})
  it('Teste se os dois productIds terminam com 123.', () => {
		const verific = () => {
			const final = productDetails('maisa', 'leite condensado');
			let texto = ''
			for (let index = final[0]['details']['productId'].length - 3; index < final[0]['details']['productId'].length; index += 1) {
				texto += final[0]['details']['productId'][index];
			}
			let texto2 = ''
			for (let index = final[1]['details']['productId'].length - 3; index < final[1]['details']['productId'].length; index += 1) {
				texto2 += final[1]['details']['productId'][index];
			}
			if (texto === texto2) {
				return true; 
			} else {
				return false;
			}
		}
		expect(verific()).toEqual(true)
	})
});

