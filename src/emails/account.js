const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pm@grasspal.com',
        subject: 'Thanks for joiing Task App',
        text: `Hi ${name}, welcome to this app!`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pm@grasspal.com',
        subject: 'Goodbye!',
        text: `Hi ${name}, we are sorry to see you go!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}