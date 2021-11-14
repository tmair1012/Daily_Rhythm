const getDate = moment();
    dateEl = getDate.format('MMMM Do YYYY, h:mm:ss a');
    document.querySelector('#currentday').append(dateEl);
    const accountSid = "ACf61dc874ddcb66a9a95a992265a48c0a"
    const authToken = "98edd61b8d1e9399566b480a159a2c75"
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