import Contact from '../../models/contact';
import Boom from 'boom';
import ContactSchema from './validations';

const Create = async (req, res, next) => {
  const input = req.body;

  try {
    const { error } = ContactSchema.validate(input);

    if (error) {
      return next(Boom.badRequest(error.details[0].message));
    }

    const contact = new Contact({
      name: input.name,
      email: input.email,
      message: input.message,
    });

    const savedData = await contact.save();

    res.json(savedData);
  } catch (e) {
    next(e);
  }
};

export default Create;
