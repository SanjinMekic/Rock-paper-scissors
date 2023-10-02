function vratiRandomBroj() {
  return Math.floor(Math.random() * 3) + 1;
}

var brojacRezultataIgraca = 0;
var brojacRezultataKompa = 0;
var brojacNerijesenih = 0;

function glavnaFunkcija(m) {
  const randomBroj = vratiRandomBroj();
  if (m == 1) {
    document.getElementById("slikaZaIgraca").style.backgroundImage =
      "url(kamen.jpg)";
    if (randomBroj == 1) {
      document.getElementById("slikaZaKompijutera").style.backgroundImage =
        "url(rock.jpg)";
      brojacNerijesenih += 1;
      document.getElementById("tiee").innerHTML = brojacNerijesenih;
      giveTheCrown();
      document.getElementById("rock").style.opacity = "100" + "%";
      document.getElementById("rock").style.scale = "1.1";
      document.getElementById("paper").style.opacity = "20" + "%";
      document.getElementById("paper").style.scale = "1";
      document.getElementById("scissors").style.opacity = "20" + "%";
      document.getElementById("scissors").style.scale = "1";
    } else if (randomBroj == 2) {
      document.getElementById("slikaZaKompijutera").style.backgroundImage =
        "url(paper.jpg)";
      brojacRezultataKompa += 1;
      document.getElementById("compp").innerHTML = brojacRezultataKompa;
      giveTheCrown();
      document.getElementById("rock").style.opacity = "20" + "%";
      document.getElementById("rock").style.scale = "1";
      document.getElementById("paper").style.opacity = "100" + "%";
      document.getElementById("paper").style.scale = "1.1";
      document.getElementById("scissors").style.opacity = "20" + "%";
      document.getElementById("scissors").style.scale = "1";
    } else if (randomBroj == 3) {
      document.getElementById("slikaZaKompijutera").style.backgroundImage =
        "url(scissors.jpg)";
      brojacRezultataIgraca += 1;
      document.getElementById("youu").innerHTML = brojacRezultataIgraca;
      giveTheCrown();
      document.getElementById("rock").style.opacity = "20" + "%";
      document.getElementById("rock").style.scale = "1";
      document.getElementById("paper").style.opacity = "20" + "%";
      document.getElementById("paper").style.scale = "1";
      document.getElementById("scissors").style.opacity = "100" + "%";
      document.getElementById("scissors").style.scale = "1.1";
    }
  } else if (m == 2) {
    document.getElementById("slikaZaIgraca").style.backgroundImage =
      "url(papir.jpg)";
    if (randomBroj == 1) {
      document.getElementById("slikaZaKompijutera").style.backgroundImage =
        "url(rock.jpg)";
      brojacRezultataIgraca += 1;
      document.getElementById("youu").innerHTML = brojacRezultataIgraca;
      giveTheCrown();
      document.getElementById("rock").style.opacity = "100" + "%";
      document.getElementById("rock").style.scale = "1.1";
      document.getElementById("paper").style.opacity = "20" + "%";
      document.getElementById("paper").style.scale = "1";
      document.getElementById("scissors").style.opacity = "20" + "%";
      document.getElementById("scissors").style.scale = "1";
    } else if (randomBroj == 2) {
      document.getElementById("slikaZaKompijutera").style.backgroundImage =
        "url(paper.jpg)";
      brojacNerijesenih += 1;
      document.getElementById("tiee").innerHTML = brojacNerijesenih;
      giveTheCrown();
      document.getElementById("rock").style.opacity = "20" + "%";
      document.getElementById("rock").style.scale = "1";
      document.getElementById("paper").style.opacity = "100" + "%";
      document.getElementById("paper").style.scale = "1.1";
      document.getElementById("scissors").style.opacity = "20" + "%";
      document.getElementById("scissors").style.scale = "1";
    } else if (randomBroj == 3) {
      document.getElementById("slikaZaKompijutera").style.backgroundImage =
        "url(scissors.jpg)";
      brojacRezultataKompa += 1;
      document.getElementById("compp").innerHTML = brojacRezultataKompa;
      giveTheCrown();
      document.getElementById("rock").style.opacity = "20" + "%";
      document.getElementById("rock").style.scale = "1";
      document.getElementById("paper").style.opacity = "20" + "%";
      document.getElementById("paper").style.scale = "1";
      document.getElementById("scissors").style.opacity = "100" + "%";
      document.getElementById("scissors").style.scale = "1.1";
    }
  } else if (m == 3) {
    document.getElementById("slikaZaIgraca").style.backgroundImage =
      "url(makaze.jpg)";
    if (randomBroj == 1) {
      document.getElementById("slikaZaKompijutera").style.backgroundImage =
        "url(rock.jpg)";
      brojacRezultataKompa += 1;
      document.getElementById("compp").innerHTML = brojacRezultataKompa;
      giveTheCrown();
      document.getElementById("rock").style.opacity = "100" + "%";
      document.getElementById("rock").style.scale = "1.1";
      document.getElementById("paper").style.opacity = "20" + "%";
      document.getElementById("paper").style.scale = "1";
      document.getElementById("scissors").style.opacity = "20" + "%";
      document.getElementById("scissors").style.scale = "1";
    } else if (randomBroj == 2) {
      document.getElementById("slikaZaKompijutera").style.backgroundImage =
        "url(paper.jpg)";
      brojacRezultataIgraca += 1;
      document.getElementById("youu").innerHTML = brojacRezultataIgraca;
      giveTheCrown();
      document.getElementById("rock").style.opacity = "20" + "%";
      document.getElementById("rock").style.scale = "1";
      document.getElementById("paper").style.opacity = "100" + "%";
      document.getElementById("paper").style.scale = "1.1";
      document.getElementById("scissors").style.opacity = "20" + "%";
      document.getElementById("scissors").style.scale = "1";
    } else if (randomBroj == 3) {
      document.getElementById("slikaZaKompijutera").style.backgroundImage =
        "url(scissors.jpg)";
      brojacNerijesenih += 1;
      document.getElementById("tiee").innerHTML = brojacNerijesenih;
      giveTheCrown();
      document.getElementById("rock").style.opacity = "20" + "%";
      document.getElementById("rock").style.scale = "1";
      document.getElementById("paper").style.opacity = "20" + "%";
      document.getElementById("paper").style.scale = "1";
      document.getElementById("scissors").style.opacity = "100" + "%";
      document.getElementById("scissors").style.scale = "1.1";
    }
  }
}

