/**
 * Automaryczne wypełnianie formularzy w gratce
 * 
 */

function fillForm() {
    const contentField = document.getElementById('tresc'),
        emailField = document.getElementById('nadawca'),
        phoneField = document.getElementById('numer-telefonu'),
        captchaField = document.getElementById('captcha'),
        checkBox = document.getElementById('kontakt-zgoda'),
        sendButton = document.getElementById('wyslij_dol');

    const content = 'Witam, <br><br>Wiedzą Państwo, że na <b>intermoto.pl</b> można <b>ZA DARMO</b> wstawiać dowolną ilość ogłoszeń sprzedaży samochodów, motocykli i innych pojazdów a także części?<br><br>' +
        'Można je także importować z:<br>- Akol<br>- Automarket<br>- Autopanel<br>- Allegro<br><br><b>Twoja konkurencja już u nas jest. A TY?</b><br><br>Zapraszamy.<br>Zespół <b>intermoto.pl</b>',
        email = 'promocja@intermoto.pl',
        phone = '123123123';

    window.scrollTo(0, 5000);

    contentField.innerHTML = content;
    emailField.value = email;
    phoneField.value = phone;
    checkBox.checked = true;

    setTimeout(() => {
        const captchaCode = prompt("Podaj kod z obrazka");
        captchaField.value = captchaCode;
        if (captchaCode) {sendButton.click()} else captchaField.focus();
    }, 200);
};

fillForm();

