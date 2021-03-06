// Decimals n' stuff
let D = x => {
  return new Decimal(x)
}

var Dc = Decimal

function notate(x,prec=2){
  if(D(x).gte(0) && D(x).lte(10000)){
    return D(x).toNumber().toFixed(prec);
  } else if(D(x).log10().lte(10000)){
    return D(10).pow(D(x).log10().toNumber()%1).toNumber().toFixed(2) + "e" + D(x).log10().floor();
  }
}

// Creates the main game variable
function defPlayer(){
  this.money = D(0);
  this.energy = D(1);
  this.powxp = D(0);
  this.skillalloc = D(0);
  this.poweralloc = D(0);
  this.powerunlocked = false;
  this.flawunlocked = false;
  this.stbxp = D(0);
  this.stablalloc = D(0);
}

// Allocates energy to a stat
function allocate(energy,stat){
  var endVal = D(allocatedEnergy).add(energy)
  var locEndVal = D(player[stat+"alloc"]).add(energy)
  if(endVal.lte(player.energy) && locEndVal.gte(0)){
    player[stat+"alloc"] = D(player[stat+"alloc"]).add(energy);
    allocUpd();
    allocHtmlUpd();
  }
}

function initialize(){
  allocUpd();
  allocHtmlUpd();
}

function loop(){
  varupd();
  playerupd();
  htmlupd();
}

var player = new defPlayer

// Save handling //
function save(){
  let str = JSON.stringify(player);
  localStorage.setItem("softcapped", str);
}

function hardreset(){
  player = new defPlayer;
  initialize();
}

if(localStorage.getItem("softcapped") != "undefined"){
  load();
  initialize();
}

setInterval(loop,33);
setInterval(save,5000);
