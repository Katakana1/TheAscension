var time = Date.now();
var diff;
function playerupd(){
  diff = (Date.now()-time)/1000;
  player.money = D(player.money).add(D(player.skillalloc).mul(diff).div(flawsEffect));
  player.powxp = D(player.powxp).add(D(player.poweralloc).mul(skill).mul(diff).div(flawsEffect));
  player.stbxp = D(player.stbxp).add(D(player.stablalloc).mul(skill).mul(diff).div(flawsEffect));
  player.energy = D(powerEffect).add(1);
  time = Date.now();
  if(skill.gte(6)){
    player.powerunlocked = true;
  }
  if(skill.gte(25)){
    player.flawunlocked = true;
  } else {
    player.flawunlocked = false;
  }
}
