const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const documentationLink = process.env.DOCUMENTATION_LINK;

function sendMail(email, name) {
  sgMail
    .send({

      to: {
        email: email,
        name: name,
      },

      dynamic_template_data: 
        {"first_name": name},

      from: {
        email: "luis.iglesias.dev@gmail.com",
        name: "Luis Javier Iglesias",
      },

      subject: "Welcome to my API Disney ",

      template_id: process.env.TEMPLATE_ID,
    })
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = sendMail;
