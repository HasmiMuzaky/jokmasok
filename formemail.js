function emailSend() {

    Email.send({
        Host : "smtp.mailendo.com",
        Username : "bajubajamur@gmail.com",
        Password : "C8B6419FDD14E1597C7C574FCEF0DFE5EF20",
        To : 'hasmimuzaky68@gmail.com',
        From : "bajubajamur@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}