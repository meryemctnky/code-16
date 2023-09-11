const nodemailer = require('nodemailer');

const sendVerificationEmail = async (userEmail, verificationLink) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.NODE_MAIL,
        pass: process.env.NODE_PASS,
      },
    });

    const mailOptions = {
      from: 'smartcity@gmail.com',
      to: userEmail,
      subject: 'Üyelik Doğrulama',
      text: `Merhaba,\n\nÜyeliğinizi doğrulamak için lütfen aşağıdaki bağlantıya tıklayın:\n\n${verificationLink}`,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Doğrulama e-postası gönderildi:', info.response);
  } catch (error) {
    console.error('Doğrulama e-postası gönderme hatası:', error);
  }
};

module.exports = sendVerificationEmail;
