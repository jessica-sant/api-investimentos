const {investmentsModel} = require('../Models');
const CustomException = require('../utils/CustomException');
const assetsService = require('./Assets.service')


const checkStock = async (quantity, IdAtivo ) => {
    const ativo = await assetsService.getAssetById(IdAtivo);

    if( quantity > ativo.quantidade){
    return CustomException({ message: 'estoque insuficiente', status:404 })
  }
  return [ativo.valor, ativo.estoque]
}

const checkWallet = async (usuarioId, valor, quantidade) => {
  const {saldo} = await investmentsModel.getWallet(usuarioId)

  const total = quantidade * valor;
  if(total > saldo){
    return CustomException({ message: 'saldo insuficiente', status:404 })
  }
  const newSaldo = saldo - total;
  await investmentsModel.updateSaldo(usuarioId, newSaldo )
  return;
}


const createInvestment = async (pedido) => {
  const {usuarioId, ativoId, quantidade} = pedido;
  const [valorAtivo, estoque] = await checkStock(quantidade,ativoId);
  const newEstoque = estoque - quantidade;
  await checkWallet(usuarioId, valorAtivo, quantidade);
  await investmentsModel.updateStock(newEstoque, ativoId );
  const investimentos = await investmentsModel.getInvestiments(usuarioId, ativoId)

  if(investimentos){
    const newQuantity = investimentos.quantidade + quantidade;
    await investmentsModel.updateQuantity(newQuantity,usuarioId, ativoId)
  } else {
    await investmentsModel.create(pedido);
  }

  return{...pedido, message:'compra aprovada'}
}

module.exports = {
  createInvestment
}