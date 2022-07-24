const {accountService} = require('../Services');

const getWalletById = async (req, res) => {
  const {id} = req.params;
  const { id: userId } = res.locals.payload;
  const wallet = await accountService.getWalletById(id, userId)
  res.status(200).json(wallet);
};

const withdrawMoney = async (req, res) => {
  const {id, value}= req.body;
  const updatedWallet = await accountService.withdrawMoney(id, value);
  res.status(200).json(updatedWallet);
}

const depositMoney = async (req, res) => {
  const {id, value}= req.body;
  const updatedWallet = await accountService.depositMoney(id, value);
  res.status(200).json(updatedWallet);
}
module.exports = {
  getWalletById,
  withdrawMoney,
  depositMoney
}