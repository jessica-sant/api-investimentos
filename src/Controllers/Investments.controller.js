const {investmentService} = require('../Services');

const createInvestment = async (req, res) => {
  const order = await investmentService.createInvestment(req.body);  
  res.status(200).json(order);
}

const sellAsset = async (req, res) => {
  const order = await investmentService.sellAsset(req.body);  
  res.status(200).json(order);
}

module.exports = {
  createInvestment,
  sellAsset
}