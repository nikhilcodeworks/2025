const Joi = require('joi');

// add admin schema
const studentSignupSchema = Joi.object({
  name: Joi.string().min(5).max(50).required(),
  email: Joi.string().email().min(5).max(50).required(),
  password: Joi.string().min(8).max(1024).required()
});

// admin login validation schema
const studentLoginSchema = Joi.object({
  email: Joi.string().email().min(5).max(50).required(),
  password: Joi.string().min(8).max(1024).required(),
});

const validateStudentInput = (type) => (req, res, next) => {
  let schema;
  if (type === "signup") schema = studentSignupSchema;
  else if (type === "login") schema = studentLoginSchema;
  else return res.status(400).json({ error: "Invalid validation type" });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

module.exports = validateStudentInput;