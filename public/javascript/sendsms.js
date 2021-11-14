
    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    console.log(accountSid);
    const client = require('twilio')(accountSid, authToken);
console.log(dateEl);

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
    to: "+16307409575",
    from: '+19285979465',
    body: `${description}`
})
};

}
sendText();