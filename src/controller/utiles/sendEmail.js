const nodemailer = require("nodemailer");

const sendEmail = async (subject, msg, send_to, sent_from, reply_to) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mahakaltower@gmail.com",
      pass: "Mahakal@12345",
    },
  });

  let mailDetails = {
    from: "mahakaltower@gmail.com",
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
