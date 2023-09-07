import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: true,
  },
});

UserSchema.pre('save', async function (next) {
  try {
    if (this.isNew) {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(this.password, salt);
      this.password = hashed;
    }

    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.isValidPass = async function (pass) {
  const hash = this.password;
  return await bcrypt.compare(pass, hash);
};

const User = mongoose.model('user', UserSchema);

export default User;
