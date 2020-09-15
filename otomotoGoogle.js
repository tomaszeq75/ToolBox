/**
 * zbieranie subdomen otomoto z:
 * 1. wyników google site:.otomoto.pl
 * 2. https://securitytrails.com/list/apex_domain/otomoto.pl
 */

getFromSecuritytrails();

// securitytrails.com
function getFromSecuritytrails() {
    let allNodeList = document.querySelectorAll('tr.data-row td:nth-child(2) a')
    let subDomainsArray = [];
    allNodeList.forEach(item => subDomainsArray.push(item.innerText))
    download(subDomainsArray.join('\r\n'));
}


// google
function getFromGoogle() {

    let allNodeList = document.querySelectorAll('a')
    let nodeAList = [...allNodeList].filter(hostFilter)
    let subDomains = nodeAList.map((item) => {
        return item.host;
    })

    download(subDomains.join('\r\n'));
    nextPage();
}

// funkcje pomocnicze

// filtr domeny
function hostFilter(node) {
    return node.host.includes('.otomoto.pl');
}

// następna strona 
function nextPage() {
    let nextButton = document.getElementById("pnnext");
    setTimeout(function () {
        if (nextButton) {
            nextButton.click();
        } else {
            alert("To była ostatnia strona!");
        }
    }, 250);
}

//download
function download(content, fileName = 'dane.csv', contentType = 'text/csv') {
    let a = document.createElement("a");
    let file = new Blob([content], {
        type: contentType
    });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}