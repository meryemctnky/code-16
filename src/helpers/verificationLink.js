import crypto from 'crypto';

const generateVerificationLink = (userId) => {
  const verificationCode = crypto.randomBytes(16).toString('hex');
  const url = new URL('https://example.com/verify');
  url.searchParams.set('userId', userId);
  url.searchParams.set('verificationCode', verificationCode);

  return url;
};

module.exports = generateVerificationLink;
