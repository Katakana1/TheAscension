var allocatedEnergy;
var skill;
var power;
var powerEffect;
var flaws;
var flawsEffect;
var stabl;
var stablEffect;
function varupd(){
  skill = D(player.money).mul(2).sqrt();
  power = D(player.powxp).mul(2).sqrt();
  powerEffect = D(power).pow(0.45).floor();
  stabl = D(player.stbxp).mul(2).sqrt().div(25);
  stablEffect = D(stabl).pow(0.85).add(1);
  flaws = Dc.max(D(skill).div(25).pow(2).mul(12.5).sub(12.5).div(stablEffect).sub(D(stablEffect).sub(1)),0);
  if(player.flawunlocked){
    flawsEffect = Dc.min(D(flaws).add(1).pow(0.6),D(skill));
  } else {
    flawsEffect = D(1);
  }
}
function allocUpd(){
  allocatedEnergy = D(player.skillalloc).add(player.poweralloc).add(player.stablalloc);
}
