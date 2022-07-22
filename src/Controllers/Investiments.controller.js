const {investmentService} = require('../Services');

const createInvestment = async (req, res) => {
  const compra = await investmentService.createInvestment(req.body);  
  res.status(201).json(compra);
}

module.exports = {
  createInvestment
}