function resetuj() {
  brojacRezultataIgraca = 0;
  brojacRezultataKompa = 0;
  brojacNerijesenih = 0;
  document.getElementById("youu").innerHTML = brojacRezultataIgraca;
  document.getElementById("compp").innerHTML = brojacRezultataKompa;
  document.getElementById("tiee").innerHTML = brojacNerijesenih;
}

function funkcija1() {
  document.getElementById("slikaZaIgraca").style.backgroundImage =
    "url(kamen.jpg)";
  var zvuk = new Audio("kamen.mp3");
  zvuk.play();
}

function funkcija11() {
  document.getElementById("slikaZaIgraca").style.backgroundImage = "unset";
  document.getElementById("slikaZaKompijutera").style.backgroundImage = "unset";
  document.getElementById("rock").style.opacity = "20" + "%";
  document.getElementById("rock").style.scale = "1";
  document.getElementById("paper").style.opacity = "20" + "%";
  document.getElementById("paper").style.scale = "1";
  document.getElementById("scissors").style.opacity = "20" + "%";
  document.getElementById("scissors").style.scale = "1";
}

function funkcija2() {
  document.getElementById("slikaZaIgraca").style.backgroundImage =
    "url(papir.jpg)";
  var zvuk = new Audio("papir.wav");
  zvuk.play();
}

function funkcija22() {
  document.getElementById("slikaZaIgraca").style.backgroundImage = "unset";
  document.getElementById("slikaZaKompijutera").style.backgroundImage = "unset";
  document.getElementById("rock").style.opacity = "20" + "%";
  document.getElementById("rock").style.scale = "1";
  document.getElementById("paper").style.opacity = "20" + "%";
  document.getElementById("paper").style.scale = "1";
  document.getElementById("scissors").style.opacity = "20" + "%";
  document.getElementById("scissors").style.scale = "1";
}

function funkcija3() {
  document.getElementById("slikaZaIgraca").style.backgroundImage =
    "url(makaze.jpg)";
  var zvuk = new Audio("makaze.mp3");
  zvuk.play();
}

function funkcija33() {
  document.getElementById("slikaZaIgraca").style.backgroundImage = "unset";
  document.getElementById("slikaZaKompijutera").style.backgroundImage = "unset";
  document.getElementById("rock").style.opacity = "20" + "%";
  document.getElementById("rock").style.scale = "1";
  document.getElementById("paper").style.opacity = "20" + "%";
  document.getElementById("paper").style.scale = "1";
  document.getElementById("scissors").style.opacity = "20" + "%";
  document.getElementById("scissors").style.scale = "1";
}

function giveTheCrown() {
  if (brojacRezultataIgraca > brojacRezultataKompa) {
    document.getElementById("compp").innerHTML = brojacRezultataKompa;
    document.getElementById("youu").innerHTML =
      brojacRezultataIgraca + "       👑";
  } else if (brojacRezultataKompa > brojacRezultataIgraca) {
    document.getElementById("youu").innerHTML = brojacRezultataIgraca;
    document.getElementById("compp").innerHTML =
      brojacRezultataKompa + "       👑";
  } else if (brojacRezultataIgraca == brojacRezultataKompa) {
    document.getElementById("youu").innerHTML = brojacRezultataIgraca;
    document.getElementById("compp").innerHTML = brojacRezultataKompa;
  }
}
