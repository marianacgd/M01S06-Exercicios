function aprovarDadosCadastrais(cliente) {
  return new Promise((resolve, reject) => {
    if (cliente.cpf === 11111111111) resolve(true);
    else reject(false);
  });
}

function aprovarValorSolicitado(cliente, valor) {
  return new Promise((resolve, reject) => {
    if (cliente.margem >= valor) resolve(true);
    else reject(false);
  });
}

const cliente = { cpf: 11111111111, nome: 'Calleri', margem: 1000.0 };
const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0);

// continue com o tratamento dos resultados de ambas as promises...

//metodo usado para aguardar o término de ambas as promises
Promise.all([aprovacaoCadastro, aprovacaoValor])
  .then((results) => {
    if (results[0] === true && results[1] === true) {
      console.log('APROVADO');
    } else {
      console.log('REPROVADO');
    }
  })
  .catch((error) => {
    console.log('REPROVADO');
  })
  .finally(() => {
    console.log('Fim do Processamento'); //impresso independentemente do resultado das promises
  });
