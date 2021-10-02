// OTP Login Code By NumeX
// Idea : Galvin Wb Sender

const readline = require('readline-sync');
const rancolor = require("randomcolor");
const {
    Webhook,
    MessageBuilder
} = require('discord-webhook-node');
const request = require("request");
const os = require("os");
const user = os.userInfo().username

// Change it To Your Webhook URL
const webhook = new Webhook("YOUR-WEBHOOK-URL");
webhook.setUsername(`${user}`);

var ran = randomNum(1,9999)
var ranc = rancolor();

// Credit Code : GucktubeYT
function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Login Code
function loginCode() {
    request.get("https://api.ipify.org", async function(err, _res, body){
        if (err)
        {
            // When User/Client Does'nt have a internet connection to make a request
            await console.log("Please Check Your Internet Connection.")
        }
        else
        {
            // Embed
            const em = new MessageBuilder()
                .setTitle("Logs Code")
                .setDescription(`\`\`\`\nUsername : ${user}\nIP Address : ${body}\nCode : ${ran}\`\`\``)
                .setColor(ranc)
            await webhook.send(em)

            // User / Client Input 
            console.log("[ ! ] Login Verify System || (c) NumeX")
            console.log("[ ! ] The Verifycation Code Has Been Sended")
            code = readline.questionInt("[ ? ] Enter Verifycation Code : ")

            // if the code is not same with the verify code
            if (code != ran)
            {
                setTimeout(() => {
                    console.log("[ ! ] Wrong Code")
                }, 500)
                console.clear()
            }
            else // But if the code is same
            {
                setTimeout(() => {
                    console.log("Successfully Login")
                }, 500);
                console.clear()
            }
        }
    })
}

function run() {
    try {
        loginCode()
    } catch (err) {
        return console.log("Something Went Wrong, Maybe an error.");
    }
}
run()