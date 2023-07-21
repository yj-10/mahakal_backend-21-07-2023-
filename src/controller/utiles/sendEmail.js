const nodemailer = require("nodemailer");

const sendEmail = async (subject, msg, send_to, sent_from, reply_to) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vikas.infosense@gmail.com",
      pass: "emsounujudwfuhyt",
    },
  });

  let mailDetails = {
    from: "vikas.infosense@gmail.com",
    to: send_to,
    subject: subject,
    text: msg,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
};

module.exports = sendEmail;
