const Joi = require("joi");

// Schema for recruiter signup validation
const recruiterSignupSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 3 characters",
    "string.max": "Name must be at most 50 characters",
  }),
  email: Joi.string().email().min(5).max(50).required().messages({
    "string.email": "Invalid email format",
    "string.empty": "Email is required",
    "string.min": "Email must be at least 5 characters",
    "string.max": "Email must be at most 50 characters",
  }),
  password: Joi.string().min(8).max(1024).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password must be at least 8 characters",
  }),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.empty": "Phone number is required",
      "string.pattern.base": "Phone number must be exactly 10 digits",
    }),
  company: Joi.string().min(2).max(100).required().messages({
    "string.empty": "Company name is required",
    "string.min": "Company name must be at least 2 characters",
    "string.max": "Company name must be at most 100 characters",
  }),
});

// Schema for recruiter login validation
const recruiterLoginSchema = Joi.object({
  email: Joi.string().email().min(5).max(50).required().messages({
    "string.email": "Invalid email format",
    "string.empty": "Email is required",
  }),
  password: Joi.string().min(8).max(1024).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password must be at least 8 characters",
  }),
});

// Middleware for validation
const validateRecruiterInput = (type) => (req, res, next) => {
  const schema =
    type === "signup" ? recruiterSignupSchema :
    type === "login" ? recruiterLoginSchema :
    null;

  if (!schema) return res.status(400).json({ error: "Invalid validation type" });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      error: error.details.map((err) => err.message),
    });
  }

  next();
};

module.exports = validateRecruiterInput;
