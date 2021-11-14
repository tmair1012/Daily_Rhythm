
    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    console.log(accountSid);
    const client = require('twilio')(accountSid, authToken);


async function sendText() {


await fetch('api/tasks/', {
    Method: 'GET',
    body: JSON.stringify({
        description,
        time
    })
})

if (`${time}` === dateEl) {
client.messages.create({
    to: process.env.MY_PHONE_NUMBER,
    from: '+19285979465',
    body: `${description}`
})
};

}
sendText();