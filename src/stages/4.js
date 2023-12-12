const banco = require("../banco");

function execute(user, msg) {
  // criar aqui função para envio do pedido para algum lugar
  // as informações estão aqui -> banco.db[user]
  banco.db[user].stage = 0;
  banco.db[user].itens = []
  return [
    "Obrigado pela preferencia.",
    "Jajá lhe informamos o valor do frete",
    "Aguarde, seu pedido chegará em 40min no maximo",
    "Mais informações ligue para 62 9 9999-9999",
  ];
}

exports.execute = execute;