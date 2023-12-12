const bebidas = require("../bebidas");
const banco = require("../banco");

function execute(user, msg) {
  if (msg === "*") {
    banco.db[user].stage = 0;
    return ["Pedido cancelado com sucesso"];
  }

  if (msg === "#") {
    banco.db[user].stage = 2;
    return ["Estamos fechando seu pedido, ok?"];
  }

  if (!bebidas.menu[msg]) {
    return [
      "Código inválido, digite corretamente",
      "```Digite # para finalizar ou * para cancelar```",
    ];
  }

  banco.db[user].itens.push(bebidas.menu[msg]);

  return [
    `Item(${bebidas.menu[msg].descricao}) adiconado com sucesso`,
    "```#️⃣ - Para finalizar\n\n*️⃣ - Para cancelar```",
  ];
}

exports.execute = execute;