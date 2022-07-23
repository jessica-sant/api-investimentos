const {accountService} = require('../Services');

const getWalletById = async (req, res) => {
  const {id} = req.params;
  const wallet = await accountService.getWalletById(id)
  res.status(200).json(wallet);
};

const withdrawMoney = async (req, res) => {
  const {codCliente, valor}= req.body;
  const updatedWallet = await accountService.withdrawMoney(codCliente, valor);
  res.status(200).json(updatedWallet);
}

const depositMoney = async (req, res) => {
  const {codCliente, valor}= req.body;
  const updatedWallet = await accountService.depositMoney(codCliente, valor);
  res.status(200).json(updatedWallet);
}
module.exports = {
  getWalletById,
  withdrawMoney,
  depositMoney
}