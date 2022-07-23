const {accountService} = require('../Services');

const getWalletById = async (req, res) => {
  const {id} = req.params;
  const wallet = await accountService.getWalletById(id)
  res.status(200).json(wallet);
};

module.exports = {
  getWalletById
}