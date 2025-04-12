const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_icn3mg9';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar correo';
        alert('¡Correo enviado!');
      }, (err) => {
        btn.value = 'Enviar correo';
        alert(JSON.stringify(err));
      });
  });