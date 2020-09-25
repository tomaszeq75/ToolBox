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

    const content = 'Witam, \n\nWiedzą Państwo, że na intermoto.pl można ZA DARMO wstawiać dowolną ilość ogłoszeń sprzedaży samochodów, motocykli i innych pojazdów a także części?\n\n' +
        'Można je także importować z:\n- Akol\n- Automarket\n- Autopanel\n- Allegro\n\nTwoja konkurencja już u nas jest. A TY?\n\nZapraszamy.\nZespół intermoto.pl',
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
        if (captchaCode) sendButton.click();
    }, 200);
};

fillForm();