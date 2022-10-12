// pricing.html sivun laskuri.
function laskeHinta(){
    // Otetaan käyttäjän asettaman määrät laskua varten.
    let ssd = document.getElementById('SSD').value;
    let cpu = document.getElementById('CPU').value;
    let ram = document.getElementById('RAM').value;
    
    // Tällä kaavalla muodostetaan kokonaishinta.
    let price = ((ssd * 0.05) + (cpu * 5) + (ram * 2.5));

    // Näytetään tulos selaimessa.
    document.getElementById('hinta').innerHTML = price + " €/month";

}

// Tällä funktiolla vaihdellaan elementtien näkyvyyttä
// käyttäjän valinnan mukaan.
function naytaTiedot(nro) {
    let painettu = document.getElementById("nappi" + nro).value;

    if (painettu == 0){
        document.getElementById("tiedot" + nro).style.visibility = "visible";
        document.getElementById("nappi" + nro).innerHTML = "Hide details";
        document.getElementById("nappi" + nro).value = 1;
        sessionStorage.setItem("button" + nro, nro);
    } else {
        document.getElementById("tiedot" + nro).style.visibility = "hidden";
        document.getElementById("nappi" + nro).innerHTML = "Show details";
        document.getElementById("nappi" + nro).value = 0;
        sessionStorage.removeItem("button" + nro);
    }
}

// Alustetaan info.html sivulla olevat työntekijöiden tiedot
// niin, että ne ovat alussa piilossa ellei käyttäjä ole
// aiemmin painanut "Show details".
function alusta() {
    for (let i = 1; i < 4; i++) {
        document.getElementById("tiedot" + i).style.visibility = "hidden";
    }

    for (let j = 0; j < sessionStorage.length; j++) {
        let key = sessionStorage.key(j);
        k = sessionStorage.getItem(key);
        naytaTiedot(k);
        }
    }
