function htmlupd(){
  document.getElementById("skill").textContent = notate(skill);
  document.getElementById("power").textContent = notate(power);
  document.getElementById("powerEffect").textContent = notate(powerEffect,0);
  document.getElementById("energy").textContent = notate(player.energy,0);
  document.getElementById("unalloc").textContent = notate(D(player.energy).sub(allocatedEnergy),0);
  document.getElementById("flaws").textContent = notate(flaws);
  document.getElementById("flawsEffect").textContent = notate(flawsEffect);
  document.getElementById("stabl").textContent = notate(stabl);
  document.getElementById("stablEffect").textContent = notate(stablEffect);
  if(player.powerunlocked == true){
    document.getElementById("power-section").style.display = "block";
  } else {
    document.getElementById("power-section").style.display = "none";
  }
  if(player.flawunlocked == true){
    document.getElementById("flaws-display").style.display = "block";
    document.getElementById("stabl-section").style.display = "block";
  } else {
    document.getElementById("flaws-display").style.display = "none";
    document.getElementById("stabl-section").style.display = "none";
  }
}
function allocHtmlUpd(){
  document.getElementById("allocated").textContent = notate(D(allocatedEnergy),0);
  document.getElementById("skillalloc").textContent = notate(D(player.skillalloc),0);
  document.getElementById("poweralloc").textContent = notate(D(player.poweralloc),0);
  document.getElementById("stablalloc").textContent = notate(D(player.stablalloc),0);
}
