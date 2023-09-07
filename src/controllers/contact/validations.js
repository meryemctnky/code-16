import Joi from 'joi';

const ContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'edu'] } })
    .required(),
  message: Joi.string().required(),
});

export default ContactSchema;
