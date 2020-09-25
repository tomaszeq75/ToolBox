// wzór / oryginał

javascript: (function () {
    var a = window,
        b = document,
        c = encodeURIComponent,
        d = a.open('https://start.me/add_bookmark?url=' + c(b.location) + '&title=' + c(b.title), 'startme_popup', 'left=' + ((a.screenX || a.screenLeft) + 400) + ',top=' + ((a.screenY || a.screenTop) + 100) + ',height=500px,width=500px,resizable=1,alwaysRaised=1');
    a.setTimeout(function () {
        if (d) d.focus()
    }, 300)
})();


javascript: (function () {
    var a = window,
        b = document,
        c = encodeURIComponent,
        d = a.open('https://start.me/add_bookmark?url=' + c(b.location) + '&title=' + c(b.title), 'startme_popup', 'left=' + ((a.screenX || a.screenLeft) + 400) + ',top=' + ((a.screenY || a.screenTop) + 100) + ',height=500px,width=500px,resizable=1,alwaysRaised=1');
    a.setTimeout(function () {
        if (d) d.focus()
    }, 300)
})();


// otomoto zdobycie maili z listy subdomen
javascript:
    var subDomainsString = '3cityauto.otomoto.pl,aaaauto.otomoto.pl,aaaautokatowice.otomoto.pl,abskomis.otomoto.pl,acauto.otomoto.pl';
var subDomains = subDomainsString.split(',');
var win = window,
    doc = document,
    emails = [],
    email, aMNailTo;
let d;

subDomains.forEach(element => {
    getEmail(element);
});

function getEmail(subDomain) {
    d = win.open(`https://${subDomain}/`, 'startme_popup');
    win.setTimeout(function () {
        if (d) {
            d.focus();
            aMailTo = doc.getElementById('mailto').href;
            email = aMailTo.slice(7, aMailTo.length);
            emails.push(email);
            alert(`${subDomain} - ${email}`);
        }
    }, 1000);
};

// aMailTo = doc.getElementById('mailto').href;
// alert(email);
// , 'left=' + ((win.screenX || win.screenLeft) + 400) + ',top=' + ((win.screenY || win.screenTop) + 100) + ',height=500px,width=500px,resizable=1,alwaysRaised=1'