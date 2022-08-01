const sgMail = require('@sendgrid/mail')
require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY) 

const sendMail = (email, name) => {
    sgMail.send({
        To: email, 
        from: 'api_disney@email.com', 
        subject: 'here comes subject line', 
        text: `here comes the body ${name}` 
    }).then((response) => {
        console.log(response[0].statusCode)
        console.log(response[0].headers)
      })
      .catch((error) => {
        console.error(error)
      })
}

module.exports = {
    sendMail
}
