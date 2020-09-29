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

    const contentTexts = {
        intro: 'Witam, <br><br>Wiedzą Państwo, że na <b>intermoto.pl</b> można <b>ZA DARMO</b> wstawiać dowolną ilość ogłoszeń sprzedaży ',
        car: 'samochodów, motocykli ',
        truck: 'samochodów dostawczych, ciężarowych, osobowych, motocykli ',
        motor: 'motocykli, skuterów, quadów, samochodów ',
        agro: 'maszyn rolniczych, samochodów ciężarowych, osobowych ',
        construction: 'maszyn budowlanych, rolniczych, samochodów ciężarowych, osobowych ',
        trailer: 'przyczep, lawet, samochodów ciężarowych, osobowych, motocykli ',
        ending: 'i innych pojazdów a także części?<br><br>' +
            'Można je także importować z:<br>- Akol<br>- Automarket<br>- Autopanel<br>- Allegro<br><br><b>Twoja konkurencja już u nas jest. A TY?</b><br><br>Zapraszamy.<br>Zespół <b>intermoto.pl</b>'
    };

    const email = 'promocja@intermoto.pl',
        phone = '123123123';

    window.scrollTo(0, 5000);

    emailField.value = email;
    phoneField.value = phone;
    checkBox.checked = true;

    setTimeout(() => {
        const promptCode = prompt("Podaj kod z obrazka\n\nDla pojazdów innych niż osobowe użyj na początku:\nc - ciężarowe\nm - motocykle\nr - rolnicze\nb - budowlane\np - przyczepy");
        const [captchaCode, choise] = checkPromptCode(promptCode);
        const content = makeContent(choise);

        contentField.innerHTML = content;
        captchaField.value = captchaCode;

        if (captchaCode) {
            sendButton.click()
        }
    }, 200);



    function checkPromptCode(promptCode) {
        let choise = 'car';
        let captchaCode = promptCode;

        if (promptCode.length == 5) {
            let choiseChar = promptCode[0];
            captchaCode = promptCode.slice(1, 5);

            switch (choiseChar) {
                case 'c':
                    choise = 'truck';
                    break;
                case 'm':
                    choise = 'motor';
                    break;
                case 'r':
                    choise = 'agro';
                    break;
                case 'b':
                    choise = 'construction';
                    break;
                case 'p':
                    choise = 'trailer';
                    break;

                default:
                    break;
            }
        }

        return [captchaCode, choise];
    }


    
    function makeContent(choise) {
        let content = contentTexts.intro;
        content += contentTexts[choise];
        content += contentTexts.ending;
        return content;
    }
};

fillForm();