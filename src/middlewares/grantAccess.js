import Boom from 'boom';

const grantAccess = () => {
  return async (req, res, next) => {
    if (!req.isAuthenticated()) {
      return next(Boom.unauthorized("You don't have permission."));
    }

    next();
  };
};

export default grantAccess;
