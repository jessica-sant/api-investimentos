function handleError(error, _req, res, _next) {
  return res.status(error.status || 500).json({ message: error.message });
}

module.exports = handleError;