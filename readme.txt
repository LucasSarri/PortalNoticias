--Implementar classes em Javascript (pg 84 ate 94)

-*O que e DAO (Data Access Object)? 
  DAO se trata de um design que busca acessar os dados atraves de objetos.

-*Quais sao as vantagens de se trabalhar com classes neste contexto?
  1 - Design de desenvolvimento DAO (Data Access Object), é quando criamos classes para manipular as informações do banco.
  2 - Podemos controlar os modelos por instâncias, assim previnindo casos de valores de variáveis serem sobrescritos.

-*Qual é a função do Express Validator? Detalhando suas principais funções: notEmpty(), leng(,), isEmail(), isInt() e isAlpha().
  O express validator é um middleware que recebe os dados da requisição atraves do metodo post() para assim realizar a validação dos mesmos. notEmpty() é uma função que confere se um campo é vazio, isAlpha() é uma função que confere se um campo tem valor de texto, isInt() é uma função que confere se o valor de um campo é numerico, isEmail() e len(min,max) é uma função que confere o tamanho do texto.