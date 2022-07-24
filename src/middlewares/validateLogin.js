const joi = require('joi');
const CustomException = require('../utils/CustomException');

const userDTO = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
}).messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

const validationLogin = (req, res, next) => {
  const { error } = userDTO.validate(req.body, { abortEarly: false });

  if (!error) {
    return next();
  }
  const [{ message }] = error.details;

  CustomException({ message, status: 400 });
};

module.exports = validationLogin;