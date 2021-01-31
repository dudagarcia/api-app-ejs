var nodemailer = require('nodemailer');

var randomNumber = Math.floor(Math.random() * 999999) + 100000;

async function saveEmail(emailCode){
    let response = await fetch('https://localhost:3000/email', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            emailCode: emailCode
        })
    });
    let json = await response.json();
    if(json === 'error') console.log('error');
    else console.log(JSON.stringify(json));
}

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mariaedrgarcia@usp.br',
        password: ''
    }
});

var mailOptions = {
    from: 'mariaedrgarcia@usp.br',
    to: 'artur.cupelli@usp.br', 
    subject: 'Redefinição de senha',
    html: '<html>Olá, sintetizado!</html> <p>Ouvimos dizer que você perdeu sua senha por aí...</p> <p>Para reativá-la, digite' + randomNumber + 'no seu App. Atenção: esse código é temporário e único. Você deverá gerá-lo novamente caso perca esse prazo.</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    } else{
        saveEmail(randomNumber);
        console.log('Email sent: ' + info.response);
    }
});