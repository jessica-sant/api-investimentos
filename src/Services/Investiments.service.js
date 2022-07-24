const { investmentsModel } = require('../Models');
const CustomException = require('../utils/CustomException');
const assetsService = require('./Assets.service');
const accountService = require('./Account.service');

const checkStock = async (quantity, assetId) => {
  const asset = await assetsService.getAssetById(assetId);

  if (quantity > asset.quantity) {
    return CustomException({ message: 'insufficient stock', status: 400 });
  }
  return [asset.value, asset.stock];
};

const checkWallet = async (userId, value, quantity) => {
  const { balance } = await accountService.getWalletById(userId);

  const total = quantity * value;
  if (total > balance) {
    return CustomException({ message: 'insufficient balance', status: 400 });
  }
  const newBalance = balance - total;
  await investmentsModel.updateSaldo(userId, newBalance);
  return;
};

const createInvestment = async (order) => {
  const { userId, assetId, quantity } = order;
  const [valueAsset, Stock] = await checkStock(quantity, assetId);
  await checkWallet(userId, valueAsset, quantity);
  const newStock = Stock - quantity;
  await investmentsModel.updateStock(newStock, assetId);
  const investments = await investmentsModel.getInvestments(
    userId,
    assetId
  );

  if (investments) {
    const newQuantity = investments.quantity + quantity;
    await investmentsModel.updateQuantity(newQuantity, userId, assetId);
  } else {
    await investmentsModel.create(order);
  }

  return { ...order, message: 'your purchase has been approved' };
};

const updateBalance = async (userId, value, quantity) => {
  const { balance } = await accountService.getWalletById(userId);
  const total = quantity * value;
  const newBalance = balance + total;
  await investmentsModel.updateSaldo(userId, newBalance);
  return;
};

const getAssetById = async (assetId) => {
  const asset = await assetsService.getAssetById(assetId);
  return [asset.value, asset.stock];
};

const sellAsset = async (order) => {
  const { userId, assetId, quantity } = order;
  const investments = await investmentsModel.getInvestments(
    userId,
    assetId
  );
  if (
    !investments ||
    quantity > investments.quantity ||
    quantity <= 0
  ) {
    return CustomException({ message: 'NOT FOUND', status: 404 });
  }
  const [valueAsset, stock] = await getAssetById(assetId);
  await updateBalance(userId, valueAsset, quantity);
  const newStock = quantity + stock;
  await investmentsModel.updateStock(newStock, assetId);
  const newQuantity = investments.quantity - quantity;
  await investmentsModel.updateQuantity(newQuantity, userId, assetId);
  return { ...order, message: 'your sale has been approved' };
};

module.exports = {
  createInvestment,
  sellAsset,
};
