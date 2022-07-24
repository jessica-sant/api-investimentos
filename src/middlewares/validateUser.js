const joi = require('joi');
const CustomException = require('../utils/CustomException');

const schema = joi.object({
  name: joi.string().min(4).required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});


const validateUser = (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (!error) {
    return next();
  }
  const [{ message }] = error.details;

  CustomException({ message, status: 400 });
};

module.exports = validateUser;