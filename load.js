//Made by TheTastyPi
function objectToDecimal(object) {
  for (let i in object) {
    if (
      typeof object[i] == "string" &&
      !isNaN(new Decimal(object[i]).mag) &&
      !(new Decimal(object[i]).sign == 0 && object[i] != "0")
    ) {
      object[i] = new Decimal(object[i]);
    }
    if (typeof object[i] == "object") {
      objectToDecimal(object[i]);
    }
  }
}

function merge(base, source) {
  for (let i in base) {
    if (source[i] != undefined) {
      if (
        typeof base[i] == "object" &&
        typeof source[i] == "object" &&
        !isDecimal(base[i]) &&
        !isDecimal(source[i]) &&
        base[i] != player.achievement
      ) {
        // Ygnour
        merge(base[i], source[i]);
      } else {
        if (isDecimal(base[i]) && !isDecimal(source[i])) {
          base[i] = new Decimal(source[i]); // Ignore..
        } else if (!isDecimal(base[i]) && isDecimal(source[i])) {
          base[i] = source[i].toNumber();
        } else {
          base[i] = source[i];
        }
      }
    }
  }
}

function isDecimal(x) {
  if (x.mag == undefined) {
    return false;
  } else {
    return true;
  }
}

var savegame;

function load() {
  if (localStorage.getItem("softcapped")) {
    savegame = JSON.parse(localStorage.getItem("softcapped"));
    objectToDecimal(savegame);
    merge(player, savegame);
  }
}
