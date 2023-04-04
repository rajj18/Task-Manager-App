const sgMail = require('@sendgrid/mail')

//const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_Key)

const sendWelcomeEmail = (email,name) => {sgMail.send({
    to: 'abc@test.com',
    from: 'test1@test.com',
    subject: 'This my first creation',
    text: 'I hope this one get to you'
})}

module.exports = {sendWelcomeEmail}