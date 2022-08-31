# Bem vindo ao repositório do projeto Pixels Art

## Comentários
O projeto mais difícil até o momento!! Me dediquei bastante, pesquisei muito e pedi ajuda para conseguir fazer esse projeto. Sinto agora, depois de concluir, que realmente é incrível JavaScript.

---

## Instalação do projeto localmente:

1. No terminal, em um diretório de sua escolha, clonar o repositório:

```
git clone git@github.com:lucas-da-silva/pixels-art.git
```

2. Dentro do reposítorio, basta abrir o arquivo index.html para visualizar o projeto no navegador. :rocket:

--- 

## Requisitos

## 1 - Adicione à página o título "Paleta de Cores".

<details>
  <summary>Sua página deve conter o título "Paleta de Cores"</summary><br />

- O título deverá ficar dentro de uma tag `h1` com o `id` denominado `title`;

- O texto do título deve ser **exatamente** "Paleta de Cores".

</details>

## 2 - Adicione à página uma paleta contendo quatro cores distintas.

<details>
  <summary>Sua página deve conter uma paleta com quatro cores</summary>

- A paleta de cores deve ser um elemento com `id` denominado `color-palette`, e cada cor individual contida na paleta de cores deve possuir a `classe` chamada `color`;

- A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. **A única cor não permitida na paleta é a cor branca**;

- Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;

- A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título `Paleta de Cores`;

- A paleta de cores não deve conter cores repetidas.

</details>

## 3 - Adicione a cor **preta** como a primeira cor da paleta de cores.

<details>
  <summary>A primeira cor na paleta criada no requisito 2 deve ser preta </summary><br />

</details>

## 4 - Adicione à página um quadro contendo 25 pixels.

<details>
  <summary>Sua página deve conter um quadro de pixels 5x5</summary>

- O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

- O quadro de "pixels" deve possuir o `id` denominado `pixel-board`, ao passo que cada "pixel" individual dentro do quadro deve possuir a `classe` denominada `pixel`;

-  Ao abrir a página, a cor inicial dos "pixels" que compõem o quadro de pixels deve ser branca;

-  O quadro de "pixels" deve aparecer abaixo da paleta de cores.

</details>


## 5 - Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura.

<details>
  <summary>Cada <code>pixel</code> do quadro deve possuir 40px de largura e 40px de altura e uma borda preta solida de 1px de espessura</summary><br />

</details>

## 6 - Defina a cor preta como cor inicial da paleta de cores

<details>
  <summary>Ao carregar a página, a cor preta já deve estar selecionada na paleta para pintar os pixels do quadro.</summary>

- O elemento da cor preta deve possuir inicialmente a classe `selected`;

- O elemento que deverá receber a classe `selected` deve ser um dos elementos que possuem a classe `color`, como especificado no **requisito 2**.

</details>

## 7 - Selecione uma cor na paleta de cores e preencha os pixels no quadro.

<details>
  <summary>Ao clicar em outras cores da paleta de cores, a cor deve ser selecionada e poderá ser utilizada para preencher os quadros</summary>

- A `classe` `selected` deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

- Somente uma das cores da paleta deve ter a classe `selected` de cada vez;

- Os elementos que deverão receber a `classe` `selected` devem ser os mesmos elementos que possuem a classe `color`, como especificado no **requisito 2**.

</details>

## 8 - Preencha um pixel do quadro com a cor selecionada na paleta de cores.

<details>
  <summary>Ao clicar em algum <code>pixel</code>  do quadro a sua cor deve ser alterada para a cor selecionada na paleta de cores</summary><br />

</details>

## 9 - Crie um botão que retorne a cor do quadro para a cor inicial.

<details>
  <summary>Sua página deve ter um botão que, ao ser clicado, deixe todos os <code>pixels</code> do quadro com a cor branca</summary><br />

</details>

## Requisitos Bônus

## 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.

<details>
  <summary>Sua página deve conter um input para que a pessoa usuária possa definir o tamanho do quadro de pixels</summary>

- Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de **N** pixels de largura e **N** pixels de altura, em que **N** é o número inserido no input. Ou seja, se o valor passado para o input for igual a 7, ao clicar no botão, será gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura);


- O input deve ter o `id` denominado `board-size` e o botão deve ter o `id` denominado `generate-board`;

- O input só deve aceitar número maiores que zero. Essa restrição **deve** ser feita usando os atributos do elemento `input`;

- O botão deve conter o texto "VQV";

- O input deve estar posicionado entre a paleta de cores e o quadro de pixels;

- O botão deve estar posicionado ao lado do input;

- Se nenhum valor for colocado no input ao clicar no botão, mostre um `alert` com o texto: "Board inválido!";

- O novo quadro deve ter todos os pixels preenchidos com a cor branca.

</details>

## 11 - Limite o tamanho mínimo e máximo do quadro de pixels.

<details>
  <summary>A pessoa usuária não pode definir um quadro com menos que 5 e mais que 50 <code>pixels</code></summary>

- Caso o valor digitado no input `board-size` esteja fora do intervalo de 5 a 50, faça:

1. Se o valor de `board-size` for menor que 5, considere 5 `pixels` como padrão;

2. Se o valor de `board-size`  for maior que 50, considere 50 `pixels` como padrão.

</details>

## 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.

<details>
  <summary>A cor preta ainda precisa estar presente e deve ser a primeira na sua paleta de cores.</summary><br />

</details>
