const Joi = require('joi');

// add admin schema
const addAdminSchema = Joi.object({
  name: Joi.string().min(5).max(50).required(),
  email: Joi.string().email().min(5).max(50).required(),
  password: Joi.string().min(8).max(1024).required()
});

// admin login validation schema
const AdminLoginSchema = Joi.object({
  email: Joi.string().email().min(5).max(50).required(),
  password: Joi.string().min(8).max(1024).required()
});

// middleware to validate user input
const validateAdminUserInput = (type) => (req, res, next) => {
  let schema;
  if(type === 'signup') schema = addAdminSchema;
  else if(type === 'login') schema = AdminLoginSchema;
  else return res.status(400).json({ error: "Invalid validation type" });

  const { error } = schema.validate(req.body);
  if(error) {
    // error -> [Error [ValidationError]: "password" is required] { 
    //   _original: { email: 'ten.internship1@gmail.com' },
    //   details: [
    //     {
    //       message: '"password" is required',
    //       path: [Array],
    //       type: 'any.required',
    //       context: [Object]
    //     }
    //   ]
    // }
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
}

module.exports = validateAdminUserInput;