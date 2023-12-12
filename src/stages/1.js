const cardapio = require("../cardapio");
const bebidas = require("../bebidas");
const banco = require("../banco");
const ms = require("ms");

function execute(user, msg) {
  if (msg === "*") {
    banco.db[user].stage = 0;
    return ["Pedido cancelado com sucesso"];
  }

  if (msg === "#") {
    banco.db[user].stage = 2;
    return ["Estamos fechando seu pedido, ok?"];
  }

  if (msg == "9") {
    let menu = " BEBIDAS \n\n";

    Object.keys(bebidas.menu).forEach((value) => {
      let element = bebidas.menu[value];
      let price = element.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
      menu += `${value} - ${element.descricao}        ${price} \n`;
    });

    banco.db[user].stage = 9;
    return [menu]
  }

  if (!cardapio.menu[msg]) {
    return [
      "Código inválido, digite corretamente",
      "```Digite # para finalizar ou * para cancelar```",
    ];
  }

  banco.db[user].itens.push(cardapio.menu[msg]);

  return [
    `Item(${cardapio.menu[msg].descricao}) adiconado com sucesso`,
    `Vamos adicionar bebida ?
    9️⃣ - Para Adicionar Bebida
    #️⃣ - Para finalizar
    *️⃣ - Para cancelar`,
  ];
}

exports.execute = execute;