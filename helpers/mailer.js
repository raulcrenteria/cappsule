const mailer    = require(`nodemailer`),
      transport = mailer.createTransport({
        service: `SendGrid`,
        auth: {
          user: process.env.SEND_USER,
          pass: process.env.SEND_PASS
        }
      });

transport.verify(function(error, success) {
  if (error) console.log(error);
  else console.log('Server is ready to take our messages');
});

exports.send = (options) => {
  const mailOptions = {
    from:    `Cappsule App <noreply@ironhack.com>`,
    to:      options.email,
    subject: `Subject: ${options.subject}`,
    text:    options.message,
    hmtl:    `<h1>${options.subject}</h1>`
  };
  return transport.sendMail(mailOptions);
}